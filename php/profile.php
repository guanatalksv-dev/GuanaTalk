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
    <title>My Profile</title>
    <link rel="stylesheet" href="../styles/profile.css">
     <link rel="shortcut icon" href="img/favicon_io (1) /favicon.ico" type="image/x-icon">
</head>
<body>
    <div class="profile-container">
        <div class="profile-card">
 
            <div class="profile-avatar-wrapper">
                <div class="profile-avatar default-avatar">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#eef5fc"/>
                        <circle cx="12" cy="9.5" r="3.5" fill="#0076ce"/>
                        <path d="M12 14c-4 0-6 2.5-6 5v1h12v-1c0-2.5-2-5-6-5z" fill="#0076ce"/>
                    </svg>
                </div>
            </div>

            <h1>My Profile</h1>

            <div class="profile-info">
                <p class="profile-name"><?php echo htmlspecialchars($_SESSION['nombre']); ?></p>
                <p class="profile-email"><?php echo htmlspecialchars($_SESSION['email']); ?></p>
                
                <div class="profile-meta">
                    <span><strong>Nationality:</strong> <?php echo htmlspecialchars($_SESSION['nacionalidad']); ?></span>
                </div>
            </div>

            <div class="profile-actions">
                <a href="../index.php" class="home-btn">Home</a>
                <a href="logout.php" class="logout-btn">Log Out</a>
            </div>

        </div>
    </div>
</body>
</html>