/* The purpose of this function is to allow the user to change the headline to whatever they want by simply clicking on it. Be it their name or something else. This allows for a bit more personalized dashboard landing page. */

// Get the headline by id
const userHeadline = document.getElementById("userSpecificHeadline");

// Arrow function to handle click event
const changeHeadline = () => {
  // Get the current text content of the h1
  const currentText = userHeadline.textContent;

  // Creates an input field for the user
  const inputField = document.createElement("input");
  inputField.type = "text";

  // Clears the h1 and replaces it with input field
  userHeadline.textContent = "";
  userHeadline.appendChild(inputField);

  // Selects the input field for instant type in
  inputField.select();

  // For when the input field loses focus
  inputField.addEventListener("blur", () => {
    // Get the text from the input field
    const newText = inputField.value;

    // Sets the final text or default if empty
    const finalText = newText === "" ? "[Click to Edit]" : newText;
    userHeadline.textContent = finalText;

    // Saves to localStorage
    localStorage.setItem("userHeadline", finalText);
  });
};
