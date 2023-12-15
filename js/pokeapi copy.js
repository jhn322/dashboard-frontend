// The purpose of this code is to fetch information from https://pokeapi.co/ using their open API to show a information about a random pokémon for example their height, weight, name. The user should also be able to randomize information about a new pokémon as many times as they want basically.

// Event listener when the DOM content is fully loaded on the page
document.addEventListener("DOMContentLoaded", () => {
  // Localstorage to save the random Pokemon on page load
  const savedPokemon = localStorage.getItem("randomPokemon");
  if (savedPokemon) {
    displayPokemon(JSON.parse(savedPokemon));
  } else {
    // Calls fetchRandomPokemon to display upon entering the page
    fetchRandomPokemon();
  }

  // Get the button element from HTML by ID
  const randomPokemonButton = document.getElementById("randomPokemonButton");
  // Add an on click event listener to the button
  randomPokemonButton.addEventListener("click", fetchRandomPokemon);
});

// Arrow function to fetch Pokémon data from PokeAPI
const fetchRandomPokemon = () => {
  // Generates a random ID between 1 and 898 using math.floor (898 total Pokémons)
  const randomId = Math.floor(Math.random() * 898) + 1;
  // Using the variabel to fetch the pokémon(s) from their website
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  // Using fetch to make a request to their API url
  fetch(apiUrl)
    // Process and checks if respone is OK
    .then((response) => {
      if (!response.ok) {
        // If error
        throw new Error("Network response was not ok.");
      }
      // Return result as JSON
      return response.json();
    })
    // Handle the data from the API
    .then((data) => {
      // Display the fetched data in the HTML
      const pokemonDiv = document.getElementById("pokemonData");

      // Fetching ID, types, and stats, name, weight, height
      const types = data.types.map((type) => type.type.name).join(", ");
      // Capitalizing the first letter of the name
      const capitalizedPokemonName = capitalizeFirstLetter(data.name);

      // Converts height to meters and restricts to 2 decimals
      const heightInMeters = (data.height / 10).toFixed(2);
      // Converts weight to kilograms and restricts to 1 decimals
      const weightInKg = (data.weight / 10).toFixed(1);

      pokemonDiv.innerHTML = `
                <h3> ${capitalizedPokemonName}</h3>
                <p>Pokédex: ${data.id}</p>
                <img src="${data.sprites.front_default}" alt="${data.name}" id="pokemonImage" />
                <p>Type: ${types}</p>
                <p>Height: ${heightInMeters}m</p>
                <p>Weight: ${weightInKg}kg</p>
            `;
    })

    // If there's an error log it to the console
    .catch((error) => {
      // Log the error to the console
      console.error("There was a problem fetching the data:", error);
    });
};

// Arrow function to capitilize the first letter of the Pokémon
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
