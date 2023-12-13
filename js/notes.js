// With notes the user has the ability to quickly write anything on their mind down and not be afraid it disappears if the web page is closed down. Along with saving, there's also a delete button if you wanna start over.

// Waits for the DOM element to load
document.addEventListener("DOMContentLoaded", () => {
  // Gets the text area by id
  const notesTextarea = document.getElementById("notes-dash");
  // Gets the delete button by id
  const deleteButton = document.getElementById("notes-delete-btn");

  // Saves the note in localstorage and retrieves them on reload
  const savedNotes = localStorage.getItem("userNotes");
  if (savedNotes) {
    notesTextarea.value = savedNotes;
  }

  // Saves the input to localstorage upon typing anything
  notesTextarea.addEventListener("input", () => {
    localStorage.setItem("userNotes", notesTextarea.value);
  });

  // Arrow function to listen for click on the delete button
  deleteButton.addEventListener("click", () => {
    // Displays a confirmation prompt upon pressing delete
    const confirmation = confirm("Are you sure you want to delete your notes?");
    // If user press "OK" notes will be removed from localstorage
    if (confirmation) {
      localStorage.removeItem("userNotes");
      // Clears the textarea
      notesTextarea.value = "";
    }
  });
});
