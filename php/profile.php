<?php
session_start();

if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../styles/profile.css">
</head>
<body>
    <div class="profile-container">

    <div class="profile-card">

        <h1>My Profile</h1>

        <div class="profile-info">
            <p><strong>Name:</strong> <?php echo $_SESSION['nombre']; ?></p>

            <p><strong>Nationality:</strong> <?php echo $_SESSION['nacionalidad']; ?></p>

            <p><strong>Email:</strong> <?php echo $_SESSION['email']; ?></p>
        </div>

        <div class="profile-actions">
            <a href="../index.php" class="home-btn">Home</a>
            <a href="logout.php" class="logout-btn">Log Out</a>
        </div>

    </div>

</div>
</body>
</html>

