-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2026 at 09:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guanatalk_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `folklore_dances`
--

CREATE TABLE `folklore_dances` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `folklore_dances`
--

INSERT INTO `folklore_dances` (`id`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Danza del Venado', 'It is a traditional dance that reenacts the ritual hunting of a deer, symbolizing the ancestral bond between humans and nature.', 'danza-venado.png'),
(2, 'Adentro Cojutepeque', 'The song is a tribute to the city of Cojutepeque in the department of Cuscatlán. It captures the joyful spirit of its local festivities and the pride of its people.', 'adentro-cojutepeque.png'),
(3, 'Torito Pinto', 'El Torito Pinto is a traditional Salvadoran dance mimicking a bullfight. It features a dancer in a bull frame performing to rhythmic music during festive celebrations.', 'torito-pinto.png');

-- --------------------------------------------------------

--
-- Table structure for table `funfacts`
--

CREATE TABLE `funfacts` (
  `id_fact` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) DEFAULT 'img/default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `funfacts`
--

INSERT INTO `funfacts` (`id_fact`, `titulo`, `descripcion`, `imagen`) VALUES
(1, 'Bandera', 'El Salvador’s flag was adopted in 1912 and is inspired by the former Central American Federation. Its blue and white colors represent the sky and oceans, while the five volcanoes in the coat of arms symbolize the nations of Central America.', 'img/bandera.png'),
(3, 'Ave Nacional', 'The torogoz is El Salvador’s national bird. Its bright blue, green, and turquoise feathers make it easy to recognize. It also represents family unity because both the male and female work together to build and protect their nest and care for their young. For this reason, it is a symbol of both freedom and cooperation.', 'img/ave-nacional.png'),
(4, 'Flor Nacional', 'El Salvador’s national flower. Besides its beauty, it is valued because its blossoms are edible and are used in traditional Salvadoran cuisine. It represents cultural identity, simplicity, and the strong connection between Salvadorans and nature.', 'img/flor-nacional.png'),
(5, 'Escudo Nacional', 'El Salvador’s national coat of arms features five volcanoes representing the five nations of Central America. It also includes a rainbow, symbolizing peace, and the motto “God, Union, Liberty,” reflecting the nation’s values and identity.', 'img/escudo.png'),
(6, 'Árbol Nacional', 'El Salvador’s national tree. During the dry season, its pink and purple flowers cover its branches, creating colorful landscapes. This tree symbolizes natural beauty, strength, and Salvadoran national pride.', 'img/arbol-nacional.png'),
(7, 'Platillo Típico', 'Pupusas are El Salvador’s national dish and an important part of its culture. They are made from corn or rice dough and can be filled with cheese, beans, pork, or other ingredients. They are so popular that National Pupusa Day is celebrated every second Sunday of November.', 'img/pupusas.png'),
(8, 'Traje típico', 'The traditional dress of El Salvador reflects the traditions and joy of its people. Women typically wear dresses in vibrant colors such as red, blue, white, yellow, and green, adorned with embroidery and ruffles, while men wear white clothing and hats. These outfits are worn during festivals and folk dances to celebrate Salvadoran cultural identity.', 'img/traje-tipico.png'),
(9, 'Palacio Nacional', 'The National Palace is one of El Salvador’s most important historic buildings. Located in San Salvador, it was inaugurated in 1911 and served as the seat of government for many years. Its architecture combines elegance and historical significance, making it a symbol of Salvadoran cultural heritage.', 'img/palacio-nacional.png');

-- --------------------------------------------------------

--
-- Table structure for table `historical_characters`
--

CREATE TABLE `historical_characters` (
  `id_character` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `historical_characters`
--

INSERT INTO `historical_characters` (`id_character`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Roque Dalton', 'He was one of the most important poets and writers in El Salvador and Latin America. His work combined poetry, essays, and narrative with a profound reflection on the social and political realities of his time. He studied in several countries and actively participated in social movements. Among his most renowned works are Taberna y otros lugares and Poemas clandestinos.', 'img/roque-dalton.png'),
(2, 'Salarrué', 'Salarrué, pseudonym of Salvador Salazar Arrué, was a prominent Salvadoran writer, painter, and diplomat. He is especially known for his work Cuentos de barro, a collection of stories that portrays rural life and Salvadoran traditions with great sensitivity and linguistic richness. In addition to his literary work, he developed a significant artistic career in painting. His work helped strengthen El Salvador\'s cultural identity and continues to be studied and admired today.', 'img/Salarrue.png'),
(3, 'Claudia Lars', 'Her real name was Margarita del Carmen Brannon Vega, and she is considered one of El Salvador\'s most important poets. Her poetry addresses themes such as love, nature, motherhood, and spirituality. She published numerous works that received recognition both within and outside the country. Her elegant and emotive language made her one of the most prominent voices in 20th-century Central American literature.', 'img/ClaudiaLars.png'),
(4, 'Prudencia Ayala', 'She was a writer, journalist, and pioneer of women\'s rights in El Salvador. In 1930, she attempted to run for president of the Republic, even though the laws of the time did not allow women to vote or participate in politics. Her candidacy became a symbol of the struggle for gender equality. In addition to her political activism, she wrote articles and books in which she defended human rights and social justice.', 'img/prudencia-ayala.png'),
(5, 'Fernando Llort', 'He was a renowned Salvadoran painter, sculptor, and designer. He is famous for creating a unique artistic style inspired by daily life, nature, and the traditions of El Salvador. His works are characterized by vibrant colors, simple figures, and messages of peace. His work had a significant influence on the country\'s cultural and tourism development, especially in the city of La Palma, where he fostered a major artisan movement.', 'img/fernando-llort.png'),
(6, 'Alfredo Espino', 'He is considered one of El Salvador\'s most representative poets. Although his life was short, he left a profound mark on national literature thanks to his work, Jícaras tristes. His poems extol the beauty of Salvadoran landscapes, nature, customs, and national identity. His simple and musical style has ensured that his work continues to be read by generations of students and poetry lovers.', 'img/alfredo-espino.png'),
(7, 'Jorge \"Mágico\" González', 'He is considered the best footballer in the history of El Salvador. He stood out for his extraordinary technical skill, creativity, and ability to make spectacular plays. He spent much of his career in Spain, especially with Cádiz CF, where he became a legend. His talent was admired internationally, and many consider him one of the most brilliant players Latin America has ever produced.', 'img/jorge-magico.png'),
(8, 'Manuela Antonia Arce', 'She was a prominent Salvadoran patriot linked to the Central American independence movements during the 19th century. She is recognized for her support of the cause of freedom and for her participation in activities that contributed to strengthening the ideals of independence. Her example represents the role that many women played in building the Salvadoran nation, although for a long time their contributions received little visibility in official history.', 'img/manuela-antonia-arce.png'),
(9, 'María Felipa Aranzamendi', 'She was an educator and promoter of academic development in El Salvador. She dedicated much of her life to teaching and training new generations. Her work contributed to strengthening national education at a time when access to instruction was limited for a large part of the population. She is remembered as a figure committed to the intellectual and social progress of the country.', 'img/maria-felipa.png'),
(10, 'María Isabel Arrieta Gálvez', 'She was a prominent Salvadoran model, diplomat, and beauty queen. She achieved international recognition by winning the 1955 Miss Universe pageant, becoming the first and only Salvadoran to hold that title. After her reign, she represented the country in various diplomatic and cultural capacities. Her victory placed El Salvador on the international stage and made her a symbol of national pride.', 'img/maribel-arrieta.png');

-- --------------------------------------------------------

--
-- Table structure for table `leyendas`
--

CREATE TABLE `leyendas` (
  `legendsID` int(11) NOT NULL,
  `Titulo` varchar(100) NOT NULL,
  `Descripcion` text NOT NULL,
  `Imagen` varchar(100) NOT NULL,
  `Descripcion_larga` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leyendas`
--

INSERT INTO `leyendas` (`legendsID`, `Titulo`, `Descripcion`, `Imagen`, `Descripcion_larga`) VALUES
(3, 'La Siguanaba', ' A ghostly woman who appears near rivers at night\r\n                to lure men with her beauty, only to reveal a terrifying\r\n                face when they approach.', 'img/LaSiguanaba2.png', 'La Siguanaba is a spectral woman from Salvadoran folklore\r\n                    who appears at night near rivers or lonely paths.\r\n                    She is said to lure men with her beauty, often appearing\r\n                    as a stunning young woman from afar. However, when they\r\n                    approach, her face transforms into something horrifying—\r\n                    sometimes described as a skull, a horse\'s face, or a\r\n                    monstrous visage.\r\n According to legend, she was once a woman cursed by the\r\n                    gods for her deceitful and immoral behavior, condemned\r\n                    to wander eternally and frighten those who fall for her\r\n                    illusion. Her story serves both as a cautionary tale about\r\n                    temptation and as a chilling reminder of the supernatural\r\n                    presence believed to haunt the Salvadoran countryside.'),
(4, 'El Cipitio', 'A mischievous boy with a straw hat who loves eating corn and playing tricks on people;\r\n                he symbolizes innocence and folklore humor.', 'img/El Cipitio.png', '  El Cipitío is a mischievous boy from Salvadoran folklore who is closely connected to nature and rural life.\r\n                    As shown in the image, El Cipitío is often depicted wearing a large straw hat and enjoying simple pleasures like eating corn, which represents his humble and traditional roots.\r\n                    He spends his time wandering through fields, forests, and villages, where he plays harmless tricks on people, especially to surprise or confuse them.\r\n                    Even though El Cipitío is known for being playful and sometimes bothersome, El Cipitío is not dangerous or evil. Instead, El Cipitío represents the innocent side of mischief,\r\n                    like the curiosity and humor of a child who does not fully understand consequences.\r\n                    The surrounding natural elements in the image highlight how El Cipitío belongs to the land and is part of the cultural traditions passed down through generations.\r\n                 Additionally, El Cipitío is often associated with eternal childhood, meaning El Cipitío never grows up and remains forever in this stage of playful innocence.\r\n                    This idea reflects both a punishment in the legend and a symbol of joy and freedom. \r\n                    The smile, the corn, and the relaxed posture in the image reinforce the idea of a carefree and lively character.\r\n'),
(5, 'La Carreta Chillona', 'A haunted cart that roams the streets at night,\r\n                screeching loudly as a warning of death or misfortune\r\n                approaching.\r\n', 'img/La Carreta Chillona.png', ' La Carreta Chillona is a well-known legend from Salvadoran folklore about a mysterious and frightening cart that travels through villages and countryside paths at night.\r\n                    The cart is usually described as old and wooden, making a loud, eerie squeaking sound as it moves, even though no animals or people are seen pulling it.\r\n                    In a setting similar to the one suggested by the image—natural, rural, and traditional—the cart would pass near small homes, dirt roads, and fields under the darkness of night.\r\n                     People say that hearing the sound of the cart is a bad omen, often connected to death, punishment, or the presence of spirits.\r\n\r\n According to the legend, anyone who sees the cart may witness terrifying things, such as skulls, bones, or supernatural beings.\r\n                     The cart is sometimes said to be collecting souls or carrying the consequences of wrongdoing.\r\n                      This contrasts with the peaceful countryside setting, turning a familiar environment into something frightening.\r\n                    Even though the environment resembles a calm and simple rural life—like the one shown in the image with plants, food, and a village house—the legend transforms this peaceful place into a space of mystery and fear at night.\r\n                     It reflects how folklore can give deeper meaning to everyday surroundings.'),
(6, 'La Flor de Amate', 'It is a flower that falls at midnight, and it is said that whoever manages to catch it will have wealth, but will have to fight the devil who is the owner of that flower.', 'img/flordeamate.jpg', 'The Legend of the Amate Flower is a famous Salvadoran myth about a mysterious tree that hides its flowers inside its fruit, giving rise to a supernatural tale. According to folklore, a beautiful, glowing white flower blooms at the very top of the Amate tree exactly at midnight. Because this magical flower belongs to the Devil, anyone attempting to catch it must stand beneath the branches and endure a terrifying ordeal, facing horrific illusions, howling winds, and aggressive spirits sent to scare them away. To succeed, the brave soul must catch the falling blossom in a white handkerchief before it touches the ground. Those who survive the terrors and secure the flower are rewarded with infinite wealth, absolute luck, and lifelong happiness, though Salvadoran elders often tell the story as a cautionary tale about the dangers of greed and seeking easy fortunes.');

-- --------------------------------------------------------

--
-- Table structure for table `sub_tradiciones`
--

CREATE TABLE `sub_tradiciones` (
  `id` int(11) NOT NULL,
  `tradicion_id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_tradiciones`
--

INSERT INTO `sub_tradiciones` (`id`, `tradicion_id`, `nombre`, `fecha`, `descripcion`, `imagen`) VALUES
(1, 1, 'Fiestas de San Miguel', 'September 28, 2023', 'Known for its vibrant and energetic celebrations, the San Miguel Carnival is a major highlight, featuring a multi-day event with music and parades.', 'fiestas-san-miguel.png.png'),
(2, 1, 'Fiestas de Santa Ana', 'July 26, 2023', 'Dedicated to Saint Anne, these celebrations are the patronal festivals of Santa Ana, featuring various religious and culture activities.', 'fiestas-santa-ana.png.png'),
(3, 1, 'Fiestas de San Vicente', 'July 26, 2023', 'Dedicated to Saint Anne, these celebrations are the patronal festivals of Santa Ana, featuring various religious and culture activities.', 'fiestas-san-vicente.png.png');

-- --------------------------------------------------------

--
-- Table structure for table `tradiciones`
--

CREATE TABLE `tradiciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `color_clase` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tradiciones`
--

INSERT INTO `tradiciones` (`id`, `titulo`, `imagen`, `color_clase`) VALUES
(1, 'Fiestas Patronales', 'fiestas-patronales.png.png', 'card-light-green'),
(2, 'Folklore Dances', 'folklore-dances.png.png', 'card-dark-green'),
(3, 'Traditional Games', 'traditional-games.png', 'card-light-green'),
(4, 'Unique Celebrations', 'unique-celebrations.png.png', 'card-dark-green');

-- --------------------------------------------------------

--
-- Table structure for table `traditional_games`
--

CREATE TABLE `traditional_games` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `paso1` text NOT NULL,
  `paso2` text NOT NULL,
  `paso3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `traditional_games`
--

INSERT INTO `traditional_games` (`id`, `nombre`, `imagen`, `paso1`, `paso2`, `paso3`) VALUES
(1, 'El Trompo', 'trompor.png', '1. Wind: Wrap the string tightly from the tip upward.', '2. Throw: Hold the end of the string and toss it toward the ground.', '3. Pull: Tug the string back quickly to make it spin.'),
(2, 'El Capirucho', 'capirucho.png', '1. Grip: Hold the wooden handle with your dominant hand.', '2. Swing: Let the cup hang and toss it upward with a smooth motion.', '3. Catch: Align the tip of the stick to catch the cup in mid-air.'),
(3, 'Chibolas', 'chibolas.png', '1. Position: Place the marble on your bent index finger.', '2. Aim: Use your thumb to build tension and point at the target.', '3. Flick: Push with your thumb to launch the marble toward the others.'),
(4, 'Piscuchas', 'piscuchas.png', '1. Set up: Hold the string and have someone hold the kite downwind.', '2. Run: Run against the wind, releasing the string bit by bit.', '3. Maneuver: Tug the string gently to gain height and stability.');

-- --------------------------------------------------------

--
-- Table structure for table `unique_celebrations`
--

CREATE TABLE `unique_celebrations` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `unique_celebrations`
--

INSERT INTO `unique_celebrations` (`id`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Day of the Cross', 'A symbol of protection where decorated wooden crosses with fruit and flowers are placed in homes.', 'day-of-the-cross.png'),
(2, 'Fiesta de las Flores y Palmas', 'A unique celebration featuring stylized floral palm arrangements symbolizing peace and community.', 'flores-y-palmas.png'),
(3, 'Festival of Lanterns', 'A spectacular display of thousands of hand-crafted lanterns that transforms the city.', 'festival-of-lanterns.png');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `usuarioID` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nacionalidad` enum('Salvadoreño','Extranjero') NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` varchar(20) DEFAULT 'usuario',
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`usuarioID`, `nombre`, `email`, `nacionalidad`, `password`, `rol`, `fecha_registro`) VALUES
(1, 'Carlos Romero', 'carlos.romero2027@adoc.superate.org.sv', 'Salvadoreño', '$2y$10$SUeAImeoLw03hDLgUBz2d.i7IN0RwLJak7EJokOxfoL4uO1iCXwZW', 'usuario', '2026-05-12 15:47:55'),
(2, 'Carlos Romero', '6369637@clases.edu.sv', 'Salvadoreño', '$2y$10$94KrbeFDNivQg7Bb72rmAeXG4UXfBa457AolRFjv2UfbgxV8kL9oS', 'usuario', '2026-05-13 16:14:48'),
(6, 'Carlos Romero', '6369637e@clases.edu.sv', 'Salvadoreño', '$2y$10$nCwo30w/D9XuJFkDGsVFxOXPROoQGSVkx3p3/ZGjSByUrclyUvjlu', 'usuario', '2026-05-17 04:35:36'),
(7, 'Carlos Romero', '6369638@clases.edu.sv', 'Extranjero', '$2y$10$/7UqNW/XUsY3XIcyrQR9deRsj4M3U6puy1flkymb8p6zg4zx/BZSW', 'usuario', '2026-05-17 05:37:29'),
(8, 'Katherine Zelaya', 'katherine.zelaya2027@adoc.superate.org.sv', 'Salvadoreño', '$2y$10$Nax0jp4WSDJMLdYfT81jfetQLh32wrtOKqD5Cnug8M2SUz0.XL8lu', 'usuario', '2026-05-28 22:01:12'),
(9, 'Carlos Romero', 'rabis@gmail.com', 'Extranjero', '$2y$10$XwrJ3NIEAN.svlMBHewpw.wUyvpEUrypxrBbRta2ZYBpNy0zHLGv.', 'usuario', '2026-06-04 19:51:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `folklore_dances`
--
ALTER TABLE `folklore_dances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `funfacts`
--
ALTER TABLE `funfacts`
  ADD PRIMARY KEY (`id_fact`);

--
-- Indexes for table `historical_characters`
--
ALTER TABLE `historical_characters`
  ADD PRIMARY KEY (`id_character`);

--
-- Indexes for table `leyendas`
--
ALTER TABLE `leyendas`
  ADD PRIMARY KEY (`legendsID`);

--
-- Indexes for table `sub_tradiciones`
--
ALTER TABLE `sub_tradiciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tradicion_id` (`tradicion_id`);

--
-- Indexes for table `tradiciones`
--
ALTER TABLE `tradiciones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `traditional_games`
--
ALTER TABLE `traditional_games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unique_celebrations`
--
ALTER TABLE `unique_celebrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuarioID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `folklore_dances`
--
ALTER TABLE `folklore_dances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `funfacts`
--
ALTER TABLE `funfacts`
  MODIFY `id_fact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `historical_characters`
--
ALTER TABLE `historical_characters`
  MODIFY `id_character` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `leyendas`
--
ALTER TABLE `leyendas`
  MODIFY `legendsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sub_tradiciones`
--
ALTER TABLE `sub_tradiciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tradiciones`
--
ALTER TABLE `tradiciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `traditional_games`
--
ALTER TABLE `traditional_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `unique_celebrations`
--
ALTER TABLE `unique_celebrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuarioID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sub_tradiciones`
--
ALTER TABLE `sub_tradiciones`
  ADD CONSTRAINT `sub_tradiciones_ibfk_1` FOREIGN KEY (`tradicion_id`) REFERENCES `tradiciones` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
