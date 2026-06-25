<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register GuanaTalk</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles/register.css">
    <link rel="stylesheet" href="styles/navbar.css">
</head>
<body>

    <?php include("components/navbar-simple.php"); ?>

    <div class="main-container">
       
        <div class="form-card">
            <div class="form-card-header">
                <h2>GuanaTalk Registration</h2>
                <p>Únete a la comunidad global más chiva de El Salvador | Join the coolest global community in El Salvador</p>
            </div>

            <form class="forms-body" action="php/register.php" method="POST">
                <div class="form-grid">

                    <div class="form-group-container">
                        <div class="icon-column">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="input-column">
                            <label>Nombre Completo</label>
                            <input type="text" name="nombre" placeholder="Ej. Juan Pérez" required>
                        </div>
                    </div>

                    <div class="form-group-container">
                        <div class="icon-column">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="input-column">
                            <label>Correo Electrónico</label>
                            <input type="email" name="email" placeholder="correo@ejemplo.com" required>
                        </div>
                    </div>

                    <div class="form-group-container">
                        <div class="icon-column">
                            <i class="fa-solid fa-lock"></i>
                        </div>
                        <div class="input-column">
                            <label>Contraseña</label>
                            <input type="password" name="password" placeholder="Crea una contraseña" required>
                        </div>
                    </div>

                    <div class="form-group-container">
                        <div class="icon-column">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <div class="input-column">
                            <label>Confirmar Contraseña</label>
                            <input type="password" name="confirm_password" placeholder="Repite tu contraseña" required>
                        </div>
                    </div>

                    <div class="form-group-container full-width-field">
                        <div class="icon-column">
                            <i class="fa-solid fa-earth-americas"></i>
                        </div>
                        <div class="input-column">
                            <label>Nacionalidad</label>
                            <select name="nacionalidad" class="select-field" required>
                                <option value="" disabled selected>Selecciona tu nacionalidad</option>
                                <option value="Salvadoreño">🇸🇻 Salvadoreño</option>
                                <option value="Extranjero">🌍 Extranjero</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div class="text-center project-action">
                    <button class="register-btn" type="submit">
                        Registrarme Ahora <i class="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                </div>
            </form>
        </div>

        <div class="fun-fact-card">
            <div class="fun-left">
                <div class="megaphone-icon-box">
                    <i class="fa-solid fa-bullhorn"></i>
                </div>
                <div class="fun-text">
                    <span class="badge-fact">Fun Fact</span>
                    <p>We’re growing global community! Join and meet others.</p>
                </div>
            </div>
            <i class="fa-solid fa-chevron-right arrow-detail"></i>
        </div>

    </div>

</body>
</html>