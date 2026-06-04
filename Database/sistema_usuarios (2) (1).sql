-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2026 at 06:53 PM
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
-- Database: `sistema_usuarios`
--

-- --------------------------------------------------------

--
-- Table structure for table `leyendas`
--

CREATE TABLE `leyendas` (
  `legendsID` int(11) NOT NULL,
  `Titulo` varchar(100) NOT NULL,
  `Descripcion` text NOT NULL,
  `Imagen` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leyendas`
--

INSERT INTO `leyendas` (`legendsID`, `Titulo`, `Descripcion`, `Imagen`) VALUES
(2, 'Flor de Amate', 'The legend of the Amate flower in El Salvador tells of a mysterious white blossom that appears only at midnight, visible only to children and the mute. Whoever captures it with a white handkerchief can gain love, wealth, and health—but must face the devil, who guards the flower.', 'flordeamate.jpg');

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
(8, 'Katherine Zelaya', 'katherine.zelaya2027@adoc.superate.org.sv', 'Salvadoreño', '$2y$10$Nax0jp4WSDJMLdYfT81jfetQLh32wrtOKqD5Cnug8M2SUz0.XL8lu', 'usuario', '2026-05-28 22:01:12');

--
-- Indexes for dumped tables
--

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
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuarioID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sub_tradiciones`
--
ALTER TABLE `sub_tradiciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tradiciones`
--
ALTER TABLE `tradiciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuarioID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
