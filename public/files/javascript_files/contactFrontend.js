const content = {
    english: {
        // content0:'SanChi',
        content1: 'First Name:',
        content2: 'Last Name:',
        content3: 'E-mail:',
        content4: 'Tittle:',
        content5: 'Message:',
        content6: 'Submit',
        // content7: 'Attachments',
        content8: '+ Add more Attachment',
        content9: '* File size should not be greater than 2 mb & also file without extension',
        // filename: 'filename.placeholder = "Enter your email";',
        content11: 'Contact Us',
        content12: 'Home',
        content13: 'About',
        content14: 'Language',
        content15: 'Contact',
        content16: 'Resources',



        
    content201: `© 2025 Vidyalankar Polytechnic. All Rights Reserved.`,
    content202: `Privacy Policy`,
    content203: `Gallery`,
    content204: `Volunteering is at the very core of being a human. No one has made it through life without someone else's help. — Heather French Henry`,
    content205: `Innovators`,
    content206: `Sponcers`,
    

    },
    hindi: {
        // content0:'सांची',
        content1: 'पहला नाम:',
        content2: 'अंतिम नाम:',
        content3: 'ईमेल:',
        content4: 'शीर्षक:',
        content5: 'संदेश:',
        content6: 'प्रस्तुत',
        // content7: 'अटैचमेंट',
        content8: '+ अटैचमेंट जोड़ें',
        content9: '* फ़ाइल का आकार 2 mb से अधिक नहीं होना चाहिए और फ़ाइल के बिना एक्सटेंशन',
        // filename: 'filename.placeholder = "फ़ाइल का नाम दर्ज करें";',
        content11: 'हमसे संपर्क करें:',
        content12: 'होम',
        content13: 'के बारे में',
        content14: 'भाषा',
        content15: 'संपर्क',
        content16: 'संसाधन',

        
        // FOOTER CONTENT HINDI START
        content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्वाधिकार सुरक्षित।`,
        content202: `गोपनीयता नीति`,
        content203: `गैलरी`,
        content204: `"स्वयंसेवा मानव होने की मूल आत्मा में है। किसी ने भी जीवन में बिना किसी अन्य की मदद के नहीं चला है।" — हेदर फ्रेंच हेनरी`,
        content205: `नवाचारी`,
        content206: `प्रायोजक`,
        // FOOTER CONTENT HINDI END 
    
    },
    marathi: {
        // content0:'सांची',
        content1: 'पहिलं नाव:',
        content2: 'आडनाव:',
        content3: 'ईमेल:',
        content4: 'शीर्षक:',
        content5: 'संदेश:',
        content6: 'सबमिट करा',
        // content7: '+ जोडण्यासाठी फाइल',
        content8: '+ अटॅचमेंट जोडा',
        content9: '* फाइल का आकार 2 mb पेक्षा जास्त नसावा आणि फाइल विहिरीत असावी',
        // filename: 'filename.placeholder = "फाइल नाव प्रविष्ट करा";',
        content11: 'आमच्याशी संपर्क साधा:',
        content12: 'होम',
        content13: 'बद्दल',
        content14: 'भाषा',
        content15: 'संपर्क',
        content16: 'साधने',

        // footer start marathi
        content201: "© २०२५ विद्यालंकार पॉलिटेक्निक. सर्व हक्क राखीव",
        content202: "गोपनीयता धोरण",
        content203: "गॅलरी",
        contnet204: `स्वयंसेवा ही मानव असण्याचा गाभा आहे. दुसऱ्याच्या मदतीशिवाय कोणीही आयुष्यात यशस्वी झालेले नाही. - हीदर फ्रेंच हेन्री`,
        content205: "नवोन्मेषक",
        content206: "प्रायोजक",
        // footer start marathi

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

    const language = getCookie("language") || "english"; // Default to English
    updateLanguage(language);
});

// Toggle the visibility of the language menu (slide animation)
function toggleLanguageMenu() {
    const languageMenu = document.getElementById("languages-section");

    if (languageMenu.style.top === "0px") {
        languageMenu.style.top = "-150vh"; // Hide it off-screen
    } else {
        languageMenu.style.top = "0"; // Slide it into view
    }
}

// Update the page content based on the selected language
function updateLanguage(language) {
    document.cookie = "language=" + language; // Set the language cookie

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
