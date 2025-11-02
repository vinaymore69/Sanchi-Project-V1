document.addEventListener("DOMContentLoaded", async () => {
    const addButton = document.getElementById("addButton");
    const colorPicker = document.getElementById("colorPicker");
    const noteArea = document.getElementById("noteArea");
    const noteEditor = document.getElementById("noteEditor");
    const noteTextarea = document.getElementById("noteTextarea");
    const updateButton = document.getElementById("updateButton");
    const deleteButton = document.getElementById("deleteButton");
    const closeEditor = document.getElementById("closeEditor");

    let selectedNote = null;

    // Fetch the notes from the server 
    let notesCount = 1; //Default
    try {
        const response = await fetch('/user/db_notes');
        console.log(response);
        const data = await response.json();
        if (data.count) {
            notesCount = data.count;

            console.log(data);

            let i = 0;
            while (i < data.note_content_array.length) {
                let j = i + 1;
                createNote(data.note_color_array[i], j, data.note_content_array[i]);
                i++;
            }
        } else {
            notesCount = 1; // Set notesCount to 1 if did not find
        }
    } catch (error) {
    console.error('Error fetching note count:', error);
}

console.log(`Note count: ${notesCount}`); // Debugging

try {

} catch (error) {
    console.error(error);
    alert('Please Refresh your page');
}

// Show/hide color picker
addButton.addEventListener("click", () => {
    colorPicker.style.display = colorPicker.style.display === "none" ? "flex" : "none";
    addButton.classList.toggle("rotate");
});

// Create a new note
colorPicker.addEventListener("click", (event) => {
    if (event.target.classList.contains("colorBlock")) {
        const color = event.target.style.backgroundColor;
        createNote(color, notesCount);
    }
});

// Function to create a new note
function createNote(color, id, textContent=null) {
    const noteBox = document.createElement("div");
    noteBox.className = "noteBox";
    noteBox.id = id;
    noteBox.style.backgroundColor = color;

    console.log(textContent)
    if(textContent) {
        noteBox.innerText = textContent;
    }

    noteBox.addEventListener("click", () => openEditor(noteBox));

    noteArea.appendChild(noteBox);
    colorPicker.style.display = "none";
    addButton.classList.remove("rotate");
}

// Open the note editor
function openEditor(noteBox) {
    selectedNote = noteBox;
    noteTextarea.value = noteBox.textContent || "";
    noteEditor.style.display = "block";
    noteTextarea.focus();
}

// Update the note
updateButton.addEventListener("click", async () => {
    if (selectedNote) {
        noteEditor.style.display = "none";
        
        selectedNote.textContent = noteTextarea.value;

        // Fetch the computed style of the div
        const computedStyle = window.getComputedStyle(selectedNote);

        // Extract the background color
        const selectedNote_backgroundColor = computedStyle.backgroundColor;
        const note_id = selectedNote.id;

        console.log(selectedNote_backgroundColor);
        await fetch('/user/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                note_id: note_id,
                note_color: selectedNote_backgroundColor,
                note_content: noteTextarea.value
            }),
        });

        selectedNote = null;

    }
});

// Delete the note
deleteButton.addEventListener("click", async () => {
    if (selectedNote) {
        noteArea.removeChild(selectedNote);
        noteEditor.style.display = "none";

        // Fetch the computed style of the div
        const computedStyle = window.getComputedStyle(selectedNote);

        // Extract the background color
        const selectedNote_backgroundColor = computedStyle.backgroundColor;

        const note_id = selectedNote.id;

        console.log(selectedNote_backgroundColor);

        await fetch('/user/deleteNote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                note_id: note_id,
                note_color: selectedNote_backgroundColor,
                note_content: noteTextarea.value
            }),
        });

        selectedNote = null;
    }
});

// Close the note editor
closeEditor.addEventListener("click", () => {
    noteEditor.style.display = "none";
    selectedNote = null;
});
});