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
    for(var i = 0; i < dashElements.length; i++) {
        dashElements[i].style.backgroundColor = "#eaeaea";
        console.log(dashElements[i]);
    }

    document.getElementById(id).style.backgroundColor = "#d3d3d3";
}

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
          <button id="audio-panel-button" onclick="openSubtitlesEditor('${book.audio_book_title}')">Edit Subtitles</button>
        `;
            gallery.appendChild(article);
        });
    } catch (error) {
        console.error("Error fetching audiobooks:", error);
        gallery.innerHTML = "<p>Failed to load audiobooks. Please try again later.</p>";
    }
});