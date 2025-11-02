

const menu = document.getElementById("menu-icon");
const menuPage = document.getElementById("nav-part3");
const menuLinks = document.querySelectorAll("#mobile-nav a");
let menuStatus = false;

// Toggle menu when the menu icon is clicked
menu.addEventListener("click", function() {
  if (menuStatus) {
    menuPage.style.left = "-100vw";
  } else {
    menuPage.style.left = "0vw";
  }
  // Toggle the menuStatus
  menuStatus = !menuStatus;
});

// Close the menu when any link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", function() {
    menuPage.style.left = "-100vw";
    menuStatus = false; // Ensure menuStatus is set to false
  });
});
