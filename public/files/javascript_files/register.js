// Change color to black when the date input changes
document.getElementById("date").addEventListener("change", function () {
    this.style.color = "black";
});




// language area

const content = {
    english: {
        content7: `Sign up:`,
        content8: `First Name:`,
        content9: `Last Name:`,
        content10: `Email:`,
        content11: `Password:`,
        content12: `Confirm Password:`,
        content13: `Date of Birth:`,
        content14: `Gender:`,
        content15: `Male`,
        content16: `Female`,
        content17: `Other`,
        content18: `Username:`,
        content19: `Address:`,
        content20: `Submit`,
     
        content23: `Show Password`,

    
        content101: `Choose Language`,
        content102: `Resources`,
        content103: `Audio Books`,
        content104: `Video`,
        content105: `Notes Download`,
        content106: `Close`,
        content107: `Home`,
        content108: `About`,
        content109: `Language`,
        content110: `Contact`,
        content111: `Resources`,
        content112: `Dashboard`,
      
        content114: `Home`,
        content115: `About`,
        content116: `Languages`,
        content117: `Contact`,
        content118: `Resources`,

        content201: `© 2025 Vidyalankar Polytechnic. All Rights Reserved.`,
        content202: `Privacy Policy`,
        content203: `Gallery`,
        content204: `Volunteering is at the very core of being a human. No one has made it through life without someone else's help. — Heather French Henry`,
        content205: `Innovators`,
        content206: `Sponsors`,

    },
    hindi: {
        content7: `साइन अप करें`,
        content8: `पहला नाम`,
        content9: `अंतिम नाम`,
        content10: `ईमेल`,
        content11: `पासवर्ड`,
        content12: `पासवर्ड की पुष्टि करें`,
        content13: `जन्मतिथि`,
        content14: `लिंग`,
        content15: `पुरुष`,
        content16: `महिला`,
        content17: `अन्य`,
        content18: `उपयोगकर्ता नाम`,
        content19: `पता`,
        content20: `सबमिट करें`,
      
        content23: `पासवर्ड दिखाएं`,

    
        content101: `भाषा चुनें`,
        content102: `संसाधन`,
        content103: `ऑडियो पुस्तकें`,
        content104: `वीडियो`,
        content105: `नोट्स डाउनलोड`,
        content106: `बंद करें`,
        content107: `होम`,
        content108: `परिचय`,
        content109: `भाषा`,
        content110: `संपर्क`,
        content111: `संसाधन`,
        content112: `डैशबोर्ड`,
      
        content114: `होम`,
        content115: `परिचय`,
        content116: `भाषाएँ`,
        content117: `संपर्क`,
        content118: `संसाधन`,
    


        content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्वाधिकार सुरक्षित।`,
        content202: `गोपनीयता नीति`,
        content203: `गैलरी`,
        content204: `"स्वयंसेवा मानव होने की मूल आत्मा में है। किसी ने भी जीवन में बिना किसी अन्य की मदद के नहीं चला है।" — हेदर फ्रेंच हेनरी`,
        content205: `नवाचारी`,
        content206: `प्रायोजक`,
       
    },
    marathi: {
        content7: `साइन अप करा`,
        content8: `पहिलं नाव`,
        content9: `आडनाव`,
        content10: `ईमेल`,
        content11: `पासवर्ड`,
        content12: `पासवर्डची पुष्टी करा`,
        content13: `जन्मतारीख`,
        content14: `लिंग`,
        content15: `पुरुष`,
        content16: `महिला`,
        content17: `इतर`,
        content18: `वापरकर्तानाव`,
        content19: `पत्ता:`,
        content20: `सबमिट करा`,
       
        content23: `पासवर्ड दाखवा`,

      
        content101: `भाषा निवडा`,
        content102: `संसाधने`,
        content103: `ऑडिओ पुस्तके`,
        content104: `व्हिडिओ`,
        content105: `नोट्स डाउनलोड`,
        content106: `बंद करा`,
        content107: `होम`,
        content108: `आमच्याबद्दल`,
        content109: `भाषा`,
        content110: `संपर्क`,
        content111: `संसाधने`,
        content112: `डॅशबोर्ड`,
     
        content114: `होम`,
        content115: `आमच्याबद्दल`,
        content116: `भाषा`,
        content117: `संपर्क`,
        content118: `संसाधने`,
       

        content201: "© २०२५ विद्यालंकार पॉलिटेक्निक. सर्व हक्क राखीव",
        content202: "गोपनीयता धोरण",
        content203: "गॅलरी",
        content204: `स्वयंसेवा ही मानव असण्याचा गाभा आहे. दुसऱ्याच्या मदतीशिवाय कोणीही आयुष्यात यशस्वी झालेले नाही. - हीदर फ्रेंच हेन्री`,
        content205: "नवोन्मेषक",
        content206: "प्रायोजक",
    }
};

const fonts = {
    english: "Poppins",
    hindi: "Hind",
    marathi: "Tiro Devanagari Marathi"
};


document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle");
    languageToggle.addEventListener("click", toggleLanguageMenu);

    const closingButton = document.getElementById("closing-span");
    closingButton.addEventListener("click", toggleLanguageMenu);

    const englishOption = document.getElementById("english-option");
    const hindiOption = document.getElementById("hindi-option");
    const marathiOption = document.getElementById("marathi-option");

    englishOption.addEventListener("click", () => updateLanguage("english"));
    hindiOption.addEventListener("click", () => updateLanguage("hindi"));
    marathiOption.addEventListener("click", () => updateLanguage("marathi"));

    const language = getCookie("language") || "english"; 
    updateLanguage(language);
});


function toggleLanguageMenu() {
    const languageMenu = document.getElementById("languages-section");

    if (languageMenu.style.top === "0px") {
        languageMenu.style.top = "-150vh"; 
    } else {
        languageMenu.style.top = "0"; 
    }
}


function updateLanguage(language) {
    document.cookie = "language=" + language; 

    if (content[language]) {
        Object.keys(content[language]).forEach(key => {
            document.getElementById(key).innerHTML = content[language][key];
        });

        document.body.style.fontFamily = fonts[language];
    }

    document.getElementById("languages-section").style.top = "-150vh";
    document.body.style.overflow = "auto";
}

// Get the value of a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
    }, {});
    return cookies[name];
}




document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle1");
    languageToggle.addEventListener("click", toggleLanguageMenu);

    const closingButton = document.getElementById("closing-span");
    closingButton.addEventListener("click", toggleLanguageMenu);

    const englishOption = document.getElementById("english-option");
    const hindiOption = document.getElementById("hindi-option");
    const marathiOption = document.getElementById("marathi-option");

    englishOption.addEventListener("click", () => updateLanguage("english"));
    hindiOption.addEventListener("click", () => updateLanguage("hindi"));
    marathiOption.addEventListener("click", () => updateLanguage("marathi"));

    const language = getCookie("language") || "english"; // Default to English
    updateLanguage(language);
});





