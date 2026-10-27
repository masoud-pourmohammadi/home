const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-menu");

if (menuButton && menu) {
  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menu.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.querySelector(".sr-only").textContent = isOpen ? "Close navigation" : "Open navigation";
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});