// This will gather information from visualcrossing free open API with weather information for several different days. Temperature in Celsius and weather condition is displayed.

// Arrow function to get the user's geo location
getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  }
};

// Arrow function to convert Fahrenheit to Celsius
const convertToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

// Arrow function to fetch weather data with latitude & longitude
const getWeather = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // My API Key
  const apiKey = "6GREE2JKNJK982K6HTLMDJEHT";
  // Today's date
  const currentDate = new Date().toISOString().split("T")[0];
  // Tomorrow's date
  const tomorrowDate = new Date(Date.now() + 86400000)
    .toISOString()
    .split("T")[0];
  // Date 3 days from now
  const threeDaysDate = new Date(Date.now() + 3 * 86400000)
    .toISOString()
    .split("T")[0];
  // Date 7 days from now
  const sevenDaysDate = new Date(Date.now() + 7 * 86400000)
    .toISOString()
    .split("T")[0];

  // Created URLs for each day specified above
  const weatherToday = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}/${currentDate}/${currentDate}?key=${apiKey}`;
  const weatherTomorrow = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}/${tomorrowDate}/${tomorrowDate}?key=${apiKey}`;
  const weatherThreeDays = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}/${threeDaysDate}/${threeDaysDate}?key=${apiKey}`;
  const weatherSevenDays = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}/${sevenDaysDate}/${sevenDaysDate}?key=${apiKey}`;

  // Fetch for weather data today
  fetch(weatherToday)
    .then((response) => response.json())
    .then((data) => {
      // Show today's weather using hmtl id
      displayWeatherData(
        "weather-info-today",
        "Today",
        data.currentConditions.temp,
        data.currentConditions.description
      );
    });

  // Fetch weather data for tomorrow
  fetch(weatherTomorrow)
    .then((response) => response.json())
    .then((data) => {
      // Show tomorrow's weather using hmtl id
      displayWeatherData(
        "weather-info-tomorrow",
        "Tomorrow",
        data.days[0].temp,
        data.days[0].conditions
      );
    });

  // Fetch weather data for 3 days from now
  fetch(weatherThreeDays)
    .then((response) => response.json())
    .then((data) => {
      // Show 3 days from now weather using hmtl id
      displayWeatherData(
        "weather-info-three-days",
        "3 Days",
        data.days[0].temp,
        data.days[0].conditions
      );
    });

  // Fetch weather data for 7 days from now
  fetch(weatherSevenDays)
    .then((response) => response.json())
    .then((data) => {
      // Show 7 days from now weather using hmtl id
      displayWeatherData(
        "weather-info-seven-days",
        "7 Days",
        data.days[0].temp,
        data.days[0].conditions
      );
    });
};

// Arrow function to show weather data
const displayWeatherData = (
  containerId,
  title,
  tempFahrenheit,
  description
) => {
  // Gets the id to show weather data
  const weatherInfo = document.getElementById(containerId);
  // Converts temp from Fahrenheit to Celsius
  const temperatureCelsius = convertToCelsius(tempFahrenheit);

  // Show weather info on the dashboard page
  weatherInfo.innerHTML = `
    <h3>${title}</h3>
    <p>${temperatureCelsius.toFixed(2)}°C</p>
    <p>${description}</p>
  `;
};

// Calls the weather function
getLocation();
