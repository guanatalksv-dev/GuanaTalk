<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>

    <link rel="stylesheet" href="styles/about us-style.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<body>

<?php include("nabvar.php"); ?>

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

                <!-- Slide 2 -->
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

                <!-- Slide 3 -->
                <div class="carousel-item">

                    <div class="about-card">

                        <div class="about-text">

                            <h2>Our <span>Vision</span></h2>

                            <p>
                                Our vision is to make GuanaTalk a trusted guide for anyone interested in learning about El Salvador and its rich cultural heritage.
                            </p>

                        </div>

                        <div class="about-image">
                            <img src="img/vision.png" alt="Vision">
                        </div>

                    </div>

                </div>

            </div>

            <!-- Controls -->
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


    <section class="colors-section">
    <h2>Our Brand Colors</h2>
    <p>
        These are the colors that represent GuanaTalk.
    </p>

    <div class="colors-container">

        <div class="color-card">
            <div class="color-box color1"></div>
            <h3>#B6D004</h3>
            <span>Main Green</span>
        </div>

        <div class="color-card">
            <div class="color-box color2"></div>
            <h3>#D4E55B</h3>
            <span>Light Green</span>
        </div>

        <div class="color-card">
            <div class="color-box color3"></div>
            <h3>#CA4B10</h3>
            <span>Orange</span>
        </div>

        <div class="color-card">
            <div class="color-box color4"></div>
            <h3>#F0D0B0</h3>
            <span>Beige</span>
        </div>

        <div class="color-card">
            <div class="color-box color5"></div>
            <h3>#07C5D8</h3>
            <span>Turquoise</span>
        </div>

        <div class="color-card">
            <div class="color-box color6"></div>
            <h3>#ACDBDF</h3>
            <span>Soft Blue</span>
        </div>

        <div class="color-card">
            <div class="color-box color7"></div>
            <h3>#0D2D00</h3>
            <span>Dark Green</span>
        </div>

        <div class="color-card">
            <div class="color-box color8"></div>
            <h3>#B4DFA2</h3>
            <span>Nature Green</span>
        </div>

        <div class="color-card">
            <div class="color-box color9"></div>
            <h3>#090A0B</h3>
            <span>Black</span>
        </div>

        <div class="color-card">
            <div class="color-box color10"></div>
            <h3>#B7DCFF</h3>
            <span>Sky Blue</span>
        </div>

        <div class="color-card">
            <div class="color-box color11"></div>
            <h3>#0285CE</h3>
            <span>Ocean Blue</span>
        </div>

        <div class="color-card">
            <div class="color-box color12"></div>
            <h3>#C4E9FF</h3>
            <span>Light Blue</span>
        </div>

    </div>
</section>




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
 <script src="JavaScript/navbar.js"></script>

</body>
</html>