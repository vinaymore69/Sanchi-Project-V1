function createAudioCard(storyName, authorName, description, imagePath) {
    const audioContainer = document.querySelector('.audio-container');
  
    const newCard = document.createElement('div');
    newCard.classList.add('audio-card');
  
    newCard.innerHTML = `
      <div class="audio-image">
          <img src="${imagePath}" alt="${storyName}">
      </div>
      <div class="audio-content">
          <h2>${storyName}</h2>
          <h5>${authorName}</h5>
          <p>${description}</p>
          <button>
              <span>View</span>
              <span class="material-symbols-outlined">arrow_right</span>
          </button>
      </div>
    `;
  
    audioContainer.appendChild(newCard);
  }

  
  // createAudioCard(
  //   "A New Adventure",
  //   "John Doe",
  //   "This is an exciting story about a thrilling journey filled with twists and turns.",
  //   "images/22.jpeg"
  // );




  
    // language area
    
    
    const content = {
      english: {
          content0:`SanChi`,
          content1:`Home`,
          content2:`About`,
          content3:`Language  <span style="font-size: 20px">&#8595;</span>`,
          content4:`Contact`,
          content5:`Resources`,
          content6: `SanChi <br> Education for Girls`,
        
  
      },
      hindi: {
          content0:'सांची',
          content1:` &nbsp; मुखपृष्ठ &nbsp; `,
          content2:` परिचय `,
          content3:`&nbsp;  भाषा &nbsp; `,
          content4:`&nbsp;  संपर्क करें  &nbsp; `,
          content5:`&nbsp; संसाधन &nbsp; `,
          content6: `सांची - <br> लड़कियों के लिए शिक्षा`,
          
      },
      marathi: {
          content0: `सांची` ,
          content1:` &nbsp; मुख्यपृष्ठ &nbsp; `,
          content2:` आमच्याबद्दल `,
          content3:`भाषा`,
          content4:`संपर्क करा`,
          content5:`स्रोत`,   
          content6: `सांची:<br> मुलींच्या शिक्षणासाठी`,     
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




  