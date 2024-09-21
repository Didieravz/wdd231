document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".navBar ul");

  // Crear el botón del menú hamburguesa
  const menuToggle = document.createElement("button");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰";
  header.appendChild(menuToggle);

  // Función para togglear el menú
  function toggleMenu() {
    nav.classList.toggle("show");
  }

  // Event listener para el botón del menú
  menuToggle.addEventListener("click", toggleMenu);
});
