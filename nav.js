const nav = document.getElementById("site-nav");
const menuButton = document.querySelector(".menu-button");
const narrowScreen = window.matchMedia("(max-width: 767px)");

// Menu button: collapse the nav on narrow screens
function setMenuOpen(open) {
  nav.classList.toggle("is-collapsed", !open);
  menuButton.setAttribute("aria-expanded", String(open));
}

setMenuOpen(false);

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a") && narrowScreen.matches) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

// Highlight the link for the section currently on screen
const sectionLinks = new Map();
for (const link of nav.querySelectorAll('a[href*="#"]')) {
  const section = document.getElementById(link.hash.slice(1));
  if (section) sectionLinks.set(section, link);
}

if (sectionLinks.size > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of sectionLinks.values()) link.removeAttribute("aria-current");
        sectionLinks.get(entry.target).setAttribute("aria-current", "location");
      }
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  for (const section of sectionLinks.keys()) observer.observe(section);
}
