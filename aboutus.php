<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>

    <link rel="stylesheet" href="styles/about us-style.css">
    <link rel="stylesheet" href="styles/navbar.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<?php include("components/navbar.php"); ?>

</body>
   
    <section class="about-section">

        <h1>About Us</h1>

        <p class="about-intro">
        </p>

        <div id="aboutCarousel" class="carousel slide">

            <div class="carousel-inner">

          
                <div class="carousel-item active">

                    <div class="about-card">

                        <div class="about-text">

                            <h2>Who Develops <span>GuanaTalk</span>?</h2>

                            <p>
                                GuanaTalk is developed by a team of six Salvadoran
                                students who want to share their country's culture,
                                traditions, and language with the world.
                            </p>

                        </div>

                        <div class="about-image">
                            <img src="img/GuanaTeam.png" alt="Developers">
                        </div>

                    </div>

                </div>

                
                <div class="carousel-item">

                    <div class="about-card">

                        <div class="about-text">

                            <h2>Our <span>Mission</span></h2>

                            <p>
                                At GuanaTalk, our mission is to help travelers and visitors understand Salvadoran culture before and during their journey. Through interactive learning experiences, local expressions, traditions, gastronomy, and cultural insights, we aim to create meaningful connections between people and promote a deeper appreciation of El Salvador's identity.
                            </p>

                        </div>

                        <div class="about-image">
                            <img src="img/mision.png" alt="Mission">
                        </div>

                    </div>

                </div>

               
                <div class="carousel-item">

                    <div class="about-card">

                        <div class="about-text">

                            <h2>Our <span>Vision</span></h2>

                            <p>
                                Our vision is to make GuanaTalk a trusted guide for anyone interested in learning about El Salvador and its rich cultural heritage.
                            </p>

                        </div>

                        <div class="about-image">
                            <img src="vision.png" alt="Vision">
                        </div>

                    </div>

                </div>

            </div>

            <button class="carousel-control-prev"
                    type="button"
                    data-bs-target="#aboutCarousel"
                    data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next"
                    type="button"
                    data-bs-target="#aboutCarousel"
                    data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>

        </div>

    </section>

<div class="colors-section">

    <h2>Our color palette</h2>
     <span>At GunaTalk we use colors inspired of our beautiful country!.</span>

    <div class="colors-container">


        <div class="color-card">
            <div class="color-box color5"></div>
            <h3>🌊 Azul Bahía</h3>
            <span>The beaches of El Tunco and El Zonte.</span>
        </div>

        <div class="color-card">
            <div class="color-box color2"></div>
            <h3>🌿 Verde Maquilishuat</h3>
            <span>Inspired by El Salvador's national tree.</span>
        </div>

        <div class="color-card">
            <div class="color-box color7"></div>
            <h3>🍃 Verde Café de Montaña</h3>
            <span>The coffee farms of Apaneca and Ilamatepec.</span>
        </div>

        <div class="color-card">
            <div class="color-box color4"></div>
            <h3>🌺 Rosa Maquilishuat</h3>
            <span>Inspired by El Salvador's national flower.</span>
        </div>

        <div class="color-card">
            <div class="color-box color3"></div>
            <h3>🏔️ Coral volcánico</h3>
            <span>Light sand and volcanic landscapes.</span>
        </div>

        <div class="color-card">
            <div class="color-box color1"></div>
            <h3>☀️ Oro Pipil</h3>
            <span>Indigenous crafts and cultural heritage.</span>
        </div>

    </div>

</div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
 <script src="JavaScript/navbar.js"></script>

</body>
</html>