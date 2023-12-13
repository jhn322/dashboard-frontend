// The purpose of this code is to fetch information from https://pokeapi.co/ using their open API to show a information about a random pokémon for example their height, weight, name. The user should also be able to randomize information about a new pokémon as many times as they want basically.

// Event listener when the DOM content is fully loaded on the page
document.addEventListener("DOMContentLoaded", () => {
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
      // Populate the HTML element with Pokémon data
      pokemonDiv.innerHTML = `
                <h3>Name: ${data.name}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}" />
                <p>Height: ${data.height}</p>
                <p>Weight: ${data.weight}</p>
            `;
    })
    // If there's an error log it to the console
    .catch((error) => {
      // Log the error to the console
      console.error("There was a problem fetching the data:", error);
    });
};
