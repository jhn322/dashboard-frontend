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
      console.log("Today's Weather Data:", data);
      if (data.currentConditions && data.currentConditions.temp !== undefined) {
        // Show today's weather using hmtl id
        displayWeatherData(
          "weather-info-today",
          "Today",
          data.currentConditions.temp,
          data.currentConditions.description
        );
      } else {
        console.error("No data for today's weather");
      }
    })
    .catch((error) => {
      console.error("Error fetching todays weather", error);
    });

  // Fetch weather data for tomorrow
  fetch(weatherTomorrow)
    .then((response) => response.json())
    .then((data) => {
      console.log("Tomorrow's Weather Data:", data);
      // Show tomorrow's weather using hmtl id
      displayWeatherData(
        "weather-info-tomorrow",
        "Tomorrow",
        data.days[0].temp,
        data.days[0].conditions
      );
    })
    .catch((error) => {
      console.error("Error fetching tomorrows weather", error);
    });

  // Fetch weather data for 3 days from now
  fetch(weatherThreeDays)
    .then((response) => response.json())
    .then((data) => {
      console.log("3 Days Weather Data:", data);
      // Show 3 days from now weather using hmtl id
      displayWeatherData(
        "weather-info-three-days",
        "3 Days",
        data.days[0].temp,
        data.days[0].conditions
      );
    })
    .catch((error) => {
      console.error("Error fetching 3 days weather", error);
    });

  // Fetch weather data for 7 days from now
  fetch(weatherSevenDays)
    .then((response) => response.json())
    .then((data) => {
      console.log("7 Days Weather Data:", data);
      // Show 7 days from now weather using hmtl id
      displayWeatherData(
        "weather-info-seven-days",
        "7 Days",
        data.days[0].temp,
        data.days[0].conditions
      );
    })
    .catch((error) => {
      console.error("Error fetching 7 days weather", error);
    });
};

// Arrow function to show weather data
const displayWeatherData = (
  containerId,
  title,
  tempFahrenheit,
  description
) => {
  console.log("Description", description);
  // Gets the id to show weather data
  const weatherInfo = document.getElementById(containerId);
  // Converts temp from Fahrenheit to Celsius
  const temperatureCelsius = convertToCelsius(tempFahrenheit);

  // Images tested against description
  const weatherImages = {
    Sunny: "./images/sunny.png",
    Cloudy: "./images/cloudy.png",
    Overcast: "./images/overcast.png",
    Rain: "./images/rain.png",
    Thunderstorm: "./images/thunderstorm.png",
    Snow: "./images/snowing.png",
    Clear: "./images/clearsky.png",
    "Partially cloudy": "./images/partiallycloudy.png",
    // Combinations
    "Sunny, Cloudy": "./images/sunny.png",
    "Sunny, Overcast": "./images/sunny-overcast.png",
    "Sunny, Rain": "./images/sunny-rain.png",
    "Cloudy, Overcast": "./images/cloudy.png",
    "Cloudy, Rain": "./images/cloudy-rain.png",
    "Cloudy, Rain, Thunderstorm": "./images/cloudy-rain-thunderstorm.png",
    "Rain, Thunderstorm": "./images/rain-thunderstorm.png",
    "Rain, Snow": "./images/snow.png",
    "Rain, Partially cloudy": "./images/cloudy-rain.png",
    "Thunderstorm, Snow": "./images/thunderstorm.png",
    "Snow, Overcast": "./images/snowing.png",
    "Snow, Partially cloudy": "./images/snowing.png",
    "Snow, Rain, Partially cloudy": "./images/snow-rain-partiallycloudy.png",
    "Snow, Rain, Overcast": "./images/snow-rain-partiallycloudy.png",
    "Clear, Sunny": "./images/sunny.png",
    "Overcast, Cloudy": "./images/overcast.png",
    "Overcast, Rain": "./images/overcast-rain.png",
    "Partially cloudy, Overcast": "./images/partiallycloudy.png",
  };

  // Create an image element and set its source
  const imageElement = document.createElement("img");
  imageElement.alt = description; // Provide an alternative text

  // Check if there's an image available for the weather condition
  if (weatherImages.hasOwnProperty(description)) {
    const weatherImage = weatherImages[description];
    imageElement.src = weatherImage;

    // Show weather info on the dashboard page
    weatherInfo.innerHTML = `
    <h3>${title}</h3>
    <div class="weather-details">
      <p>${temperatureCelsius.toFixed(1)}°C</p>
      <p>${description}</p>
      <div class="weather-image-container">
      </div>
    </div>
  `;

    // Append the image element to the container
    const imageContainer = weatherInfo.querySelector(
      ".weather-image-container"
    );
    imageContainer.appendChild(imageElement);
  } else {
    // If no image is available, show the weather info without an image
    weatherInfo.innerHTML = `
    <h3>${title}</h3>
    <div class="weather-details">
      <p>${temperatureCelsius.toFixed(1)}°C</p>
      <p>${description}</p>
    </div>
  `;
  }

  // Append the image element to the container
  const imageContainer = weatherInfo.querySelector(".weather-image-container");

  // Appends the image only if an image is available
  if (weatherImages.hasOwnProperty(description)) {
    imageContainer.appendChild(imageElement);
  }
};

// Calls the weather function
getLocation();
