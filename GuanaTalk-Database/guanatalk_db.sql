-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-06-2026 a las 22:55:34
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `guanatalk_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leyendas`
--

CREATE TABLE `leyendas` (
  `legendsID` int(11) NOT NULL,
  `Titulo` varchar(100) NOT NULL,
  `Descripcion` text NOT NULL,
  `Imagen` varchar(100) NOT NULL,
  `Descripcion_larga` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `leyendas`
--

INSERT INTO `leyendas` (`legendsID`, `Titulo`, `Descripcion`, `Imagen`, `Descripcion_larga`) VALUES
(3, 'La Siguanaba', ' A ghostly woman who appears near rivers at night\r\n                to lure men with her beauty, only to reveal a terrifying\r\n                face when they approach.', 'img/Siguanaba.png', 'La Siguanaba is a spectral woman from Salvadoran folklore\r\n                    who appears at night near rivers or lonely paths.\r\n                    She is said to lure men with her beauty, often appearing\r\n                    as a stunning young woman from afar. However, when they\r\n                    approach, her face transforms into something horrifying—\r\n                    sometimes described as a skull, a horse\'s face, or a\r\n                    monstrous visage.\r\n According to legend, she was once a woman cursed by the\r\n                    gods for her deceitful and immoral behavior, condemned\r\n                    to wander eternally and frighten those who fall for her\r\n                    illusion. Her story serves both as a cautionary tale about\r\n                    temptation and as a chilling reminder of the supernatural\r\n                    presence believed to haunt the Salvadoran countryside.'),
(4, 'El Cipitio', 'A mischievous boy with a straw hat who loves eating corn and playing tricks on people;\r\n                he symbolizes innocence and folklore humor.', 'img/Cipitio.png', '  El Cipitío is a mischievous boy from Salvadoran folklore who is closely connected to nature and rural life.\r\n                    As shown in the image, El Cipitío is often depicted wearing a large straw hat and enjoying simple pleasures like eating corn, which represents his humble and traditional roots.\r\n                    He spends his time wandering through fields, forests, and villages, where he plays harmless tricks on people, especially to surprise or confuse them.\r\n                    Even though El Cipitío is known for being playful and sometimes bothersome, El Cipitío is not dangerous or evil. Instead, El Cipitío represents the innocent side of mischief,\r\n                    like the curiosity and humor of a child who does not fully understand consequences.\r\n                    The surrounding natural elements in the image highlight how El Cipitío belongs to the land and is part of the cultural traditions passed down through generations.\r\n                 Additionally, El Cipitío is often associated with eternal childhood, meaning El Cipitío never grows up and remains forever in this stage of playful innocence.\r\n                    This idea reflects both a punishment in the legend and a symbol of joy and freedom. \r\n                    The smile, the corn, and the relaxed posture in the image reinforce the idea of a carefree and lively character.\r\n'),
(5, 'La Carreta Chillona', 'A haunted cart that roams the streets at night,\r\n                screeching loudly as a warning of death or misfortune\r\n                approaching.\r\n', 'img/Carreta.png', ' La Carreta Chillona is a well-known legend from Salvadoran folklore about a mysterious and frightening cart that travels through villages and countryside paths at night.\r\n                    The cart is usually described as old and wooden, making a loud, eerie squeaking sound as it moves, even though no animals or people are seen pulling it.\r\n                    In a setting similar to the one suggested by the image—natural, rural, and traditional—the cart would pass near small homes, dirt roads, and fields under the darkness of night.\r\n                     People say that hearing the sound of the cart is a bad omen, often connected to death, punishment, or the presence of spirits.\r\n\r\n According to the legend, anyone who sees the cart may witness terrifying things, such as skulls, bones, or supernatural beings.\r\n                     The cart is sometimes said to be collecting souls or carrying the consequences of wrongdoing.\r\n                      This contrasts with the peaceful countryside setting, turning a familiar environment into something frightening.\r\n                    Even though the environment resembles a calm and simple rural life—like the one shown in the image with plants, food, and a village house—the legend transforms this peaceful place into a space of mystery and fear at night.\r\n                     It reflects how folklore can give deeper meaning to everyday surroundings.'),
(6, 'La Flor de Amate', 'It is a flower that falls at midnight, and it is said that whoever manages to catch it will have wealth, but will have to fight the devil who is the owner of that flower.', 'img/Flor.png', 'The Legend of the Amate Flower is a famous Salvadoran myth about a mysterious tree that hides its flowers inside its fruit, giving rise to a supernatural tale. According to folklore, a beautiful, glowing white flower blooms at the very top of the Amate tree exactly at midnight. Because this magical flower belongs to the Devil, anyone attempting to catch it must stand beneath the branches and endure a terrifying ordeal, facing horrific illusions, howling winds, and aggressive spirits sent to scare them away. To succeed, the brave soul must catch the falling blossom in a white handkerchief before it touches the ground. Those who survive the terrors and secure the flower are rewarded with infinite wealth, absolute luck, and lifelong happiness, though Salvadoran elders often tell the story as a cautionary tale about the dangers of greed and seeking easy fortunes.'),
(7, 'La Cuyancúa', 'The Cuyancúa is a mythical Salvadoran creature, half pig and half snake, that announces the rain and lives in the rivers and streams of Izalco and its surroundings.', 'img/Cuyancua.png', 'They say that at dusk, north of Izalco, a very terrifying cawing or screeching could be heard, followed by strong underground tremors, which threw the families in the Ladino and indigenous neighborhoods into panic. Because of this, the locals would lock themselves in their houses very early. This sound is mainly heard around rivers and streams. This creature drags itself to look for food and usually hides in the canals of Izalco, Caluco, Nahuilingo, and San Ramón.\r\n\r\nThose who hear it pray to God, adopt a peaceful attitude, and close their eyes, thinking about what the animal is announcing: storms, strong thunderstorms, floods. People who stayed up late claimed to have seen this feared animal face to face, which impacted them so much that they fainted and were rendered speechless.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sub_tradiciones`
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
-- Volcado de datos para la tabla `sub_tradiciones`
--

INSERT INTO `sub_tradiciones` (`id`, `tradicion_id`, `nombre`, `fecha`, `descripcion`, `imagen`) VALUES
(1, 1, 'Fiestas de San Miguel', 'September 28, 2023', 'Known for its vibrant and energetic celebrations, the San Miguel Carnival is a major highlight, featuring a multi-day event with music and parades.', 'fiestas-san-miguel.png.png'),
(2, 1, 'Fiestas de Santa Ana', 'July 26, 2023', 'Dedicated to Saint Anne, these celebrations are the patronal festivals of Santa Ana, featuring various religious and culture activities.', 'fiestas-santa-ana.png.png'),
(3, 1, 'Fiestas de San Vicente', 'July 26, 2023', 'Dedicated to Saint Anne, these celebrations are the patronal festivals of Santa Ana, featuring various religious and culture activities.', 'fiestas-san-vicente.png.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tradiciones`
--

CREATE TABLE `tradiciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `color_clase` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tradiciones`
--

INSERT INTO `tradiciones` (`id`, `titulo`, `imagen`, `color_clase`) VALUES
(1, 'Fiestas Patronales', 'fiestas-patronales.png.png', 'card-light-green'),
(2, 'Folklore Dances', 'folklore-dances.png.png', 'card-dark-green'),
(3, 'Traditional Games', 'traditional-games.png', 'card-light-green'),
(4, 'Unique Celebrations', 'unique-celebrations.png.png', 'card-dark-green');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
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
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuarioID`, `nombre`, `email`, `nacionalidad`, `password`, `rol`, `fecha_registro`) VALUES
(1, 'Carlos Romero', 'carlos.romero2027@adoc.superate.org.sv', 'Salvadoreño', '$2y$10$SUeAImeoLw03hDLgUBz2d.i7IN0RwLJak7EJokOxfoL4uO1iCXwZW', 'usuario', '2026-05-12 15:47:55'),
(2, 'Carlos Romero', '6369637@clases.edu.sv', 'Salvadoreño', '$2y$10$94KrbeFDNivQg7Bb72rmAeXG4UXfBa457AolRFjv2UfbgxV8kL9oS', 'usuario', '2026-05-13 16:14:48'),
(6, 'Carlos Romero', '6369637e@clases.edu.sv', 'Salvadoreño', '$2y$10$nCwo30w/D9XuJFkDGsVFxOXPROoQGSVkx3p3/ZGjSByUrclyUvjlu', 'usuario', '2026-05-17 04:35:36'),
(7, 'Carlos Romero', '6369638@clases.edu.sv', 'Extranjero', '$2y$10$/7UqNW/XUsY3XIcyrQR9deRsj4M3U6puy1flkymb8p6zg4zx/BZSW', 'usuario', '2026-05-17 05:37:29'),
(8, 'Katherine Zelaya', 'katherine.zelaya2027@adoc.superate.org.sv', 'Salvadoreño', '$2y$10$Nax0jp4WSDJMLdYfT81jfetQLh32wrtOKqD5Cnug8M2SUz0.XL8lu', 'usuario', '2026-05-28 22:01:12'),
(9, 'Carlos Romero', 'rabis@gmail.com', 'Extranjero', '$2y$10$XwrJ3NIEAN.svlMBHewpw.wUyvpEUrypxrBbRta2ZYBpNy0zHLGv.', 'usuario', '2026-06-04 19:51:53'),
(10, 'Elizabeth Chavez', 'katherinezelaya1408@gmail.com', 'Extranjero', '$2y$10$6Ok5DgGLmT1/CjvM2mUm7.AMlmM92HdZc8DLg9e3cL2IOidpSZuNC', 'usuario', '2026-06-05 03:14:04'),
(11, 'katherine chavez', 'katherinechavez@gmail.com', 'Salvadoreño', '$2y$10$BKvOodpvX0Spy9gj/f8cnutC.8P.VYqyr2z9j3kPd/GcSrt5g6VZO', 'usuario', '2026-06-05 03:57:34');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `leyendas`
--
ALTER TABLE `leyendas`
  ADD PRIMARY KEY (`legendsID`);

--
-- Indices de la tabla `sub_tradiciones`
--
ALTER TABLE `sub_tradiciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tradicion_id` (`tradicion_id`);

--
-- Indices de la tabla `tradiciones`
--
ALTER TABLE `tradiciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuarioID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `leyendas`
--
ALTER TABLE `leyendas`
  MODIFY `legendsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `sub_tradiciones`
--
ALTER TABLE `sub_tradiciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tradiciones`
--
ALTER TABLE `tradiciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuarioID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `sub_tradiciones`
--
ALTER TABLE `sub_tradiciones`
  ADD CONSTRAINT `sub_tradiciones_ibfk_1` FOREIGN KEY (`tradicion_id`) REFERENCES `tradiciones` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
