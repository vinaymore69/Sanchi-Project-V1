const content = {
    english: {
        // content0: 'SanChi',
        
                // menu english
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
                // content113:`Login`,
                content114: `Home`,
                content115: `About`,
                content116: `Languages`,
                content117: `Contact`,
                content118: `Resources`,
                // menu end

        content201: `© 2025 Vidyalankar Polytechnic. All Rights Reserved.`,
        content202: `Privacy Policy`,
        content203: `Gallery`,
        content204: `Volunteering is at the very core of being a human. No one has made it through life without someone else's help. — Heather French Henry`,
        content205: `Innovators`,
        content206: `Sponcers`,
    },
    hindi: {
        content6: "उपशीर्षक पूर्वावलोकन",
        content7: "उपशीर्षक संपादित करें",
        content8: "ऑडियो पूर्वावलोकन",
        content9: "संपादित करें",
        content10: "ऑडियो उपशीर्षक संपादक",
        
        // menu hindi
        content101: `भाषा चुनें`,
        content102: `संसाधन`,
        content103: `ऑडियो पुस्तकें`,
        content104: `वीडियो`,
        content105: `नोट्स डाउनलोड`,
        content106: `बंद करें`,
        content107: `&nbsp; मुख्यपृष्ठ &nbsp;`,
        content108: `परिचय`,
        content109: `भाषा`,
        content110: `संपर्क`,
        content111: `संसाधन`,
        content112: `डैशबोर्ड`,
        // content113: `लॉगिन`,
        content114: `&nbsp; मुख्यपृष्ठ &nbsp;`,
        content115: `परिचय`,
        content116: `भाषाएँ`,
        content117: `संपर्क`,
        content118: `संसाधन`,
        // menu end





        // FOOTER CONTENT HINDI START
        content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्वाधिकार सुरक्षित।`,
        content202: `गोपनीयता नीति`,
        content203: `गैलरी`,
        content204: `"स्वयंसेवा मानव होने की मूल आत्मा में है। किसी ने भी जीवन में बिना किसी अन्य की मदद के नहीं चला है।" — हेदर फ्रेंच हेनरी`,
        content205: `नवाचारी`,
        content206: `प्रायोजक`,
        // FOOTER CONTENT HINDI END 
    },    marathi: {
        content6: "सबटायटल पूर्वावलोकन",
        content7: "उपशीर्षके संपादित करा",
        content8: "ऑडिओ पूर्वावलोकन",
        content9: "संपादन",
        content10: "ऑडियो उपशीर्षक संपादक",

        // menu marathi
        content101: `भाषा निवडा`,
        content102: `संसाधने`,
        content103: `ऑडिओ पुस्तके`,
        content104: `व्हिडिओ`,
        content105: `नोट्स डाउनलोड`,
        content106: `बंद करा`,
        content107: `&nbsp; मुख्यपृष्ठ &nbsp;`,
        content108: `आमच्याबद्दल`,
        content109: `भाषा`,
        content110: `संपर्क`,
        content111: `संसाधने`,
        content112: `डॅशबोर्ड`,
        // content113: `लॉगिन`,
        content114: `&nbsp; मुख्यपृष्ठ &nbsp;`,
        content115: `आमच्याबद्दल`,
        content116: `भाषा`,
        content117: `संपर्क`,
        content118: `संसाधने`,
        // menu end

        content201: `© २०२५ विद्यालंकार पॉलिटेक्निक. सर्व हक्क राखीव`,
        content202: `गोपनीयता धोरण`,
        content203: `गॅलरी`,
        content204: `"स्वयंसेवा ही मानव असण्याचा गाभा आहे. दुसऱ्याच्या मदतीशिवाय कोणीही आयुष्यात यशस्वी झालेले नाही." - हीदर फ्रेंच हेन्री`,
        content205: `नवोन्मेषक`,
        content206: `प्रायोजक`,
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
            console.log(key);
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