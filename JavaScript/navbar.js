document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks && !menuToggle.dataset.navReady) {
        menuToggle.dataset.navReady = "true";
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    }
});
