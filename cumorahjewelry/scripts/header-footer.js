document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navElement = document.querySelector(".menuLinks");

// Resalta la opción del menú activa
const navLinks = document.querySelectorAll("#primaryNav a");
const currentPath = window.location.pathname.split("/").pop();

// Resalta la opción del menú activa
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

hamburgerBtn.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburgerBtn.classList.toggle("open");
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (!hamburgerBtn.contains(event.target) && !navElement.contains(event.target)) {
    navElement.classList.remove("open");
    hamburgerBtn.classList.remove("open");
  }
});

// Asegurarse de que el menú esté visible en pantallas grandes
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navElement.classList.remove("open");
    hamburgerBtn.classList.remove("open");
  }
});
