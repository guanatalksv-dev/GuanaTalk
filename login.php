<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuanaTalk - Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles/login.css">
    <link rel="stylesheet" href="styles/navbar.css">
</head>
<body>

    <?php include("components/navbar-simple.php"); ?>
 
 
    <div class="main-container">
       
        <div class="form-card">
            <div class="form-card-header">
                <h2>GuanaTalk Login</h2>
                <p>Start Your Journey</p>
            </div>
 
            <form class="forms-body" action="php/login.php" method="POST">
                <div class="form-grid-login">
 
                    <div class="form-group-container">
                        <div class="icon-column">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="input-column">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Enter your email" required>
                        </div>
                    </div>
 
                    <div class="form-group-container">
                        <div class="icon-column">
                            <i class="fa-solid fa-lock"></i>
                        </div>
                        <div class="input-column">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter your password" required>
                        </div>
                    </div>
 
                </div>

                <div class="form-options-custom">
                    <label class="remember-me">
                        <input type="checkbox" name="remember"> Remember Me
                    </label>
                    <a href="#" class="forgot-pass">Forgot Password?</a>
                </div>
 
                <div class="text-center project-action">
                    <button class="register-btn" type="submit">
                        Login <i class="fa-solid fa-arrow-right ms-2"></i>
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
                    <p>Did you know the marble game is known in El Salvador as "chibolas"?</p>
                </div>
            </div>
            <i class="fa-solid fa-chevron-right arrow-detail"></i>
        </div>
 
    </div>
 
</body>
</html>