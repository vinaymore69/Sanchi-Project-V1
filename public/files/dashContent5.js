document.getElementById("upload-notes-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form); // Automatically collects all input fields in the form, including files

    console.log(formData);

    try {
        const response = await fetch('/user/digi_notes_upload', {
            method: "POST",
            body: formData, // Send FormData directly
        });

        if (response.ok) {
            console.log("Upload successful:", response);
            alert("File uploaded successfully!");
        } else {
            console.error("Upload failed:", response);
            alert("Failed to upload File. Please try again.");
        }
    } catch (error) {
        console.error("Error during upload:", error);
        alert("An error occurred. Please try again.");
    }
});