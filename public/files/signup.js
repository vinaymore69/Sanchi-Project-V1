const showPassword = document.getElementById("sp");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const formObj = document.getElementById("signup-form");

showPassword.addEventListener("click", () => {
    if(showPassword.checked === true && passwordField.type == "password" && confirmPasswordField.type === "password") {
        passwordField.type = "text";
        confirmPasswordField.type="text";
    } else if(showPassword.checked === false && passwordField.type == "text" && confirmPasswordField.type == "text") { 
        passwordField.type = "password";
        confirmPasswordField.type = "password";
    }
});

formObj.addEventListener("submit",  async (e) => {
    e.preventDefault(); // Prevent default form submission

    if(passwordField.value !== confirmPasswordField.value) {
        alert("Password does not match");
        confirmPasswordField.value = '';
        return;
    }

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries()); // Convert form data to an object

    try {
        const response = await fetch('/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formObject),
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.error); // Display error message
        } else {
            window.location=`http://localhost:3000/auth/verifyEmailPage`;
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
});
