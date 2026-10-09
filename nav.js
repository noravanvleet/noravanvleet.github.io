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

document.addEventListener("pointerdown", (event) => {
  const menuOpen = menuButton.getAttribute("aria-expanded") === "true";
  if (menuOpen && !event.target.closest(".site-header")) setMenuOpen(false);
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

// A clicked section stays highlighted until the visitor scrolls themselves,
// since sections near the bottom can't always scroll to the top of the screen.
let clickedSection = null;

function highlightCurrentSection() {
  let current = clickedSection;
  if (!current) {
    for (const section of sectionLinks.keys()) {
      if (section.getBoundingClientRect().top <= 120) current = section;
    }
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) current = [...sectionLinks.keys()].pop();
    current ??= sectionLinks.keys().next().value;
  }

  for (const [section, link] of sectionLinks) {
    if (section === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

function selectSectionFromHash() {
  clickedSection = document.getElementById(location.hash.slice(1));
  if (!sectionLinks.has(clickedSection)) clickedSection = null;
  highlightCurrentSection();
}

if (sectionLinks.size > 0) {
  selectSectionFromHash();
  // Back and Forward change the hash without a click
  window.addEventListener("hashchange", selectSectionFromHash);

  for (const [section, link] of sectionLinks) {
    link.addEventListener("click", () => {
      clickedSection = section;
      highlightCurrentSection();
    });
  }

  const releaseClickedSection = () => {
    if (!clickedSection) return;
    clickedSection = null;
    highlightCurrentSection();
  };
  const scrollKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
  window.addEventListener("wheel", releaseClickedSection, { passive: true });
  window.addEventListener("touchmove", releaseClickedSection, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (scrollKeys.includes(event.key)) releaseClickedSection();
  });
  // Dragging the scrollbar fires none of the events above, so also release
  // the clicked section once a scroll leaves it off screen.
  window.addEventListener("scrollend", () => {
    if (!clickedSection) return;
    const { top, bottom } = clickedSection.getBoundingClientRect();
    if (bottom <= 0 || top >= window.innerHeight) releaseClickedSection();
  });

  window.addEventListener("scroll", highlightCurrentSection, { passive: true });
  window.addEventListener("resize", highlightCurrentSection);
}
