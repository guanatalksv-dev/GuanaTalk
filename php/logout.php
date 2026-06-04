<?php
session_start();

$_SESSION = array();

session_destroy();

header("Location: ../index.php");
exit();
?>

<div class="profile-section">
    <button class="profile-btn">My Profile</button>
    <a href="php/logout.php" class="profile-btn">Log Out</a>
</div>


