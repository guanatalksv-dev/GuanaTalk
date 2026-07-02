<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <link rel="stylesheet" href="styles/about us-style.css">
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="styles/footer.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<?php include("components/navbar.php"); ?>



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
                            <img src="img/6 alumnos.png" alt="Developers">
                        </div>

                    </div>

                </div>

                
                <div class="carousel-item">

                    <div class="about-card">

                        <div class="about-text">

                            <h2>Our <span>Mission</span></h2>

                            <p>
                              GuanaTalk is a website created to preserve, teach and spread the expressions, idioms and typical words of El Salvador in a modern, interactive and accessible way for everyone.
                            </p>

                        </div>

                        <div class="about-image">
                            <img src="img/kathy.adri.png" alt="Mission">
                        </div>

                    </div>

                </div>

               
                <div class="carousel-item">

                    <div class="about-card">

                        <div class="about-text">

                            <h2>Our <span> values</span></h2>

                            <p>
                                <ul>
                                <li>Cultural identity: Promoting pride in Salvadoran language and traditions. </li>

                                <li>Education: Facilitate the learning of Salvadoran words and cultural facts.</li>

                                <li>Accessibility: Offering easy and interactive content for understanding and teaching.</li>
                            </ul>
                            </p>

                        </div>

                        <div class="about-image">
                            <img src="img/banderas.png" alt="Vision">
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
    <h3>🌲 Verde Volcánico</h3>
    <span>Inspired by the forests and green landscapes surrounding El Salvador's volcanoes.</span>
</div>

<div class="color-card">
    <div class="color-box color2"></div>
    <h3>🌊 Azul Pacífico</h3>
    <span>The vibrant blue of El Salvador's Pacific coast and tropical beaches.</span>
</div>

<div class="color-card">
    <div class="color-box color7"></div>
    <h3>💧 Azul Coatepeque</h3>
    <span>Inspired by the crystal waters of Lake Coatepeque.</span>
</div>

<div class="color-card">
    <div class="color-box color4"></div>
    <h3>🌅 Atardecer Salvadoreño</h3>
    <span>The warm orange tones seen during sunsets across the country.</span>
</div>

<div class="color-card">
    <div class="color-box color3"></div>
    <h3>🇸🇻 Azul Bandera</h3>
    <span>Inspired by the deep blue found in El Salvador's national flag.</span>
</div>

<div class="color-card">
    <div class="color-box color1"></div>
    <h3>🌽 Oro Maíz</h3>
    <span>Representing the corn fields that are part of Salvadoran culture and cuisine.</span>
</div>

       
    </div>

</div>


    <?php include("php/footer.php"); ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
 <script src="JavaScript/navbar.js"></script>
</body>
</html>