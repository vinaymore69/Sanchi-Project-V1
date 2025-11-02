const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function definePassport(passport, getUserByUsername, getUserById) {
    // Authentication logic
    const authenticateUser = async (username, password, done) => {
        try {
            // Retrieve user by email using the provided function
            const user = await getUserByUsername(username);
            
            if(!user) {
                return done(null, false, {message: 'User does not exist'});
            }

            // Compare hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password' });
            }

            // Check if user is verified
            if (!user.verified) {
                // Custom handling for unverified users
                return done(null, { ...user, partialAuth: true }, { message: 'Account not verified' });
            }


            // Authentication successful (will go to serializeUser and desirialzeUser for session storage)
            return done(null, user);
        } catch (error) {
            console.error(error);
            return done(error);
        }
    };

    // Define the strategy
    passport.use(
        'local',
        new LocalStrategy(
            { usernameField: 'username', passwordField: 'password' }, // Define fields for username and password
            authenticateUser
        )
    );

    // Serialize user to store in session
    passport.serializeUser((user, done) => {
        done(null, user.id); // Use user's ID for session storage
    });

    // Deserialize user from session
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await getUserById(id);

            if (!user.verified) {
                // If the user is not verified, redirect to verification page
                return done(null, {email: user.email, partialAuth: true});
            }

            done(null, user);
        } catch (error) {
            console.error(error);
            done(error, null);
        }
    });
}

module.exports = definePassport;
