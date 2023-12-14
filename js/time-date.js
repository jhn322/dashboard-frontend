/* An always updating clock and date in real time. The clock is connected to a h3 specified in the HTML container while the date is connected to the same container, it is gathered by a seperate ID. This is to easier allow different styling for date and time and also to make them independant from each other. */

// Arrow function to update the clock
const updateClock = () => {
  // To get the current time and date
  const currentTime = new Date();

  // Get the H3 and P tag from the HTML by their ID
  const timeH3 = document.getElementById("time-h3");
  const dateP = document.getElementById("date-p");

  // Get the hours, minutes and seconds in current time
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");

  // Get the current day
  const day = String(currentTime.getDate()).padStart(2, "0");

  // Get the months index from current date
  const monthIndex = currentTime.getMonth();

  // Array for months
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month name from array using index
  const month = monthNames[monthIndex];

  // Get the current year
  const year = currentTime.getFullYear();

  // Format the time and date strings
  const formatTime = `${hours}:${minutes}:${seconds}`;
  const formatDate = `${day} ${month} ${year}`;

  // Updates the time and date with the new format
  timeH3.textContent = formatTime;
  dateP.textContent = formatDate;
};

// Updates the time and date every second
setInterval(updateClock, 1000);

// Runs the function immediately when page loads
updateClock();
