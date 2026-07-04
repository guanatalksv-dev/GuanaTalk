<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<header class="guanatalk-navbar">
    <div class="logo">
        <a href="index.php">
            <img src="img/GuanaTalk logo.png.png" alt="GuanaTalk Logo">
        </a>
    </div>

    <ul class="nav-links" id="nav-links">
        <li><a href="index.php">Home</a></li>
        <li><a href="favoritos.php">Favorites</a></li>
        <li><a href="aboutus.php">About Us</a></li>

        <?php if(isset($_SESSION['usuario_id'])): ?>
            <li class="nav-auth nav-auth-start"><a href="php/profile.php" class="profile-btn">My Profile</a></li>
        <?php else: ?>
            <li class="nav-auth nav-auth-start"><a href="login.php" class="profile-btn">Login</a></li>
            <li class="nav-auth"><a href="register.php" class="profile-btn">Register</a></li>
        <?php endif; ?>
    </ul>

    <div class="right-side">
        <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-links">&#9776;</button>
    </div>
</header>
<script>
const menu = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

if (menu && links && !menu.dataset.navReady) {
    menu.dataset.navReady = "true";
    menu.addEventListener("click", () => {
        const isOpen = links.classList.toggle("active");
        menu.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}
</script>
