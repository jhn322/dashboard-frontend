// Custom event - random button
document.getElementById("addLinkBtn").addEventListener("click", function () {
  gtag("event", "add_link_button_click", {
    event_category: "button_click",
    event_label: "Add Link Button",
  });
});

// Custom event - new pokemon button
document.getElementById("randomPokemonButton").addEventListener("click", function () {
  gtag("event", "new_pokemon_button_click", {
    event_category: "button_click",
    event_label: "New Pokemon Button",
  });
});

// Custom event - delete notes button
document.getElementById("notesDeleteBtn").addEventListener("click", function () {
  gtag("event", "delete_notes_button_click", {
    event_category: "button_click",
    event_label: "Delete Notes Button",
  });
});

// Custom event - random button
document.getElementById("randomizeBackgroundBtn").addEventListener("click", function () {
  gtag("event", "randomize_background", {
    event_category: "button_click",
    event_label: "Randomize Background Button",
  });
});
