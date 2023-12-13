// By registering an account with Unsplash I got an API key which is then used by doing a fetch to randmoly generate one of their wallpapers by a press of a button.

// Arrow function to fetch random image from Unsplash
const getRandomImage = async () => {
  // Fetches data from Unsplash API key
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=q0VaSfGfaDBDKUyxR5okMtgih6ZcHqyIftdNOtgpatw"
  );

  // Checks if fetch was a success
  if (response.ok) {
    // Converts response to JSON format
    const data = await response.json();
    // Calls function to set as background and saves to localstorage
    setImageBackground(data);
    saveToLocalStorage(data.urls.regular);
  } else {
    // Log error to console if fail
    console.log("Error fetching random image:", response.status);
  }
};

// Arrow function to set the fetched image as background
const setImageBackground = (data) => {
  // Extracts the image URL
  const imageUrl = data.urls.regular;
  // Applies the image URL to the body
  document.body.style.backgroundImage = `url(${imageUrl})`;
};

// Save image URL to localstorage
const saveToLocalStorage = (imageUrl) => {
  localStorage.setItem("backgroundImage", imageUrl);
};

// Arrow function to get image from localstorage
const getImageFromLocalStorage = () => {
  return localStorage.getItem("backgroundImage");
};

// Event listener for page load
document.addEventListener("DOMContentLoaded", () => {
  // Loading image from localstorage
  const savedImageUrl = getImageFromLocalStorage();
  if (savedImageUrl) {
    // Set the saved image as background
    document.body.style.backgroundImage = `url(${savedImageUrl})`;
  } else {
    // If no image is saved, load a random image
    getRandomImage();
  }

  // Selects the background button from HTML
  const bgBtn = document.querySelector(".bg-btn"); // Replace with your button class

  // Adds an on click event to the button
  bgBtn.addEventListener("click", () => {
    // Calls the function to fetch a new random image and saves to localstorage
    getRandomImage();
  });
});

////////////////////////////////////////////////////////////////////////////////
// This will add a small but fun animaton that spins the arrow icon in the //// background button to make the web page more dynamic. //////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Selects the button class from HTML
  const btn = document.querySelector(".bg-btn");
  // Selects the icon class from HTML
  const icon = btn.querySelector(".fa-arrow-rotate-right");

  // Added an on click function to button
  btn.addEventListener("click", () => {
    // Added a 'spin' class to the icon on click
    icon.classList.add("spin");
    // Removes the 'spin' class after the animation is done
    setTimeout(() => {
      icon.classList.remove("spin");
    }, 400); // 0.4s duration of the animation
  });
});
