// LANGUAGE SECTION
const content = {
  english: {
    content0: `Reset Password: `,
    content1: `Email ID`,
    content2: `New Password`,
    content3: `Confirm Password`,
    content4: `Submit`,
    content107: `Home`,
    content108: `About`,
    content109: `Language`,
    content110: `Contact`,
    content111: `Resources`,


    content114: `Home`,
    content115: `About`,
    content116: `Language`,
    content117: `Contact`,
    content118: `Resources`,
    content119: `Dashboard`,


    content201: `© 2025 Vidyalankar Polytechnic. All Rights Reserved.`,
    content202: `Privacy Policy`,
    content203: `Gallery`,
    content204: `Volunteering is at the very core of being a human. No one has made it through life without someone else's help. — Heather French Henry`,
    content205: `Innovators`,
    content206: `Sponcers`,
  },
  hindi: {
    content0: `पासवर्ड रीसेट करें`,
    content1: `ईमेल आईडी`,
    content2: `नया पासवर्ड`,
    content3: `पासवर्ड की पुष्टि करें`,
    content4: `सबमिट करें`,
    content107: `होम`,
    content108: `परिचय`,
    content109: `भाषा`,
    content110: `संपर्क`,
    content111: `संसाधन`,

    content114: `होम`,
    content115: `परिचय`,
    content116: `भाषा`,
    content117: `संपर्क`,
    content118: `संसाधन`,
    content119: `डैशबोर्ड`,


    content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्वाधिकार सुरक्षित।`,
    content202: `गोपनीयता नीति`,
    content203: `गैलरी`,
    content204: `"स्वयंसेवा मानव होने की मूल आत्मा में है। किसी ने भी जीवन में बिना किसी अन्य की मदद के नहीं चला है।" — हेदर फ्रेंच हेनरी`,
    content205: `आविष्कारक`,
    content206: `स्पॉन्सर्स`,
  },
  marathi: {
    content0: `पासवर्ड रीसेट करा`,
    content1: `ईमेल आयडी`,
    content2: `नवीन पासवर्ड`,
    content3: `पासवर्डची पुष्टी करा`,
    content4: `सबमिट करा`,
    content107: `होम`,
    content108: `आमच्याबद्दल`,
    content109: `भाषा`,
    content110: `संपर्क`,
    content111: `संसाधने`,

    content114: `होम`,
    content115: `आमच्याबद्दल`,
    content116: `भाषा`,
    content117: `संपर्क`,
    content118: `संसाधने`,
    content119: `डॅशबोर्ड`,

    content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्व हक्क राखीवून ठेवले गेले आहेत।`,
    content202: `गोपनीयता धोरण`,
    content203: `गॅलरी`,
    content204: `"स्वयंसेवा ही मानव असण्याचा गाभा आहे. दुसऱ्याच्या मदतीशिवाय कोणीही आयुष्यात यशस्वी झालेले नाही." - हीदर फ्रेंच हेन्री`,
    content205: `आविष्कारक`,
    content206: `प्रायोजक`,
  },
};
  
  const fonts = {
    english: "Poppins",
    hindi: "Hind",
    marathi: "Tiro Devanagari Marathi",
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
    // Set the language preference in a cookie
    document.cookie = "language=" + language;
  
    // Check if the content for the selected language exists
    if (content[language]) {
      // Update the innerHTML of elements based on language content
      Object.keys(content[language]).forEach((key) => {
        const element = document.getElementById(key);
        if (element) {
          element.innerHTML = content[language][key];
        }
      });
  
      // Update the font family for the entire body based on the language
      if (fonts[language]) {
        document.body.style.fontFamily = fonts[language];
      }
  
   
    }
  
    // Hide the languages section and restore page overflow
    const languagesSection = document.getElementById("languages-section");
    if (languagesSection) {
      languagesSection.style.top = "-150vh";
    }
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
  