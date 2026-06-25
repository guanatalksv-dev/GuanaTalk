<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<header class="guanatalk-navbar"> <div class="logo">
        <a href="index.php">
            <img src="img/GuanaTalk logo.png.png" alt="GuanaTalk Logo">
        </a>
    </div>
    
    <ul class="nav-links" id="nav-links">
        <li><a href="index.php">Home</a></li>
        <li><a href="favoritos.php">Favorites</a></li>
        <li><a href="aboutus.php">About Us</a></li>
    </ul>

    <div class="right-side">
        <?php if(isset($_SESSION['usuario_id'])): ?>
            <a href="php/profile.php" class="profile-btn">My Profile</a>
        <?php else: ?>
            <a href="login.php" class="profile-btn">Login</a>
            <a href="register.php" class="profile-btn">Register</a>
        <?php endif; ?>

        <button class="menu-toggle" id="menu-toggle">☰</button>
    </div>

</header>
<script>
const menu = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

menu.addEventListener("click", () => {
    links.classList.toggle("active");
});
</script>