<?php 
    // Asegúrate de que conexion.php esté en la misma carpeta que este archivo (php/)
    include("conexion.php"); 

    if ($_SERVER["REQUEST_METHOD"] == "POST") { 
        // Validar que las contraseñas coincidan antes de procesar cualquier cosa
        if ($_POST['password'] !== $_POST['confirm_password']) {
            die("Error: Las contraseñas no coinciden.");
        }

        $nombre = $_POST['nombre']; 
        $email = $_POST['email']; 
        $nacionalidad = $_POST['nacionalidad']; // Capturamos la nacionalidad seleccionada
        
        // Encriptar la contraseña con hash seguro (Obligatorio para el inicio de sesión)
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT); 

        // Consulta SQL incluyendo el nuevo campo "nacionalidad" antes del password
        $sql = "INSERT INTO usuarios (nombre, email, nacionalidad, password) VALUES (?, ?, ?, ?)"; 
        
        $stmt = $conn->prepare($sql); 
        
        if ($stmt) {
            // Pasamos los 4 parámetros tipo string asignándoles "ssss"
            $stmt->bind_param("ssss", $nombre, $email, $nacionalidad, $password); 

            if ($stmt->execute()) { 
                echo "¡Usuario registrado correctamente en GuanaTalk!"; 
                // Redirección opcional automática tras 2 segundos hacia el login
                header("refresh:2;url=../login.html");
                exit();
            } else { 
                echo "Error al registrar en la base de datos: " . $stmt->error; 
            }
            $stmt->close();
        } else {
            echo "Error en la preparación de la consulta: " . $conn->error;
        }
    } 
    $conn->close();
?>