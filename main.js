const routes = ["#home", "#emergency-prep", "#resources", "#contact"];

window.addEventListener("hashchange", () => {
  routeTo(window.location.hash);
});

window.addEventListener("DOMContentLoaded", () => {
  routeTo(window.location.hash);
});

/**
 * @param {string} view
 * @returns {void}
 */
function routeTo(newView) {
  console.log("Navigated to:", newView);
  if (newView === "") {
    newView = "#home";
  }
  if (!routes.includes(newView)) {
    window.location.hash = "#home";
    return;
  }
  for (const route of routes) {
    const view = document.querySelector(route);
    view.style.display = route === newView ? "block" : "none";
    const navLink = document.querySelector(`a.nav-link[href="${route}"]`);
    navLink.classList.toggle("active", route === newView);
  }
}
