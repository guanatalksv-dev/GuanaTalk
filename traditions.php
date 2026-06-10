<?php 
include("php/conexion.php"); 

$query = "SELECT * FROM tradiciones";
$resultado = $conn->query($query);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Traditions</title>
    <link rel="stylesheet" href="styles/traditions.css">
    <style>
        .categories-grid a {
            text-decoration: none;
            color: inherit;
            display: block;
            flex: 1;
        }
    </style>
</head>
<body>

    <header class="navbar">
        <div class="logo">
            <a href="index.php" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit;">
                <img src="img/GuanaTalk.png" alt="GuanaTalk Logo">
            </a>
        </div>
        <nav>
            <a href="index.php">Home</a>
            <a href="favoritos.html">Favorites</a>
            <a href="aboutus.html">About us</a>
        </nav>
        <div class="profile-section">
            <button class="profile-btn" onclick="window.location.href='php/profile.php'">
                My Profile
            </button>
        </div>
    </header>

    <main class="main-container">
        <section class="hero-section">
            <div class="hero-text">
                <h1>Traditions</h1>
                <p>Explore the vibrant heritage of El Salvador through its customs and arts.</p>
            </div>
            <div class="hero-image-container">
                <img src="hero_illustration.png" alt="El Salvador Traditions" class="hero-img">
            </div>
        </section>

        <section class="categories-grid">
            
            <?php
            if ($resultado && $resultado->num_rows > 0) {
                while ($fila = $resultado->fetch_assoc()) {
                    
                    if ($fila['titulo'] == 'Fiestas Patronales') {
                        $enlace = "fiestas-patronales.php";
                    } else {
                        $enlace = "#"; 
                    }
                    ?>
                    
                    <a href="<?php echo $enlace; ?>">
                        <div class="card <?php echo $fila['color_clase']; ?>">
                            <img src="img/<?php echo $fila['imagen']; ?>" alt="<?php echo $fila['titulo']; ?>">
                            <h3><?php echo $fila['titulo']; ?></h3>
                        </div>
                    </a>

                    <?php
                }
            } else {
                echo "<p style='color: #666; text-align: center; width: 100%;'>No se encontraron tradiciones disponibles en este momento.</p>";
            }
            ?>

        </section>

        <section class="fun-fact-box">
            <div class="fun-fact-content">
                <span class="megaphone-icon">📢</span>
                <p><strong>Fun Fact:</strong> Did you know that the Salvadoran capirucho is hand-carved from cedar wood?</p>
            </div>
        </section>
    </main>

</body>
</html>