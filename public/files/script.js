
function page4Animation(){
   
    var elemC= document.querySelector('#elem-container');
    var fixed=document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function(){
        fixed.style.display="block";
       
    });
    elemC.addEventListener("mouseleave", function(){
        fixed.style.display="none";
   
    });
   
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = url(`${image}`);
        });
    });
    }
   
   
    page4Animation();
   
   
    var swiper = new Swiper(".mySwiper", {
        speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
   
   
   
   
    // language area
   
   
    const content = {
        english: {
            content0:'SanChi',
            content1: "Girls’ education is the key to breaking cycles of poverty and unlocking a brighter future",
            content2: "Empower <br> Through <br> Education",
            content3: `We are a group of<br> design-driven,<br>goal-focused creators, producers, and designers who believe
                        that the details make all the difference.`,
            content4: `Girls' education is vital for empowering individuals and transforming communities.
                        It promotes gender equality, reduces poverty, and boosts economic growth.
                        Educated girls contribute to healthier families, stronger societies, and a brighter future for everyone.`,
            content5:"Inspire Her Future",
            content6:"Learn Lead Succeed",
            content7:"Knowledge Lights Freedom",
            content8:"Empower Through Education",
            content9:"Dream Educate Achieve",
            content10:"Home",
            content11:"About",
            content12:"Language  <span style='font-size: 20px'>&#8595;</span>",
            content13:"Contact",
            content14:"Resources",
            content15:` Knowledge `,
            content16:` Through `,
            content17:` Education `,
            content18:` Empower`,
            content19:` Freedom`,
            content20:` Lights`,
            content21:` Dream`,
            content22:` Educate`,
            content23:` Achive`


   
        },
        hindi: {
            content0:'सांची',
            content1: "लड़कियों की शिक्षा ही गरीबी के चक्र को तोड़ने और एक बेहतर भविष्य की राह खोलने की चाबी है।",
            content2: "शिक्षा <br> से <br> सशक्तिकरण",
            content3: "हम एक डिज़ाइन-प्रेरित, लक्ष्य-केंद्रित निर्माताओं, उत्पादकों और डिज़ाइनरों का समूह हैं, जो मानते हैं कि छोटी-छोटी बातें बड़ा अंतर पैदा करती हैं।",
            content4: `लड़कियों की शिक्षा व्यक्तियों को सशक्त बनाने और समुदायों को बदलने के लिए महत्वपूर्ण है।
                        यह लिंग समानता को बढ़ावा देती है, गरीबी को घटाती है, और आर्थिक वृद्धि को बढ़ावा देती है।
                        शिक्षित लड़कियाँ स्वस्थ परिवारों, मजबूत समाजों, और सभी के लिए एक उज्ज्वल भविष्य में योगदान करती हैं।`,
            content5:"उसकी भविष्य को प्रेरित करो",
            content6:"सीखो, नेतृत्व करो, सफल बनो",
            content7:"ज्ञान से स्वतंत्रता का उजियारा",
            content8:"शिक्षा के माध्यम से सशक्त बनाओ",
            content9:"सपने देखो, शिक्षित बनो, हासिल करो",
            content10:` &nbsp; घर &nbsp; `,
            content11:` हमारे बारे में  `,
            content12:`&nbsp;  भाषा &nbsp; `,
            content13:`&nbsp;  संपर्क  &nbsp; `,
            content14:`&nbsp; संसाधन &nbsp; `,
            content15:`  ज्ञान`,
            content16:"के माध्यम से",
            content17:"शिक्षा",
            content18:"सशक्तिकरण",
            content19:"स्वतंत्रता",
            content20:"दीपक",
            content21:"सपना देखे",
            content22:"शिक्षित",
            content23:` हासिल करे`
        },
        marathi: {
            content0:'सांची',
            content1: "मुलींचे शिक्षण ही गरिबीचा फेरा तोडण्याची आणि उज्ज्वल भविष्याची किल्ली आहे.",
            content2: "शिक्षण, <br> सक्षमता, <br> सशक्तीकरण",
            content3: "आम्ही एक डिझाइन-केंद्रित, उद्दिष्ट-केंद्रित निर्माते, निर्मितीकार आणि डिझाइनर्सचा गट आहोत, जे मानतात की तपशील महत्त्वाचा फरक निर्माण करतात.",
            content4: `मुलींचे शिक्षण व्यक्तींना सशक्त करण्यासाठी आणि समुदायांना बदलण्यासाठी महत्त्वाचे आहे.
                        हे लिंग समानतेला प्रोत्साहन देते, गरीबी कमी करते, आणि आर्थिक वाढीला चालना देते.
                        शिक्षित मुली आरोग्यपूर्ण कुटुंबे, मजबूत समाज आणि प्रत्येकासाठी उज्ज्वल भविष्य घडवतात.`,
            content5:"तिच्या भविष्याला प्रेरणा द्या",
            content6:` शिका, नेतृत्व करा, यशस्वी व्हा`,
            content7:"ज्ञानाने स्वातंत्र्याचा प्रकाश",
            content8:"शिक्षणाच्या माध्यमातून सक्षमीकरण",
            content9:"स्वप्न बघा, शिक्षित व्हा, साध्य करा",
            content10:` &nbsp; घर &nbsp; `,
            content11:` आमच्याबद्दल `,
            content12:"भाषा",
            content13:"संपर्क",
            content14:"संसाधने",
            content15:` ज्ञान`,
            content16:`माध्यमातून `,
            content17:"शिक्षणाच्या",
            content18:"सक्षम करा",
            content19:"स्वातंत्र्य",
            content20:`दिवे `,
            content21: "स्वप्न बघा",
            content22:"शिक्षित करा",
            content23:` साध्य करा`          
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
            languageMenu.style.top = "-100vh"; // Hide it off-screen
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
   
        document.getElementById("languages-section").style.top = "-100vh";
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
