// This will show a modal front and center focused to the user so they can add their webpage links of their choosing. Max 4 links can be added but previous links can be removed as well. Links are dynamically rendered in the element on the dashboard.

// Arrow function to save links to localStorage
const saveLinks = () => {
  const linkContainer = document.querySelector(".quick-link-container");
  const links = linkContainer.innerHTML;
  localStorage.setItem("dashboardLinks", links);
};

// Arrow function to load links from localStorage
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

// Arrow function to check if there are already 4 links saved
const linkLimit = () => {
  const linkContainer = document.querySelector(".quick-link-container");
  return linkContainer.children.length >= 4;
};

// Function to allow "Enter" key press on the modal input fields to confirm
const enterToConfirm = () => {
  document.getElementById("linkURL").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // Triggers the "Add Link" button click event
      document.getElementById("modalAdd-btn").click();
    }
  });

  // Listen to Enter key to confirm
  document.getElementById("linkTitle").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // Triggers the "Add Link" button click event
      document.getElementById("modalAdd-btn").click();
    }
  });
};

// Arrow function to display the modal and overlay
const quickModal = () => {
  if (!linkLimit()) {
    // Checks the link limit before displaying modal
    const modal = document.getElementById("quickModal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";

    // Added event listeners for "Enter" key press in modal input fields
    enterToConfirm();
  } else {
    alert("You have reached the maximum number of quick links.");
  }
};

// Event listener for the "Add more links" button to display modal
const addLinkButton = document.querySelector(".add-link-btn");
addLinkButton.addEventListener("click", quickModal);

// Arrow function to hide the modal
const closeModal = () => {
  const modal = document.getElementById("quickModal");
  const overlay = document.getElementById("overlay");
  modal.style.display = "none";
  overlay.style.display = "none";
};

// Event listener for closing the modal
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// Event listener for adding link from the modal
const modalAddBtn = document.getElementById("modalAdd-btn");
modalAddBtn.addEventListener("click", () => {
  const linkURL = document.getElementById("linkURL").value;
  const linkTitle = document.getElementById("linkTitle").value;

  const linkContainer = document.querySelector(".quick-link-container");

  // If already added links are less than 4, user can add more links
  if (linkContainer.children.length < 4) {
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

      // Hides the modal after adding the link
      closeModal();

      // Alerts if user input is missing
    } else {
      alert("Please enter a URL and a title.");
    }
    // If user tries to add more links after 4 has already been added
  } else {
    alert("You have reached the maximum number of quick links.");
  }
  // Clears input fields in the modal after adding the link or if maximum links reached
  document.getElementById("linkURL").value = "";
  document.getElementById("linkTitle").value = "";
  // Focus to the URL input
  document.getElementById("linkURL").focus();
});
