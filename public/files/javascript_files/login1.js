// LANGUAGE SECTION
const content = {
  english: {
    content0: `Username: `,
    content1: `Login`,
    content2: `Password: `,
    content3: `Register ?`,
    content4: `Login`,
    content5: `Forgot Password ?`,

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
     
  // FOOTER CONTENT ENGLISH START
    content201: `© 2025 Vidyalankar Polytechnic. All rights reserved.`,
    content202: `Privacy Policy`,
    content203: `Gallery`,
    content204: `"Service is the essence of the human soul. No one has ever lived in this world without the help of others." — Heather French Henry`,
    content205: `Innovative`,
    content206: `Sponsor`,
    // FOOTER CONTENT ENGLISH END

  },
  hindi: {
    content0: `उपयोगकर्ता नाम: `,
    content1: `लॉगिन`,
    content2: `पासवर्ड: `,
    content3: `पंजीकरण करवाना ?`,
    content4: `लॉग इन करें`,
    content5: `पासवर्ड भूल गए ?`,
    content6: `घर`,
    content7: `हमारे बारे में`,

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

  },
  marathi: {
    content0: `वापरकर्तानाव:`,
    content1: `लॉगिन`,
    content2: `नोंदणी करा: `,
    content3: `नोंदणी करा ?`,
    content4: `लॉगिन`,
    content5: `पासवर्ड विसरलात ?`,
    content6: `घर`,
    content7: `आमच्याबद्दल`,

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

    
    // FOOTER CONTENT MARATHI START
    content201: `© 2025 विद्यालंकार पॉलिटेक्निक. सर्व हक्क राखीव.`,
    content202: `गोपनीयता धोरण`,
    content203: `गॅलरी`,
    content204: `"सेवा करणे म्हणजे मानवतेच्या आत्म्याचा एक भाग आहे. कोणताही व्यक्ती जीवनात दुसऱ्याच्या मदतीशिवाय जगू शकत नाही." — हेदर फ्रेंच हेनरी`,
    content205: `नवोन्मेषी`,
    content206: `प्रायोजक`,
    // FOOTER CONTENT MARATHI END
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

    // Apply additional style changes specific to the language
    updateStyleChanges(language);
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

function updateStyleChanges(language) { }




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
