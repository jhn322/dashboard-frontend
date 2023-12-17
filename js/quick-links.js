// Function to save links to localStorage
const saveLinks = () => {
  const linkContainer = document.querySelector(".quick-link-container");
  const links = linkContainer.innerHTML;
  localStorage.setItem("dashboardLinks", links);
};

// Function to load links from localStorage
const loadLinks = () => {
  const linkContainer = document.querySelector(".quick-link-container");
  const savedLinks = localStorage.getItem("dashboardLinks");
  if (savedLinks) {
    linkContainer.innerHTML = savedLinks;
    removeLinks();
  }
};

// Load saved links when the page loads
document.addEventListener("DOMContentLoaded", loadLinks);

// Arrow function to add remove links to remove button
const removeLinks = () => {
  const linkContainer = document.querySelector(".quick-link-container");
  const removeIcons = linkContainer.querySelectorAll(".fa-circle-minus");
  removeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const linkItem = icon.parentElement;
      linkContainer.removeChild(linkItem);
      saveLinks();
    });
  });
};

// Arrow function to add a new link to the quick-link-container
const addLink = () => {
  const linkContainer = document.querySelector(".quick-link-container");

  // If already added links are less than 4, user can add more links
  if (linkContainer.children.length < 4) {
    const linkURL = prompt("Enter the URL:");
    const linkTitle = prompt("Enter the title:");

    // Checks if the URL & title are submitted
    if (linkURL && linkTitle) {
      let fixedURL = linkURL;
      // Checks if the user doesn't type http(s)://
      if (!linkURL.startsWith("http://") && !linkURL.startsWith("https://")) {
        // Assumes the user forgot it and adds it for the URL to work
        fixedURL = `https://${linkURL}`;
      }

      // Creates the elements for the new link
      const linkItem = document.createElement("div");
      linkItem.classList.add("quick-link");
      linkItem.classList.add(`quick-link-${linkContainer.children.length + 1}`);

      // Creates an image from the favicon link
      const favicon = document.createElement("img");
      favicon.src = `https://www.google.com/s2/favicons?domain=${fixedURL}`;
      favicon.alt = "Favicon";

      // Creating the div link-content
      const linkContent = document.createElement("div");
      linkContent.classList.add("link-content");

      // Creates a link with written URL
      const link = document.createElement("a");
      link.href = fixedURL;
      // Sets the link to open in a new tab
      link.target = "_blank";

      // Creates a H3 for the link title
      const linkTitleElem = document.createElement("h3");
      linkTitleElem.textContent = linkTitle;

      // Creates an icon from fontawesome for removing the links
      const removeIcon = document.createElement("i");
      removeIcon.classList.add("fa-solid", "fa-circle-minus");
      // Link item is removed onclick
      removeIcon.addEventListener("click", () => {
        const linkItem = removeIcon.parentElement;
        linkContainer.removeChild(linkItem);
        // Saves the updated links list
        saveLinks();
      });

      // The new links structure which appends to their respective element
      link.appendChild(favicon);
      link.appendChild(linkTitleElem);
      linkContent.appendChild(link);
      linkItem.appendChild(linkContent);
      linkItem.appendChild(removeIcon);
      linkContainer.appendChild(linkItem);

      // Saves the updated links to localStorage
      saveLinks();

      // Adds remove function to remove button
      removeLinks();

      // Alerts if user input is missing
    } else {
      alert("Please enter a URL and a title.");
    }
    // If user tries to add more links after 4 has already been added
  } else {
    alert("You have reached the maximum number of quick links.");
  }
};

// Added onclick event listener to add links button for adding links
const addLinkButton = document.querySelector(".add-link-btn");
addLinkButton.addEventListener("click", addLink);
