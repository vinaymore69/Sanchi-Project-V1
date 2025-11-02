//Annoying code to initialize on startup
function openSubtitlesEditor(bookTitle) {
    const url = `http://localhost:3000/user/edit_subtitles?bookTitle=${encodeURIComponent(bookTitle)}`;
    window.open(url, '_blank');
}

document.getElementsByName("audio_book_upload_form")[0].addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form); // Automatically collects all input fields in the form, including files

    console.log(formData);

    try {
        const response = await fetch('/user/audio_book_upload', {
            method: "POST",
            body: formData, // Send FormData directly
        });

        if (response.ok) {
            console.log("Upload successful:", response);
            alert("Audio book uploaded successfully!");
        } else {
            console.error("Upload failed:", response);
            alert("Failed to upload audio book. Please try again.");
        }
    } catch (error) {
        console.error("Error during upload:", error);
        alert("An error occurred. Please try again.");
    }


    
    const gallery = document.getElementById("audio-gallery");
    
    //Fetch after uploading
    try {
        // Fetch data from the server
        
        const bookTitle = document.getElementsByName("audioTitle")[0].value;
        console.log("Book Title: ",bookTitle);
        
        const response = await fetch(`/user/fetch_after_upload?bookTitle=${bookTitle}`); // Replace with your API endpoint
        const audiobook = await response.json();
        console.log(audiobook);



        const article = document.createElement("article");

        article.style.display = 'inline-block';
        article.style.marginLeft = "10px";
        article.style.marginRight = "10px";

        article.innerHTML = `
          <img src="http://localhost:3000/uploads/audio/thumbnail/${audiobook[0].thumb_path}" alt="${audiobook.audio_book_title}" width="200" height="100">
          <p>${audiobook[0].audio_book_title}</p>
          <button id="audio-panel-button" onclick="openSubtitlesEditor('${audiobook[0].audio_book_title}')">Edit Subtitles</button>
        `;
        gallery.appendChild(article);
    } catch (error) {
        console.log("Error during fetching after upload");
        console.error(error);
    }
});
