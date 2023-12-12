/* The purpose of this function is to allow the user to change the headline to whatever they want by simply clicking on it. Be it their name or something else. This allows for a bit more personalized dashboard landing page. */

// Get the headline by id
const userHeadline = document.getElementById("userSpecificHeadline");

// Declare inputField outside the function
let inputField;

// Arrow function to handle click event
const changeHeadline = () => {
  // Get the current text content of the h1
  const currentText = userHeadline.textContent;

  // Creates an input field for the user
  inputField = document.createElement("input");
  inputField.type = "text";

  // Clears the h1 and replaces it with input field
  userHeadline.textContent = "";
  userHeadline.appendChild(inputField);
  inputField.value = currentText === "[Click to Edit]" ? "" : currentText;

  // Selects the input field for instant type in
  inputField.select();

  // For when the input field loses focus
  inputField.addEventListener("blur", updateHeadline);

  // Listen to enter key to allow press on input field
  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      updateHeadline();
    }
  });
};

// Function to update the h1
const updateHeadline = () => {
  // Get the text from the input field
  const newText = inputField.value;

  // Sets the final text or default if empty
  const finalText = newText === "" ? "[Click to Edit]" : newText;
  userHeadline.textContent = finalText;

  // Saves to localStorage
  localStorage.setItem("userHeadline", finalText);

  // Removes input field upon updating h1
  inputField.remove();
};

// Arrow function to load the saved text from localStorage
const loadSavedText = () => {
  const savedText = localStorage.getItem("userHeadline");
  if (savedText) {
    userHeadline.textContent = savedText;
  }
};

// Loades the saved text when the page loads
loadSavedText();

// On click event listener for the h1 headline
userHeadline.addEventListener("click", changeHeadline);
