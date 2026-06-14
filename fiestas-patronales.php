<?php
include("php/conexion.php");

// Consultamos los elementos de las Fiestas Patronales (tradicion_id = 1)
$query_elementos = "SELECT * FROM sub_tradiciones WHERE tradicion_id = 1";
$resultado = $conn->query($query_elementos);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiestas Patronales - GuanaTalk</title>
    <link rel="stylesheet" href="styles/fiestas-patronaless.css">
</head>
<body>

   <?php include("nabvar.php"); ?>

    <main class="fiestas-container">
        
        <h1 class="page-title">Fiestas Patronales: Local Celebrations</h1>

        <section class="zigzag-wrapper">
            <?php
            if ($resultado && $resultado->num_rows > 0) {
                $contador = 0;
                while ($fila = $resultado->fetch_assoc()) {
                    $alineacion = ($contador % 2 == 0) ? 'row-left' : 'row-right';
                    ?>
                    <div class="zigzag-row <?php echo $alineacion; ?>">
                        <div class="green-card-horizontal">
                            <img src="img/<?php echo $fila['imagen']; ?>" alt="<?php echo $fila['nombre']; ?>" class="card-thumb">
                            <div class="card-details">
                               <h2><?php echo $fila['nombre']; ?></h2>
                               <span class="card-date"><?php echo $fila['fecha']; ?></span>
                               <p><?php echo $fila['descripcion']; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php
                    $contador++;
                }
            } else {
                echo "<p style='text-align:center;'>No se encontraron celebraciones en la base de datos.</p>";
            }
            ?>
        </section>

        <section class="did-you-know-banner">
            <div class="dyk-icon">📢</div>
            <div class="dyk-title">Did you<br>know?</div>
            <div class="dyk-text">Most towns in El Salvador celebrate a Patronal Festival dedicated to their saint.</div>
        </section>

    </main>
     <script src="JavaScript/navbar.js"></script>
</body>
</html>