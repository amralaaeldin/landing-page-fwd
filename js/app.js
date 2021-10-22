/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbar = document.querySelector(".navbar__menu");
const navUl = document.getElementById("navbar__list");
const sections = [...document.querySelectorAll("section")];
const pageHeader = document.querySelector(".page__header");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function secRemoveAll() {
  sections.forEach((section) => {
    section.classList.remove("your-active-class");
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((section) => {
  const anchor = document.createElement("a");
  const lItem = document.createElement("li");
  const text = document.createTextNode(`${section.getAttribute("data-nav")}`);
  anchor.setAttribute("href",`#${section.getAttribute("data-nav").toLowerCase().split(" ").join("")}`);
  anchor.setAttribute("class", "menu__link");
  // Build menu
  anchor.appendChild(text);
  lItem.appendChild(anchor);
  navUl.appendChild(lItem);
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to section on link click
navbar.addEventListener("click", (e) => {
  e.preventDefault();
  const secName = e.target.innerText.toLowerCase().split(" ").join("");
  // Scroll to anchor ID using scrollTO event
  window.scrollTo({
    top: document.getElementById(secName).offsetTop,
    behavior: "smooth",
  });
  secRemoveAll();
  // Set sections as active
  document.getElementById(secName).classList.add("your-active-class");
});

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - section.clientHeight / 2) {
      secRemoveAll();
      section.classList.add("your-active-class");
    }
  });
});