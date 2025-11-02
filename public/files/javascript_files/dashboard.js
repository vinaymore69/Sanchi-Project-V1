
function updateDashboradContent(id, value) {
    if (value == "dashboard") {
        document.getElementById("dashboard-content-button1").style.display = "block";
        document.getElementById("dashboard-content-button2").style.display = "none";
        document.getElementById("dashboard-content-button3").style.display = "none";
        document.getElementById("dashboard-content-button4").style.display = "none";
    } else if (value == "profile") {
        document.getElementById("dashboard-content-button2").style.display = "block";
        document.getElementById("dashboard-content-button1").style.display = "none";
        document.getElementById("dashboard-content-button3").style.display = "none";
        document.getElementById("dashboard-content-button4").style.display = "none";
        document.getElementById("dashboard-content-button5").style.display = "none";
    } else if (value == "notes") {
        document.getElementById("dashboard-content-button3").style.display = "block";
        document.getElementById("dashboard-content-button1").style.display = "none";
        document.getElementById("dashboard-content-button2").style.display = "none";
        document.getElementById("dashboard-content-button4").style.display = "none";
        document.getElementById("dashboard-content-button5").style.display = "none";
    } else if (value == "videos") {
        document.getElementById("dashboard-content-button4").style.display = "block";
        document.getElementById("dashboard-content-button1").style.display = "none";
        document.getElementById("dashboard-content-button2").style.display = "none";
        document.getElementById("dashboard-content-button3").style.display = "none";
        document.getElementById("dashboard-content-button5").style.display = "none";
    } else if (value == "uploadNotes") {
        document.getElementById("dashboard-content-button5").style.display = "block";
        document.getElementById("dashboard-content-button1").style.display = "none";
        document.getElementById("dashboard-content-button2").style.display = "none";
        document.getElementById("dashboard-content-button3").style.display = "none";
        document.getElementById("dashboard-content-button4").style.display = "none";
    }


    var dashElements = document.getElementsByClassName("dashboard-options-element");
    for (var i = 0; i < dashElements.length; i++) {
        dashElements[i].style.backgroundColor = "#eaeaea";
        console.log(dashElements[i]);
    }

    document.getElementById(id).style.backgroundColor = "#d3d3d3";
}

const content = {
    english: {
        content19: "Audio Book",
        content20: "The Audio Book will not be uploaded until the Subtitles have been submitted",

        content2: "Edit your Profile",
        content3: "Scratch Notes",
        content4: "Video",
        content5: "Upload Notes",
        content6: "Log Out",
        content7: "Publish your Audio Book",
        content8: "Audio Book Title",
        content9: "Upload Audio",
        content10: "Description",
        content11: "Upload Thumbnail",
        content12: "Upload Audio",
        content13: "First Name",
        content14: "Last Name",
        content15: "Email",
        content16: "Age",
        content17: "Address",
        content18: "City",
        content21: "Update",
        content22: "Video Title",
        content23: "Video Description",
        content24: "Upload Video",
        content25: "Select Category",
        content26: "Upload Thumbnail",
        content27: "Upload Notes",
        content28: "Select Class",
        content29: "Class 1",
        content30: "Class 2",
        content31: "Class 3",
        content32: "Class 4",
        content33: "Class 5",
        content34: "Select Subject",
        content35: "Science",
        content36: "Maths",
        content37: "Geography",
        content38: "History",
        content39: "Hindi",
        content40: "English",
        content41: "Upload File",
        content42: "Upload Notes",

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
        content19: "ऑडियो बुक",
        content20: "उपशीर्षक प्रस्तुत किए जाने तक ऑडियो बुक अपलोड नहीं की जाएगी",

        content2: "अपनी प्रोफ़ाइल को संपादित करें",
        content3: "स्क्रैच नोट्स",
        content4: "वीडियो",
        content5: "नोट्स अपलोड करें",
        content6: "लॉग आउट",
        content7: "अपनी ऑडियो पुस्तक प्रकाशित करें",
        content8: "ऑडियो बुक का शीर्षक",
        content9: "ऑडियो अपलोड करें",
        content10: "विवरण",
        content11: "थंबनेल अपलोड करें",
        content12: "ऑडियो अपलोड करें",
        content13: "पहला नाम",
        content14: "उपनाम",
        content15: "ईमेल",
        content16: "आयु",
        content17: "पता",
        content18: "शहर",
        content21: "अद्यतन",
        content22: "वीडियो शीर्षक",
        content23: "वीडियो का विवरण",
        content24: "वीडियो अपलोड करें",
        content25: "श्रेणी चुनना",
        content26: "थंबनेल अपलोड करें",
        content27: "नोट्स अपलोड करें",
        content28: "कक्षा का चयन करें",
        content29: "वर्ग 1",
        content30: "वर्ग 2",
        content31: "वर्ग 3",
        content32: "वर्ग 4",
        content33: "वर्ग 5",
        content34: "विषय चुनें",
        content35: "विज्ञान",
        content36: "गणित",
        content37: "भूगोल",
        content38: "इतिहास",
        content39: "हिन्दी",
        content40: "अंग्रेज़ी",
        content41: "फ़ाइल अपलोड करें",
        content42: "नोट्स अपलोड करें",

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

        content19: "ऑडिओ बुक",
        content20: "सबटायटल्स सबमिट होईपर्यंत ऑडिओ बुक अपलोड केले जाणार नाही",

        content2: "तुमचे प्रोफाइल संपादित करा",
        content3: "स्क्रॅच नोट्स",
        content4: "व्हिडिओ",
        content5: "नोट्स अपलोड करा",
        content6: "लॉग आउट करा",
        content7: "तुमचे ऑडिओ बुक प्रकाशित करा",
        content8: "ऑडिओ बुकचे शीर्षक",
        content9: "ऑडिओ अपलोड करा",
        content10: "वर्णन",
        content11: "थंबनेल अपलोड करा",
        content12: "ऑडिओ अपलोड करा",
        content13: "पहिले नाव",
        content14: "आडनाव",
        content15: "ईमेल",
        content16: "वय",
        content17: "पत्ता",
        content18: "शहर",
        content21: "अपडेट करा",
        content22: "व्हिडिओ शीर्षक",
        content23: "व्हिडिओ वर्णन",
        content24: "व्हिडिओ अपलोड करा",
        content25: "श्रेणी निवडा",
        content26: "थंबनेल अपलोड करा",
        content27: "नोट्स अपलोड करा",
        content28: "वर्ग निवडा",
        content29: "वर्ग १",
        content30: "वर्ग २",
        content31: "वर्ग ३",
        content32: "वर्ग ४",
        content33: "वर्ग ५",
        content34: "विषय निवडा",
        content35: "विज्ञान",
        content36: "गणित",
        content37: "भूगोल",
        content38: "इतिहास",
        content39: "हिंदी",
        content40: "इंग्रजी",
        content41: "फाइल अपलोड करा",
        content42: "नोट्स अपलोड करा",

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

        //MARATHI
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
        editSubtitles: "Edit Subtitles"
    }, hindi: {
        editSubtitles: "उपशीर्षक संपादित करें"
    }, marathi: {
        editSubtitles: "उपशीर्षके संपादित करा"
    }
};


