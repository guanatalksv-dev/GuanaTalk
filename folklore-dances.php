<?php

include("php/conexion.php"); 

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
        <link rel="stylesheet" href="styles/navbar.css">
         <link rel="stylesheet" href="styles/footer.css">

    </head>
    <body>

     <?php include("components/navbar.php"); ?>

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

            </main>
        </div>
        <script src="JavaScript/navbar.js"></script>
    
      <?php include("php/footer.php"); ?>
    </body>
</html>