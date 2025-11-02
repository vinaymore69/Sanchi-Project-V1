document.getElementById("video-panel-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form); // Automatically collects all input fields in the form, including files

    console.log(formData);

    try {
        const response = await fetch('/user/video_upload', {
            method: "POST",
            body: formData, // Send FormData directly
        });

        if (response.ok) {
            console.log("Upload successful:", response);
            alert("Video uploaded successfully!");
        } else {
            console.error("Upload failed:", response);
            alert("Failed to upload Video. Please try again.");
        }
    } catch (error) {
        console.error("Error during upload:", error);
        alert("An error occurred. Please try again.");
    }
});