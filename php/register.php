<?php 
    include("conexion.php"); 

    if ($_SERVER["REQUEST_METHOD"] == "POST") { 
        if ($_POST['password'] !== $_POST['confirm_password']) {
            die("Error: Las contraseñas no coinciden.");
        }

        $nombre = $_POST['nombre']; 
        $email = $_POST['email']; 
        $nacionalidad = $_POST['nacionalidad']; 
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT); 

        $sql = "INSERT INTO usuarios (nombre, email, nacionalidad, password) VALUES (?, ?, ?, ?)"; 
        
        $stmt = $conn->prepare($sql); 
        
        if ($stmt) {
            $stmt->bind_param("ssss", $nombre, $email, $nacionalidad, $password); 

            if ($stmt->execute()) { 
                echo "¡Usuario registrado correctamente en GuanaTalk!"; 
               
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