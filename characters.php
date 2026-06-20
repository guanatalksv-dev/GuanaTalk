<?php
$servidor   = "localhost";
$usuario    = "root";
$password   = "";
$base_datos = "guanatalk_db";

$conexion = new mysqli($servidor, $usuario, $password, $base_datos);

if ($conexion->connect_error) {
    die("Error al conectar con la base de datos: " . $conexion->connect_error);
}

$sql = "SELECT id_character, nombre, descripcion, imagen FROM historical_characters";
$resultado = $conexion->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guanatalk - Historical Characters</title>
    <link rel="stylesheet" href="styles/characters-style.css?v=abc">
    <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
            <link rel="stylesheet" href="styles/footer.css">

</head>
<body>

    <div class="back-navigation" style="margin: 20px auto; max-width: 1200px; padding: 0 20px;">
        <a href="funfacts.php" class="btn-back" style="text-decoration: none; color: #0056b3; font-weight: bold; display: inline-flex; align-items: center; gap: 5px;">
            <i class="ri-arrow-left-line"></i> Back to Fun Facts
        </a>
    </div>

    <main class="content-container">
        <section class="historical-section">
            <div class="section-title-badge">
                <h2>Historical Characters of El Salvador</h2>
            </div>
            
            <div class="characters-container">
                
                <?php
                if ($resultado && $resultado->num_rows > 0) {
                    while ($personaje = $resultado->fetch_assoc()) {
                ?>
                        <div class="character-flip-card" data-id="<?php echo $personaje['id_character']; ?>">
                            <div class="character-card-inner">
                                
                                <div class="character-card-front">
                                    <img src="<?php echo $personaje['imagen']; ?>" class="flip-card-img" alt="<?php echo htmlspecialchars($personaje['nombre']); ?>">
                                    <div class="front-info-overlay">
                                        <h3><?php echo htmlspecialchars($personaje['nombre']); ?></h3>
                                        <p class="character-role">Historical Figure</p>
                                        <span class="hover-hint"><i class="ri-hand-pointer-line"></i> Hover to discover</span>
                                    </div>
                                </div>
                                
                                <div class="character-card-back">
                                    <div class="character-bio-content">
                                        <h3>Did you know?</h3>
                                        <p class="character-bio">
                                            <?php echo htmlspecialchars($personaje['descripcion']); ?>
                                        </p>
                                    </div>
                                    
                                    <div class="character-fav-star-container">
                                        <i class="ri-star-line character-fav-star" title="Add to favorites"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                <?php
                    }
                } else {
                    echo "<p style='text-align: center; color: #999; grid-column: 1/-1;'>No characters found yet. Add some in phpMyAdmin!</p>";
                }
                ?>

            </div> </section>
    </main>
<?php include("php/footer.php"); ?>

</body>
</html>