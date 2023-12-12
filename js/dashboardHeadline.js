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
};
