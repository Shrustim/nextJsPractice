-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Sep 19, 2022 at 02:10 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_software_updates`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(512) DEFAULT NULL,
  `password` varchar(512) DEFAULT NULL,
  `firstName` varchar(512) DEFAULT NULL,
  `lastName` varchar(512) DEFAULT NULL,
  `lastLoggedDttm` int(11) DEFAULT NULL,
  `role` varchar(512) DEFAULT 'user',
  `isActive` int(11) DEFAULT 1,
  `createdDttm` int(11) DEFAULT NULL,
  `updatedDttm` int(11) DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `updatedBy` int(11) DEFAULT NULL,
  `isDeleted` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `lastLoggedDttm`, `role`, `isActive`, `createdDttm`, `updatedDttm`, `createdBy`, `updatedBy`, `isDeleted`) VALUES
(1, 'shrushti@gmail.com', 'shrushti123!', 'shrushti', 'mane', NULL, 'user', 1, NULL, NULL, NULL, NULL, 0),
(2, 'snehal@gmail.com', 'snehal123!', 'snehal', 'patil', NULL, 'user', 1, NULL, NULL, NULL, NULL, 0),
(3, 'snehal1@gmail.com', 'snehal1123!', 'snehal1', 'patil1', NULL, 'user', 1, NULL, NULL, NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
