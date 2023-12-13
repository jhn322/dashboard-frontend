// This will add a small but fun animaton that spins the arrow icon in the background button to make the web page more dynamic.

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
