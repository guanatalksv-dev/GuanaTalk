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
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="styles/footer.css">
    <style>
        .categories-grid a {
            text-decoration: none;
            color: inherit;
            display: block;
            flex: 1;
        }
    </style>
     <link rel="shortcut icon" href="img/favicon_io (1) /favicon.ico" type="image/x-icon">
</head>
<body>

    <?php include("components/navbar.php"); ?>

    <main class="main-container">
        <section class="hero-section">
            <div class="hero-text">
                <h1>Traditions</h1>
                <p>Explore the vibrant heritage of El Salvador through its customs and arts.</p>
            </div>
            <div class="hero-image-container">
                <img src="img/ilustracion.png.png" alt="El Salvador Traditions" class="hero-img">
            </div>
        </section>

        <section class="categories-grid">
            <?php
            if ($resultado && $resultado->num_rows > 0) {
                while ($fila = $resultado->fetch_assoc()) {
                    if ($fila['titulo'] == 'Fiestas Patronales') {
                        $enlace = "fiestas-patronales.php";
                    } elseif ($fila['titulo'] == 'Folklore Dances') {
                        $enlace = "folklore-dances.php";
                    } elseif ($fila['titulo'] == 'Traditional Games') {
                        $enlace = "traditional-games.php";
                    } elseif ($fila['titulo'] == 'Unique Celebrations') {
                        $enlace = "unique-celebrations.php";
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
    </main>

    <script src="JavaScript/navbar.js"></script>
    <?php include("php/footer.php"); ?>
    

</body>
</html>