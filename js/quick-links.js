// Hämta DOM-element
const addButton = document.querySelector(".dash-element-btn");
const linkList = document.querySelector(".dash-link");

// Funktion för att lägga till en länk
const addLink = () => {
  const linkURL = prompt("Enter a website:");
  const linkTitle = prompt("Enter the title:");

  if (linkURL && linkTitle) {
    const linkItem = document.createElement("div");
    linkItem.classList.add("dash-link");

    const link = document.createElement("a");
    link.href = linkURL;
    link.target = "_blank";

    const linkTitleElem = document.createElement("h3");
    linkTitleElem.textContent = linkTitle;

    const favicon = document.createElement("img");
    favicon.src = `https://www.google.com/s2/favicons?domain=${linkURL}`;
    favicon.alt = "Favicon";

    link.appendChild(favicon);
    link.appendChild(linkTitleElem);
    linkItem.appendChild(link);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-link");
    removeButton.addEventListener("click", () => {
      linkItem.remove();
    });
    linkItem.appendChild(removeButton);

    linkList.appendChild(linkItem);
  } else {
    alert("Please enter a URL and a title.");
  }
};

// Lägg till händelselyssnare för att lägga till länkar
addButton.addEventListener("click", addLink);
