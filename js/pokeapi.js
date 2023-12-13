// The purpose of this code is to fetch information from https://pokeapi.co/ using their open API to show a information about a random pokémon for example their height, weight, name. The user should also be able to randomize information about a new pokémon as many times as they want basically.

// Arrow function to fetch Pokémon data from PokeAPI
fetchPokemonData = () => {
  // Fetches the pokémon Garchomp from PokeAPI
  const pokemonNameOrId = "garchomp";
  // Using the variabel to fetch the pokémon(s) from their website
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

  // Using fetch to make a request to their API url
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        // Checks if respone is OK
        throw new Error("Network response was not ok.");
      }
      // Return as JSON
      return response.json();
    })
    .then((data) => {
      // Display the fetched data in the HTML
      const pokemonDiv = document.getElementById("pokemonData");
      pokemonDiv.innerHTML = `
                    <h3>Name: ${data.name}</h3>
                    <img src="${data.sprites.front_default}" alt="${data.name}" />
                    <p>Height: ${data.height}</p>
                    <p>Weight: ${data.weight}</p>
                `;
    })
    .catch((error) => {
      // If there's an error log it to the console
      console.error("There was a problem fetching the data:", error);
    });
};

// Call on the function to fetch Pokémon data when the page loads
window.onload = fetchPokemonData;
