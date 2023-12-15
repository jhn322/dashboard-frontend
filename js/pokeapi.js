// The purpose of this code is to fetch information from https://pokeapi.co/ using their open API to show a information about a random pokémon, for example their height, name etc. The user should also be able to randomize information about a new pokémon as many times as they want and the current Pokemon will be saved until a new one is randomized.

// Event listener when the DOM content is fully loaded on the page
document.addEventListener("DOMContentLoaded", () => {
  // Calls fetchRandomPokemon to display saved Pokemon from localStorage
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
      // Extract details from the fetched Pokemon data
      const pokemonDetails = {
        // Capitalizing the first letter of the name
        name: capitalizeFirstLetter(data.name),
        id: data.id,
        image: data.sprites.front_default,
        // Fetching Pokemon types
        types: data.types.map((type) => type.type.name).join(", "),
        // Converts height to meters and restricts to 2 decimals
        height: (data.height / 10).toFixed(2),
        // Converts weight to kilograms and restricts to 1 decimals
        weight: (data.weight / 10).toFixed(1),
      };

      // Save the fetched Pokemon to localStorage
      localStorage.setItem("randomPokemon", JSON.stringify(pokemonDetails));

      // Display the fetched Pokemon details
      displayPokemon(pokemonDetails);
    })
    // If error type
    .catch((error) => {
      console.error("There was a problem fetching the data:", error);
    });
};

// Display the fetched data from the HTML
const displayPokemon = (pokemon) => {
  const pokemonDiv = document.getElementById("pokemonData");
  pokemonDiv.innerHTML = `
    <h3>${pokemon.name}</h3>
    <p>Pokédex: ${pokemon.id}</p>
    <img src="${pokemon.image}" alt="${pokemon.name}" id="pokemonImage" />
    <p>Type: ${pokemon.types}</p>
    <p>Height: ${pokemon.height}m</p>
    <p>Weight: ${pokemon.weight}kg</p>
  `;
};

// Arrow function to capitilize the first letter of the Pokémon
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
