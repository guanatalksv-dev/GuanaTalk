<?php
// 1. Incluimos tu archivo de conexión real
include("php/conexion.php"); 

// 2. Consultamos los datos de la nueva tabla que creamos
$query = "SELECT * FROM folklore_dances";
$resultado = $conn->query($query);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Folklore Dances - GuanaTalk</title>
    <link rel="stylesheet" href="styles/folklores.css">
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
            <a href="favoritos.html">Favorite</a>
            <a href="aboutus.html">About us</a>
        </nav>
        <div class="profile-section">
            <button class="profile-btn">My Profile</button>
        </div>
    </header>

    <div class="folklore-bg">
        <main class="folklore-container">
            
            <section class="folklore-hero">
                <div class="hero-info">
                    <h1>Folklore Dances:<br>Movement and Color</h1>
                </div>
                <div class="hero-art">
                    <img src="img/dances.png" alt="Folklore Dances Illustration">
                </div>
            </section>

            <section class="dances-grid">
                <?php
                if ($resultado && $resultado->num_rows > 0) {
                    while ($fila = $resultado->fetch_assoc()) {
                        ?>
                        <div class="dance-card">
                            <div class="dance-img-box">
                                <img src="img/<?php echo $fila['imagen']; ?>" alt="<?php echo $fila['nombre']; ?>">
                            </div>
                            <div class="dance-text-box">
                                <h2><?php echo $fila['nombre']; ?></h2>
                                <p><?php echo $fila['descripcion']; ?></p>
                            </div>
                        </div>
                        <?php
                    }
                } else {
                    echo "<p style='color: white; text-align: center; width: 100%;'>No dances found in the database.</p>";
                }
                ?>
            </section>

            <section class="folklore-dyk-banner">
                <div class="dyk-badge">
                    <span>📢</span>
                    <strong>Did you<br>know?</strong>
                </div>
                <p class="dyk-message">El Salvador has over 100 documented traditional dances, each with its unique history.</p>
            </section>

        </main>
    </div>

</body>
</html>