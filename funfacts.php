<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$servidor   = "localhost";
$usuario    = "root";
$password   = "";
$base_datos = "guanatalk_db";

$conexion = new mysqli($servidor, $usuario, $password, $base_datos);

if ($conexion->connect_error) {
    die("Error al conectar con la base de datos: " . $conexion->connect_error);
}

$usuario_id = null;
if (isset($_SESSION['usuario_id'])) {
    $usuario_id = $_SESSION['usuario_id'];
} elseif (isset($_SESSION['id_usuario'])) {
    $usuario_id = $_SESSION['id_usuario'];
}
$usuario_id = intval($usuario_id);

$sql = "SELECT ff.id_fact, ff.titulo, ff.descripcion, ff.imagen,
               IF(f.id IS NOT NULL, 1, 0) AS es_favorito
        FROM funfacts ff
        LEFT JOIN favoritos f ON f.item_id = ff.id_fact 
                             AND f.tipo_item = 'funfact' 
                             AND f.usuario_id = $usuario_id";

$resultado = $conexion->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuanaTalk - Fun Facts</title>
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="styles/funfacts-style.css">
    <link rel="stylesheet" href="styles/funfacts-style(1).css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="styles/footer.css">
</head>
<body>

   <?php include("components/navbar.php"); ?>
    <main class="content-container">

        <section class="hero-section">
            <div class="hero-text">
                <h1>Fun facts</h1>
                <p>Discover the national symbols of El Salvador and the stories behind them.</p>
            </div>
            <div class="hero-image">
                <img class="hero-img" src="img/fondosv.png" alt="El Salvador">
            </div>
        </section>

        <section class="symbols-section">
            <div class="section-title-badge">
                <h2>National symbols</h2>
            </div>

            <p class="section-subtitle">
                Learn about the symbols that represent El Salvador.
            </p>

            <div class="cards-grid">
                
                <?php
                if ($resultado && $resultado->num_rows > 0) {
                    while ($fila = $resultado->fetch_assoc()) {
                        $id_fact     = $fila['id_fact'];
                        $titulo      = htmlspecialchars($fila['titulo']);
                        $descripcion = htmlspecialchars($fila['descripcion']);
                        $imagen      = htmlspecialchars($fila['imagen']);
                        
                        $esFav = ($fila['es_favorito'] == 1);
                        $claseEstrella = $esFav ? 'ri-star-fill' : 'ri-star-line';
                        $estiloColor = $esFav ? 'style="color: #f1c40f;"' : '';
                        ?>
                        
                        <div class="card-container" data-id="fact-<?php echo $id_fact; ?>">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src="<?php echo $imagen; ?>" alt="<?php echo $titulo; ?>">
                                    <h3><?php echo $titulo; ?></h3>
                                    <p class="tap-hint"><i class="ri-hand-pointer-line"></i> Hover to discover</p>
                                </div>
                                <div class="card-back">
                                    <h3>Did you know?</h3>
                                    <p><?php echo $descripcion; ?></p>
                                    <div class="card-back-action">
                                        <i class="<?php echo $claseEstrella; ?> favorite-toggle" <?php echo $estiloColor; ?> title="Favorites"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <?php
                    }
                } else {
                    echo "<p class='section-subtitle'>No fun facts found in the database yet.</p>";
                }
                $conexion->close();
                ?>

            </div>
        </section>

        <div class="more-content-section" style="text-align: center; margin-top: 40px; margin-bottom: 20px;">
            <div style="display: flex; gap: 20px; justify-content: center; align-items: stretch; flex-wrap: wrap; max-width: 800px; margin: 0 auto;">
                
                <div style="flex: 1; min-width: 280px; background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between;">
                    <p style="font-size: 1.1rem; font-weight: 600; color: #333; margin-bottom: 15px;">Want to learn about history?</p>
                    <a href="characters.php" class="btn-extra-content" style="display: inline-block; padding: 12px 20px; background-color: #3498db; color: #fff; text-decoration: none; border-radius: 25px; font-weight: bold; transition: background 0.3s;">
                        Meet Historical Characters
                    </a>
                </div>

                <div style="flex: 1; min-width: 280px; background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between;">
                    <p style="font-size: 1.1rem; font-weight: 600; color: #333; margin-bottom: 15px;">Do you want to see more patriotic symbols?</p>
                    <a href="simbolos-patrioticos.html" class="btn-extra-content" style="display: inline-block; padding: 12px 20px; background-color: #8bc34a; color: #fff; text-decoration: none; border-radius: 25px; font-weight: bold; transition: background 0.3s;">
                        Click here to discover extra content!
                    </a>
                </div>

            </div>
        </div>

    </main>

    <script src="JavaScript/navbar.js"></script>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const estrellas = document.querySelectorAll(".favorite-toggle");

            estrellas.forEach(estrella => {
                const bloque = estrella.closest(".card-container");
                if (!bloque) return;

                const idString = bloque.getAttribute("data-id");
                if (!idString) return;
                const itemId = idString.replace("fact-", ""); 

                estrella.addEventListener("click", (evento) => {
                    evento.stopPropagation(); 

                    const formData = new FormData();
                    formData.append('tipo_item', 'funfact');
                    formData.append('item_id', itemId);

                    fetch('php/guardar_favoritos.php', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'added') {
                            estrella.classList.remove("ri-star-line");
                            estrella.classList.add("ri-star-fill");
                            estrella.style.color = "#f1c40f";
                            console.log("Fun Fact guardado en la Base de Datos. ID:", itemId);
                        } else if (data.status === 'removed') {
                            estrella.classList.remove("ri-star-fill");
                            estrella.classList.add("ri-star-line");
                            estrella.style.color = "";
                            console.log("Fun Fact eliminado de la Base de Datos. ID:", itemId);
                        } else if (data.status === 'error') {
                            alert(data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error al conectar con el servidor:', error);
                    });
                });
            });
        });
    </script>
<<<<<<< HEAD
     <script src="JavaScript/navbar.js"></script>
       <?php include("php/footer.php"); ?>
=======
    <?php include("php/footer.php"); ?>
>>>>>>> 9657890a97c92957897bc288eb195c55705d8d76
</body>
</html>