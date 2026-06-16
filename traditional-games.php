<?php
include("php/conexion.php"); 

$query = "SELECT * FROM traditional_games";
$resultado = $conn->query($query);
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Traditional Games - GuanaTalk</title>
        <link rel="stylesheet" href="styles/traditions.css">
        <link rel="stylesheet" href="styles/traditional-games.css">
        <link rel="stylesheet" href="styles/navbar.css">
    </head>
    <body>

        <?php include("components/navbar.php"); ?>

        <div class="games-bg">
            <main class="games-container">
                
                <h1 class="games-title">Traditional Games: Ancestral Diversión</h1>

                <section class="games-grid">
                    <?php
                    if ($resultado && $resultado->num_rows > 0) {
                        while ($fila = $resultado->fetch_assoc()) {
                            ?>
                            <div class="game-card">
                                <h2><?php echo $fila['nombre']; ?></h2>
                                
                                <div class="game-img-box">
                                    <img src="img/<?php echo $fila['imagen']; ?>" alt="<?php echo $fila['nombre']; ?>">
                                </div>
                                
                                <div class="game-instructions">
                                    <h3>How to use:</h3>
                                    <p><?php echo $fila['paso1']; ?></p>
                                    <p><?php echo $fila['paso2']; ?></p>
                                    <p><?php echo $fila['paso3']; ?></p>
                                </div>
                            </div>
                            <?php
                        }
                    } else {
                        echo "<p style='color: white; text-align: center; width: 100%;'>No games found.</p>";
                    }
                    ?>
                </section>

                <section class="games-fun-fact">
                    <div class="ff-icon">📢</div>
                    <div class="ff-text">
                        <strong>Fun Fact:</strong> Did you know that the Salvadoran capirucho is hand-carved from cedar wood?
                    </div>
                </section>

            </main>
        </div>

    <script src="JavaScript/navbar.js"></script>
    
    </body>
</html>