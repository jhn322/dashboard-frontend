// With notes the user has the ability to quickly write anything on their mind down and not be afraid it disappears if the web page is closed down. Along with saving, there's also a delete button if you wanna start over.

document.addEventListener("DOMContentLoaded", () => {
  const notesTextarea = document.getElementById("notes-dash");
  const deleteButton = document.getElementById("notes-delete-btn");

  const savedNotes = localStorage.getItem("userNotes");
  if (savedNotes) {
    notesTextarea.value = savedNotes;
  }

  notesTextarea.addEventListener("input", () => {
    localStorage.setItem("userNotes", this.value);
  });

  deleteButton.addEventListener("click", () => {
    localStorage.removeItem("userNotes");
    notesTextarea.value = "";
  });
});
