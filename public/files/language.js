const content = {
    english: {
        content0:'Sanchi',
        content1: "Girls’ education is the key to breaking cycles of poverty and unlocking a brighter future",
        content2: "Empower <br> Through <br> Education",
        content3: `We are a group of<br> design-driven,<br>goal-focused creators, producers, and designers who believe
                    that the details make all the difference.`,
        content4: `Girls' education is vital for empowering individuals and transforming communities. 
                    It promotes gender equality, reduces poverty, and boosts economic growth. 
                    Educated girls contribute to healthier families, stronger societies, and a brighter future for everyone.`,
        content5:`Inspire Her Future`,
        content6:`Learn Lead Succeed`,
        content7:`Knowledge Lights Freedom`,
        content8:`Empower Through Education`,
        content9:`Dream Educate Achieve`

    },
    hindi: {
        content0:'सांची',
        content1: "लड़कियों की शिक्षा ही गरीबी के चक्र को तोड़ने और एक बेहतर भविष्य की राह खोलने की चाबी है।",
        content2: "शिक्षा <br> से <br> सशक्तिकरण",
        content3: `हम एक डिज़ाइन-प्रेरित, लक्ष्य-केंद्रित निर्माताओं, उत्पादकों और डिज़ाइनरों का समूह हैं, जो मानते हैं कि छोटी-छोटी बातें बड़ा अंतर पैदा करती हैं।`,
        content4: `लड़कियों की शिक्षा व्यक्तियों को सशक्त बनाने और समुदायों को बदलने के लिए महत्वपूर्ण है। 
                    यह लिंग समानता को बढ़ावा देती है, गरीबी को घटाती है, और आर्थिक वृद्धि को बढ़ावा देती है। 
                    शिक्षित लड़कियाँ स्वस्थ परिवारों, मजबूत समाजों, और सभी के लिए एक उज्ज्वल भविष्य में योगदान करती हैं।`,
        content5:`उसकी भविष्य को प्रेरित करो`,
        content6:`सीखो, नेतृत्व करो, सफल बनो`,
        content7:`ज्ञान से स्वतंत्रता का उजियारा`,
        content8:`शिक्षा के माध्यम से सशक्त बनाओ`,
        content9:`सपने देखो, शिक्षित बनो, हासिल करो`
    },
    marathi: {
        content0:'सांची',
        content1: "मुलींचे शिक्षण ही गरिबीचा फेरा तोडण्याची आणि उज्ज्वल भविष्याची किल्ली आहे.",
        content2: "शिक्षण, <br> सक्षमता, <br> सशक्तीकरण",
        content3: `आम्ही एक डिझाइन-केंद्रित, उद्दिष्ट-केंद्रित निर्माते, निर्मितीकार आणि डिझाइनर्सचा गट आहोत, जे मानतात की तपशील महत्त्वाचा फरक निर्माण करतात.`,
        content4: `मुलींचे शिक्षण व्यक्तींना सशक्त करण्यासाठी आणि समुदायांना बदलण्यासाठी महत्त्वाचे आहे. 
                    हे लिंग समानतेला प्रोत्साहन देते, गरीबी कमी करते, आणि आर्थिक वाढीला चालना देते. 
                    शिक्षित मुली आरोग्यपूर्ण कुटुंबे, मजबूत समाज आणि प्रत्येकासाठी उज्ज्वल भविष्य घडवतात.`,
        content5:`तिच्या भविष्याला प्रेरणा द्या`,
        content6:` शिका, नेतृत्व करा, यशस्वी व्हा`,
        content7:`ज्ञानाने स्वातंत्र्याचा प्रकाश`,
        content8:`शिक्षणाद्वारे सशक्त करा`,
        content9:`स्वप्न बघा, शिक्षित व्हा, साध्य करा`
       
        
        
        
    }
};
const fonts = {
    english: "Poppins", 
    hindi: "Gotu", 
    marathi: "Gotu" 
};

function updateLanguage(language) {
    document.cookie = "language=" + language; 
    if (content[language]) {

        for(let i=0;i<content.length;i++){
            document.getElementById("content"+i).innerHTML = content[language]["content"+i];
        }


        document.getElementById("content0").innerHTML = content[language].content0;
        document.getElementById("content1").innerHTML = content[language].content1;
        document.getElementById("content2").innerHTML = content[language].content2;
        document.getElementById("content3").innerHTML = content[language].content3;
        document.getElementById("content4").innerHTML = content[language].content4;
        document.getElementById("content5").innerHTML = content[language].content5;
        document.getElementById("content6").innerHTML = content[language].content6;
        document.getElementById("content7").innerHTML = content[language].content7;
        document.getElementById("content8").innerHTML = content[language].content8;
        document.getElementById("content9").innerHTML = content[language].content9;

        document.body.style.fontFamily = fonts[language]; 
    }

    document.getElementById("languages-section").style.display = "none";

    document.body.style.overflow = "auto";
    if (language === "hindi" || language === "marathi") {

     LanguageCssChanges();
    }
}

function toggleLanguageMenu() {
    const languagesSection = document.getElementById("languages-section");
    const isMenuVisible = languagesSection.style.display === "block";

    if (isMenuVisible) {
        languagesSection.style.display = "none";
        document.body.style.overflow = "auto";
    } else {
        languagesSection.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}



function LanguageCssChanges(){


    document.getElementById("content1").style.fontSize = "2vw";
    document.getElementById("content1").style.lineHeight = "3vw";
    document.getElementById("content2").style.fontSize = "7.9vw";
    document.getElementById("content3").style.fontSize = "3vw";
   



}



function getCookie(name) {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
    }, {});
    return cookies[name];
}


// Check language cookie on page load
document.addEventListener("DOMContentLoaded", () => {
    const language = getCookie("language") || "english"; // Default to English
    updateLanguage(language);
});