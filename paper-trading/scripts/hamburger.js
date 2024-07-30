// Toggles hamburger overlay
function hamburgerToggle() {
    document.querySelector(".hamburger").addEventListener("click", function () {
      document.querySelector("nav").classList.toggle("show");
    });
  }

  hamburgerToggle()