function calculateAge(dateStr) {
    let strDate, strMonth, strYear;
    let age = 0;

    console.log(dateStr);

    if(dateStr.length === 10) {
        const splitArr = dateStr.split('-');
        strYear = parseInt(splitArr[0], 10);
        strMonth = parseInt(splitArr[1], 10);
        strDate = parseInt(splitArr[2], 10);
    }

    const date = new Date();
    const currentMonth = date.getMonth() + 1; // getMonth() returns 0-based months
    const currentYear = date.getFullYear();
    const currentDate = date.getDate();

    age = currentYear - strYear;

    // Adjust age if birthday hasn't occurred yet this year
    if (currentMonth < strMonth || (currentMonth === strMonth && currentDate < strDate)) {
        age = age - 1;
    }

    console.log("Your age is: "+ age); // Always log the age

    return age;
}


module.exports=calculateAge;