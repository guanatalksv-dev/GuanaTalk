-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-06-2026 a las 21:38:16
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
-- Base de datos: `sistema_usuarios`
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
(3, 'La Siguanaba', ' A ghostly woman who appears near rivers at night\r\n                to lure men with her beauty, only to reveal a terrifying\r\n                face when they approach.', 'img/LaSiguanaba2.png', 'La Siguanaba is a spectral woman from Salvadoran folklore\r\n                    who appears at night near rivers or lonely paths.\r\n                    She is said to lure men with her beauty, often appearing\r\n                    as a stunning young woman from afar. However, when they\r\n                    approach, her face transforms into something horrifying—\r\n                    sometimes described as a skull, a horse\'s face, or a\r\n                    monstrous visage.\r\n According to legend, she was once a woman cursed by the\r\n                    gods for her deceitful and immoral behavior, condemned\r\n                    to wander eternally and frighten those who fall for her\r\n                    illusion. Her story serves both as a cautionary tale about\r\n                    temptation and as a chilling reminder of the supernatural\r\n                    presence believed to haunt the Salvadoran countryside.'),
(4, 'El Cipitio', 'A mischievous boy with a straw hat who loves eating corn and playing tricks on people;\r\n                he symbolizes innocence and folklore humor.', 'img/El Cipitio.png', '  El Cipitío is a mischievous boy from Salvadoran folklore who is closely connected to nature and rural life.\r\n                    As shown in the image, El Cipitío is often depicted wearing a large straw hat and enjoying simple pleasures like eating corn, which represents his humble and traditional roots.\r\n                    He spends his time wandering through fields, forests, and villages, where he plays harmless tricks on people, especially to surprise or confuse them.\r\n                    Even though El Cipitío is known for being playful and sometimes bothersome, El Cipitío is not dangerous or evil. Instead, El Cipitío represents the innocent side of mischief,\r\n                    like the curiosity and humor of a child who does not fully understand consequences.\r\n                    The surrounding natural elements in the image highlight how El Cipitío belongs to the land and is part of the cultural traditions passed down through generations.\r\n                 Additionally, El Cipitío is often associated with eternal childhood, meaning El Cipitío never grows up and remains forever in this stage of playful innocence.\r\n                    This idea reflects both a punishment in the legend and a symbol of joy and freedom. \r\n                    The smile, the corn, and the relaxed posture in the image reinforce the idea of a carefree and lively character.\r\n'),
(5, 'La Carreta Chillona', 'A haunted cart that roams the streets at night,\r\n                screeching loudly as a warning of death or misfortune\r\n                approaching.\r\n', 'img/La Carreta Chillona.png', ' La Carreta Chillona is a well-known legend from Salvadoran folklore about a mysterious and frightening cart that travels through villages and countryside paths at night.\r\n                    The cart is usually described as old and wooden, making a loud, eerie squeaking sound as it moves, even though no animals or people are seen pulling it.\r\n                    In a setting similar to the one suggested by the image—natural, rural, and traditional—the cart would pass near small homes, dirt roads, and fields under the darkness of night.\r\n                     People say that hearing the sound of the cart is a bad omen, often connected to death, punishment, or the presence of spirits.\r\n\r\n According to the legend, anyone who sees the cart may witness terrifying things, such as skulls, bones, or supernatural beings.\r\n                     The cart is sometimes said to be collecting souls or carrying the consequences of wrongdoing.\r\n                      This contrasts with the peaceful countryside setting, turning a familiar environment into something frightening.\r\n                    Even though the environment resembles a calm and simple rural life—like the one shown in the image with plants, food, and a village house—the legend transforms this peaceful place into a space of mystery and fear at night.\r\n                     It reflects how folklore can give deeper meaning to everyday surroundings.'),
(6, 'La Flor de Amate', 'It is a flower that falls at midnight, and it is said that whoever manages to catch it will have wealth, but will have to fight the devil who is the owner of that flower.', 'img/flordeamate.jpg', 'The Legend of the Amate Flower is a famous Salvadoran myth about a mysterious tree that hides its flowers inside its fruit, giving rise to a supernatural tale. According to folklore, a beautiful, glowing white flower blooms at the very top of the Amate tree exactly at midnight. Because this magical flower belongs to the Devil, anyone attempting to catch it must stand beneath the branches and endure a terrifying ordeal, facing horrific illusions, howling winds, and aggressive spirits sent to scare them away. To succeed, the brave soul must catch the falling blossom in a white handkerchief before it touches the ground. Those who survive the terrors and secure the flower are rewarded with infinite wealth, absolute luck, and lifelong happiness, though Salvadoran elders often tell the story as a cautionary tale about the dangers of greed and seeking easy fortunes.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `leyendas`
--
ALTER TABLE `leyendas`
  ADD PRIMARY KEY (`legendsID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `leyendas`
--
ALTER TABLE `leyendas`
  MODIFY `legendsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
