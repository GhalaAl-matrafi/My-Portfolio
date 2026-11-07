/* ==========================================================
   SCRIPT.JS - Basic interactions for the portfolio website
   This file does four small things:
   1. Opens and closes the mobile menu
   2. Scrolls smoothly when a nav link or button is clicked
   3. Closes the mobile menu after a link is clicked
   4. Fills in the current year in the footer
   ========================================================== */

// Get the elements we need from index.html (matched by their id).
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");


/* ---------- 1. MOBILE MENU TOGGLE ----------
   Runs when the "Menu" button is clicked.
   It adds or removes the CSS class "open" on the menu,
   which shows or hides it on small screens. */
function toggleMenu() {
  const isOpen = navLinks.classList.toggle("open");
  // Tells screen readers whether the menu is open.
  navToggle.setAttribute("aria-expanded", isOpen);
}

navToggle.addEventListener("click", toggleMenu);


/* ---------- 2. SMOOTH SCROLLING ----------
   Runs when any link starting with "#" is clicked
   (nav links, hero buttons, and the logo).
   Instead of jumping, the page scrolls smoothly to the section. */
function smoothScroll(event) {
  const targetId = this.getAttribute("href");

  // Ignore placeholder links like href="#" (e.g. the project links you haven't filled in yet).
  if (targetId === "#") {
    event.preventDefault();
    return;
  }

  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    event.preventDefault();
    targetSection.scrollIntoView({ behavior: "smooth" });
    closeMenu(); // 3. close the mobile menu after clicking
  }
}

// Attach the function above to every link that points to a section on this page.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", smoothScroll);
});


/* ---------- 3. CLOSE MOBILE MENU ----------
   Hides the mobile menu. Called after a nav link is clicked
   so the menu doesn't stay open over the page. */
function closeMenu() {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}


/* ---------- 4. FOOTER YEAR ----------
   Writes the current year in the footer so you never
   need to update the copyright year by hand. */
function setCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

setCurrentYear();