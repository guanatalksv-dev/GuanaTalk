<?php
include("php/conexion.php"); 

$query = "SELECT * FROM unique_celebrations";
$resultado = $conn->query($query);
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Unique Celebrations - GuanaTalk</title>
        <link rel="stylesheet" href="styles/traditions.css">
        <link rel="stylesheet" href="styles/unique-celebrations.css">
        <link rel="stylesheet" href="styles/navbar.css">

    </head>
    <body>

        <?php include("components/navbar.php"); ?>

        <div class="celebrations-bg">
            <main class="celebrations-container">
                
                <h1 class="celebrations-title">Unique Celebrations: Profound Traditions</h1>

                <section class="celebrations-grid">
                    <?php
                    if ($resultado && $resultado->num_rows > 0) {
                        while ($fila = $resultado->fetch_assoc()) {
                            ?>
                            <div class="celebration-card">
                                <div class="celebration-img-box">
                                    <img src="img/<?php echo $fila['imagen']; ?>" alt="<?php echo $fila['nombre']; ?>">
                                </div>
                                
                                <h2><?php echo $fila['nombre']; ?></h2>
                                <p><?php echo $fila['descripcion']; ?></p>
                            </div>
                            <?php
                        }
                    } else {
                        echo "<p style='color: white; text-align: center; width: 100%;'>No celebrations found.</p>";
                    }
                    ?>
                </section>

           
        </div>
    <script src="JavaScript/navbar.js"></script>
    </body>
</html>