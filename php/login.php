<?php
session_start();
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT usuarioID, nombre, email, nacionalidad, password FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($usuario = $result->fetch_assoc()) {
        
        if (password_verify($password, $usuario['password'])) {
            // Guardamos los datos en la sesión
            $_SESSION['usuario_id'] = $usuario['usuarioID'];
            $_SESSION['nombre'] = $usuario['nombre'];
            $_SESSION['email'] = $usuario['email'];
            $_SESSION['nacionalidad'] = $usuario['nacionalidad'];

    
            header("Location: ../index.php");
            exit(); 
        } else {
            echo "La contraseña no coincide.";
        }
    } else {
        echo "Este correo no está registrado.";
    }
}
?>