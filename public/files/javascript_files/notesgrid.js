const content = {
    english: {
        content1: "Notes",
        content2: "Science",
        content3: "Maths",
        content4: "Geography",
        content5: "Hindi",
        content6: "English",

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
        content206: `Sponsors`,
    }, hindi: {
        content1: "नोट्स",
        content2: "विज्ञान",
        content3: "गणित",
        content4: "भूगोल",
        content5: "हिंदी",
        content6: "अंग्रेज़ी",

        // menu hindi
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
        // content113: `लॉगिन`,
        content114: `होम`,
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
    }, marathi: {
        content1: "नोट्स",
        content2: "विज्ञान",
        content3: "गणित",
        content4: "भूगोल",
        content5: "हिंदी",
        content6: "इंग्रजी",

        // menu marathi
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
        // content113: `लॉगिन`,
        content114: `होम`,
        content115: `आमच्याबद्दल`,
        content116: `भाषा`,
        content117: `संपर्क`,
        content118: `संसाधने`,
        // menu end

        content201: "© २०२५ विद्यालंकार पॉलिटेक्निक. सर्व हक्क राखीव",
        content202: "गोपनीयता धोरण",
        content203: "गॅलरी",
        content204: `स्वयंसेवा ही मानव असण्याचा गाभा आहे. दुसऱ्याच्या मदतीशिवाय कोणीही आयुष्यात यशस्वी झालेले नाही. - हीदर फ्रेंच हेन्री`,
        content205: "नवोन्मेषक",
        content206: "प्रायोजक",
    }
};

const content2 = {
    english: {
        content1: "Class ",
    }, hindi: {
        content1: "कक्षा ",
    }, marathi: {
        content1: "वर्ग ",
    }
}

const fonts = {
    english: "Poppins",
    hindi: "Hind",
    marathi: "Tiro Devanagari Marathi"
};

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
    // Set the language preference in a cookie
    document.cookie = "language=" + language;

    // Check if the content for the selected language exists
    if (content[language]) {
        // Update the innerHTML of elements based on language content
        Object.keys(content[language]).forEach((key) => {
            console.log(key);
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = content[language][key];
            }
        });

        // Update elements based on class name
        const generatedElements = document.querySelectorAll(".class-gen");

        if (generatedElements.length > 0) {
            generatedElements.forEach((element) => {
                const key = element.getAttribute("data-key");
                console.log(key);
                if (key && content2[language][key]) {
                    element.innerHTML = content2[language][key];
                }
            });
        }

        // Update the font family for the entire body based on the language
        if (fonts[language]) {
            document.body.style.fontFamily = fonts[language];
        }

        // Apply additional style changes specific to the language
        updateStyleChanges(language);
    }

    // Hide the languages section and restore page overflow
    const languagesSection = document.getElementById("languages-section");
    if (languagesSection) {
        languagesSection.style.top = "-150vh";
    }
    document.body.style.overflow = "auto";

    // Adjust font size specifically for Marathi
    const contentElement = document.getElementById("content1");
    if (contentElement && language === "marathi") {
        contentElement.style.fontSize = "11vw";
        contentElement.style.wordSpacing = "2vw";
        contentElement.style.fontWeight = "700";
        contentElement.style.lineHeight = "13vw";
    } else if (contentElement && language === "hindi") {
        contentElement.style.fontSize = "14vw";
        contentElement.style.wordSpacing = "2vw";
        contentElement.style.fontWeight = "700";
        contentElement.style.lineHeight = "17vw";
    } else if (contentElement) {
        // Reset to default font size for other languages
        contentElement.style.fontSize = "";
    }
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

function updateStyleChanges(language) {
    const contentElement = document.getElementById("content1");

    if (contentElement) {
        if (language == "Marathi") {
            contentElement.style.fontSize = "0vw";
        }
    } else {
        console.warn("Element with id 'content1' not found.");
    }
}
// language conversion end

// language section for desktop
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
// language section for desktop end

// language section for mobile
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
// language section for mobile ends






//swiper start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});