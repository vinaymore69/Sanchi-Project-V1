const attachmentsContainer = document.getElementById('attachments-container');
const addAttachmentBtn = document.getElementById('add-attachment');

let attachmentCount = 1;

addAttachmentBtn.addEventListener('click', () => {
    attachmentCount++;

    // Create new file and file name input fields
    const fileContainer = document.createElement('div');
    fileContainer.classList.add('file-container');

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.name = 'attachments[]';
    fileInput.id = `attachment-${attachmentCount}`;
    fileInput.accept = 'image/*';

    const fileNameInput = document.createElement('input');
    fileNameInput.type = 'text';
    fileNameInput.name = 'file_names[]';
    fileNameInput.id = `filename-${attachmentCount}`;
    fileNameInput.placeholder = 'Enter file name';

    // Append inputs to the new container
    fileContainer.appendChild(fileInput);
    fileContainer.appendChild(fileNameInput);

    // Append the new container to the attachments section
    attachmentsContainer.appendChild(fileContainer);
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
    alert("Form data submitted successfully!");
    form.reset();
});




function updateFileName() {
    const input = document.getElementById('attachment-1');
    const label = document.getElementById('file-label');

    if (input.files.length > 0) {
        label.textContent = input.files[0].name;
    } else {
        label.textContent = 'Choose a file (Max 2MB)';
    }
}






const content = {
    english: {
      content1: 'First Name:',
      content2: 'Last Name:',
      content3: 'E-mail:',
      content4: 'Title:',
      content5: 'Message:',
      content6: 'Submit',
      content8: '+ Add more Attachment',
      content9: '* File size should not be greater than 2 mb & also file without extension',
      content10: 'Contact Us',
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
      content1: 'पहला नाम:',
      content2: 'अंतिम नाम:',
      content3: 'ईमेल:',
      content4: 'शीर्षक:',
      content5: 'संदेश:',
      content6: 'जमा करें',
      content8: '+ और अटैचमेंट जोड़ें',
      content9: '* फ़ाइल का आकार 2 एमबी से अधिक नहीं होना चाहिए और बिना एक्सटेंशन की फ़ाइल होनी चाहिए',
      content10: 'संपर्क करें',
      content101: `भाषा चुनें`,
      content102: `संसाधन`,
      content103: `ऑडियो पुस्तकें`,
      content104: `वीडियो`,
      content105: `नोट्स डाउनलोड`,
      content106: `बंद करें`,
      content107: `होम`,
      content108: `हमारे बारे में`,
      content109: `भाषा`,
      content110: `संपर्क करें`,
      content111: `संसाधन`,
      content112: `डैशबोर्ड`,
      content114: `होम`,
      content115: `हमारे बारे में`,
      content116: `भाषाएं`,
      content117: `संपर्क करें`,
      content118: `संसाधन`,
      content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्वाधिकार सुरक्षित।`,
      content202: `गोपनीयता नीति`,
      content203: `गैलरी`,
      content204: `सेवा करना मानव होने का मूल है। जीवन में कोई भी बिना किसी और की मदद के नहीं गुज़रा है। — हीदर फ्रेंच हेनरी`,
      content205: `नवप्रवर्तनकर्ता`,
      content206: `प्रायोजक`,
    },
    marathi: {
      content1: 'पहिले नाव:',
      content2: 'आडनाव:',
      content3: 'ई-मेल:',
      content4: 'शीर्षक:',
      content5: 'संदेश:',
      content6: 'सबमिट करा',
      content8: '+ आणखी संलग्नक जोडा',
      content9: '* फाईलचा आकार 2 एमबी पेक्षा जास्त नसावा आणि फाईलमध्ये एक्सटेंशन नसावे',
      content10: 'आमच्याशी संपर्क साधा',
      content101: `भाषा निवडा`,
      content102: `संसाधने`,
      content103: `ऑडिओ पुस्तके`,
      content104: `व्हिडिओ`,
      content105: `नोट्स डाउनलोड`,
      content106: `बंद`,
      content107: `मुख्यपृष्ठ`,
      content108: `आमच्याबद्दल`,
      content109: `भाषा`,
      content110: `संपर्क`,
      content111: `संसाधने`,
      content112: `डॅशबोर्ड`,
      content114: `मुख्यपृष्ठ`,
      content115: `आमच्याबद्दल`,
      content116: `भाषा`,
      content117: `संपर्क`,
      content118: `संसाधने`,
      content201: `© 2025 विद्यालंकार पॉलिटेक्निक. सर्व हक्क राखीव.`,
      content202: `गोपनीयता धोरण`,
      content203: `गॅलरी`,
      content204: `सेवा ही मानवतेचा गाभा आहे. कोणताही माणूस इतरांच्या मदतीशिवाय आयुष्य पार करू शकत नाही. — हीदर फ्रेंच हेनरी`,
      content205: `नाविन्यपूर्ण व्यक्ती`,
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