document.addEventListener("DOMContentLoaded", async () => {
    updateDashboradContent("main-dashboard", "dashboard");

    const gallery = document.getElementById("audio-gallery");

    try {
        // Fetch data from the server
        const response = await fetch("/user/audiobooks"); // Replace with your API endpoint
        const audiobooks = await response.json();


        console.log("audiobooks.no_books_found: ", audiobooks[0].no_books_found);
        if (audiobooks[0].no_books_found) {
            return;
        }


        // Create dynamic image boxes
        audiobooks.forEach((book) => {
            const article = document.createElement("article");

            article.style.display = 'inline-block';
            article.style.marginLeft = "10px";
            article.style.marginRight = "10px";

            article.innerHTML = `
          <img src="http://localhost:3000/uploads/audio/thumbnail/${book.thumb_path}" alt="${book.audio_book_title}" width="200" height="100">
          <p>${book.audio_book_title}</p>
          <button id="audio-panel-button" class="edit-subtitles" data-key="editSubtitles" onclick="openSubtitlesEditor('${book.audio_book_title}')">Edit Subtitles</button>
        `;
            gallery.appendChild(article);

                    // Update elements based on class name
        const generatedElements = document.querySelectorAll(".edit-subtitles");
        console.log("Generated Elements: ", generatedElements);

        const language = getCookie("language") || "english"; // Default to English
        // ✅ Add event listener after appending
        article.querySelector(".edit-subtitles").addEventListener("click", () => {
            openSubtitlesEditor(audiobooks[0].audio_book_title);
        });

        if (generatedElements.length > 0) {
            generatedElements.forEach((element) => {
                const key = element.getAttribute("data-key");
                if (key) {
                    element.innerHTML = content2[language][key];
                }
            });
        }
        });
    } catch (error) {
        console.error("Error fetching audiobooks:", error);
        gallery.innerHTML = "<p>Failed to load audiobooks. Please try again later.</p>";
    }
});

const fonts = {
    english: "Poppins",
    hindi: "Hind",
    marathi: "Tiro Devanagari Marathi",
};
function openSubtitlesEditor(audioBookTitle) {
    // Encode the audio book title to make it URL-safe
    const encodedTitle = encodeURIComponent(audioBookTitle);

    // Redirect to the edit subtitles page with the query parameter
    window.location.href = `/user/edit_subtitles?bookTitle=${encodedTitle}`;
}
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

        // Update elements based on class name
        const generatedElements = document.querySelectorAll(".edit-subtitles");
        console.log("Generated Elements: ", generatedElements);

        if (generatedElements.length > 0) {
            generatedElements.forEach((element) => {
                const key = element.getAttribute("data-key");
                console.log(key);
                if (key) {
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

    const generatedElements = document.querySelectorAll(".edit-subtitles");
    console.log("Generated Elements: ", generatedElements);
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

function logoutProcedure() {
    window.location.href = '/auth/logout';

}