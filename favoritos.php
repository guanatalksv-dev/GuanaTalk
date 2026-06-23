<?php
session_start();

include 'php/conexion.php';

if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.php");
    exit;
}

$usuario_id = $_SESSION['usuario_id'];

$query_characters = "
    SELECT hc.* FROM favoritos f
    JOIN historical_characters hc ON f.item_id = hc.id_character
    WHERE f.usuario_id = ? AND f.tipo_item = 'character'";
$stmt1 = $conn->prepare($query_characters);
$stmt1->bind_param("i", $usuario_id);
$stmt1->execute();
$fav_characters = $stmt1->get_result();

$query_funfacts = "
    SELECT ff.* FROM favoritos f
    JOIN funfacts ff ON f.item_id = ff.id_fact
    WHERE f.usuario_id = ? AND f.tipo_item = 'funfact'";
$stmt2 = $conn->prepare($query_funfacts);
$stmt2->bind_param("i", $usuario_id);
$stmt2->execute();
$fav_funfacts = $stmt2->get_result();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Favoritos</title>
    
    <link rel="stylesheet" href="styles/favoritos-style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css">
  <meta charset="UTF-8">
  <title>Favoritos</title>

  <link rel="stylesheet" href="styles/characters-style.css">
  <link rel="stylesheet" href="styles/funfacts-style.css">
  <link rel="stylesheet" href="styles/words.css">
 <link rel="stylesheet" href="styles/navbar.css">
  <link rel="stylesheet" href="styles/footer.css">

  <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
</head>
<body>

    <div class="back-navigation">
        <a href="index.php" class="btn-back">← Back to homepage</a>
    </div>

    <main class="favoritos-page">
        <section id="favoritos-container" class="cards-grid">
            
            <?php while ($char = $fav_characters->fetch_assoc()): ?>
                <div class="card" data-id="<?php echo $char['id_character']; ?>" data-tipo="character">
                    <img src="<?php echo $char['imagen']; ?>" alt="<?php echo $char['nombre']; ?>">
                    <h3><?php echo $char['nombre']; ?></h3>
                    <button class="btn-favorito activo">★</button>
                </div>
            <?php endwhile; ?>

            <?php while ($fact = $fav_funfacts->fetch_assoc()): ?>
                <div class="card" data-id="<?php echo $fact['id_fact']; ?>" data-tipo="funfact">
                    <h3><?php echo $fact['titulo']; ?></h3>
                    <button class="btn-favorito activo">★</button>
                </div>
            <?php endwhile; ?>

        </section>
    </main>

    <script src="JavaScript/favoritos.js?v=2"></script>

    <script>
    document.addEventListener("DOMContentLoaded", () => {
        const contenedor = document.getElementById('favoritos-container');

        if (contenedor) {
            contenedor.addEventListener('click', function(e) {
                const boton = e.target.closest('.btn-favorito');
                if (!boton) return;

                e.stopPropagation();
                
                const tarjeta = boton.closest('[data-id]');
                const itemId = tarjeta.dataset.id;
                const tipoItem = tarjeta.dataset.tipo;

                const formData = new FormData();
                formData.append('item_id', itemId);
                formData.append('tipo_item', tipoItem);

                fetch('php/guardar_favoritos.php', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'removed') {
                        tarjeta.style.opacity = '0';
                        tarjeta.style.transform = 'scale(0.9)';
                        tarjeta.style.transition = 'all 0.3s ease';

                        setTimeout(() => {
                            tarjeta.remove();
                            
                            const tarjetasRestantes = contenedor.querySelectorAll('.card');
                            if (tarjetasRestantes.length === 0) {
                                contenedor.innerHTML = `
                                    <div class="no-favorites" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                                        <p style="font-size: 1.2rem; color: #555;">You haven't saved any favorites yet. 🥺</p>
                                    </div>`;
                            }
                        }, 300);
                    }
                })
                .catch(err => console.error('Error:', err));
            });
        }
    });
    </script>
  <main class="favoritos-page">
      <section id="favoritos-container" class="cards-grid">
          </section>
  </main>
  
  <script src="JavaScript/navbar.js"></script>
  <script src="favoritos.js?v=2"></script>
</body>
</html>