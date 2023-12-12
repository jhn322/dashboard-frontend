/* An always updating clock and date in real time. The clock is connected to a h3 specified in the HTML container while the date is connected to the same container, it is gathered by a seperate ID. This is to easier allow different styling for date and time and also to make them independant from each other. */

// Arrow function to update the clock
const updateClock = () => {
  // To get the current time and date
  const currentTime = new Date();

  // Get the H3 and P tag from the HTML by their ID
  const timeH3 = document.getElementById("time-h3");
  const dateP = document.getElementById("date-p");
};
