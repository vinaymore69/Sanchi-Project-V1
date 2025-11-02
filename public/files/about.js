// LANGUAGE SECTION
const content = {
  english: {
    content0: `SanChi`,
    content1: `Why We Exist`,
    content2: `Home`,
    content3: `About`,
    content4: `Language`,
    content5: `Contact`,
    content6: `Resources`,
    content7: `Sanchi is a platform dedicated to the education and empowerment of girls. We exist to create opportunities for young girls to access quality education, nurturing their potential and enabling them to build a brighter future. By supporting Sanchi, you help break barriers to education, fostering self-confidence, independence, and a path out of poverty. Our mission is to empower every girl to dream, learn, and achieve, ensuring they have the tools to thrive and succeed in life.`,
  },
  hindi: {
    content0: `सांची`,
    content1: `हमारा अस्तित्व क्यों है ?`,
    content2: `घर`,
    content3: `हमारे बारे में`,
    content4: `भाषा`,
    content5: `संपर्क`,
    content6: `संसाधन`,
    content7: `सांची लड़कियों की शिक्षा और सशक्तिकरण के लिए समर्पित एक मंच है। हम युवा लड़कियों के लिए गुणवत्तापूर्ण शिक्षा प्राप्त करने, उनकी क्षमता का पोषण करने और उन्हें एक उज्जवल भविष्य बनाने में सक्षम बनाने के अवसर पैदा करने के लिए मौजूद हैं। सांची का समर्थन करके, आप शिक्षा की बाधाओं को तोड़ने, आत्मविश्वास, स्वतंत्रता और गरीबी से बाहर निकलने का मार्ग प्रशस्त करने में मदद करते हैं। हमारा मिशन हर लड़की को सपने देखने, सीखने और हासिल करने के लिए सशक्त बनाना है, यह सुनिश्चित करना है कि उनके पास जीवन में आगे बढ़ने और सफल होने के लिए उपकरण हों।`,
  },
  marathi: {
    content0: `सांची`,
    content1: `आम्ही  का अस्तित्वात आहे ?`,
    content2: `घर`,
    content3: `आमच्याबद्दल`,
    content4: `भाषा`,
    content5: `संपर्क`,
    content6:`संसाधने`,
    content7: `सांची हे मुलींच्या शिक्षण आणि सक्षमीकरणासाठी वाहिलेले व्यासपीठ आहे. आम्ही तरुण मुलींना दर्जेदार शिक्षण मिळवण्याच्या संधी निर्माण करण्यासाठी, त्यांच्या क्षमतांचे पालनपोषण करण्यासाठी आणि त्यांना उज्ज्वल भविष्य घडवण्यासाठी सक्षम करण्यासाठी अस्तित्वात आहोत. सांचीला पाठिंबा देऊन, तुम्ही शिक्षणातील अडथळे दूर करण्यात, आत्मविश्वास, स्वातंत्र्य आणि गरिबीतून मार्ग काढण्यास मदत करता. प्रत्येक मुलीला स्वप्न पाहणे, शिकणे आणि साध्य करणे हे आमचे ध्येय आहे, त्यांच्याकडे जीवनात भरभराटीची आणि यशस्वी होण्याची साधने आहेत याची खात्री करणे.`,
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
    languageMenu.style.top = "-100vh"; // Hide it off-screen
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
    languagesSection.style.top = "-100vh";
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

