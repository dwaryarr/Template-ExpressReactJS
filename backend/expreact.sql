-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 11, 2024 at 04:19 PM
-- Server version: 8.0.30
-- PHP Version: 8.0.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;

--
-- Database: `expreact`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
    `product_id` int NOT NULL,
    `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    `price` int NOT NULL,
    `userid` int NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO
    `products` (
        `product_id`,
        `product_name`,
        `price`,
        `userid`,
        `createdAt`,
        `updatedAt`
    )
VALUES (
        1,
        'Product 1',
        2000000,
        3,
        '2024-09-11 16:04:04',
        '2024-09-11 16:04:04'
    ),
    (
        2,
        'Product 2',
        2000000,
        3,
        '2024-09-11 15:23:42',
        '2024-09-11 15:23:42'
    ),
    (
        3,
        'Product 3',
        2000000,
        3,
        '2024-09-11 15:23:46',
        '2024-09-11 15:23:46'
    ),
    (
        4,
        'Product 4',
        2000000,
        1,
        '2024-09-11 15:24:42',
        '2024-09-11 15:24:42'
    ),
    (
        5,
        'Product 5',
        2000000,
        1,
        '2024-09-11 15:24:45',
        '2024-09-11 15:24:45'
    ),
    (
        6,
        'Product 6',
        2000000,
        1,
        '2024-09-11 15:24:46',
        '2024-09-11 15:24:46'
    );

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
    `sid` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    `expires` datetime DEFAULT NULL,
    `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO
    `sessions` (
        `sid`,
        `expires`,
        `data`,
        `createdAt`,
        `updatedAt`
    )
VALUES (
        'Athat1qvD_gDxvu5kObybaz1KhyewWFg',
        '2024-09-12 14:41:12',
        '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}',
        '2024-09-11 14:41:12',
        '2024-09-11 14:41:12'
    ),
    (
        'CQU_KnE1JKZJpIk55aoMhZIQ93NM-FbD',
        '2024-09-12 16:04:19',
        '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userid\":3}',
        '2024-09-11 15:24:19',
        '2024-09-11 16:04:19'
    ),
    (
        'KYZkhcf645XpcI-ir_QEH2z2iCccEMAW',
        '2024-09-12 08:10:41',
        '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userid\":1}',
        '2024-09-11 08:10:05',
        '2024-09-11 08:10:41'
    ),
    (
        'samYx3K6lzN5k6jIVFHWMM-mS2p1dgpd',
        '2024-09-12 10:16:54',
        '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userid\":1}',
        '2024-09-11 09:42:30',
        '2024-09-11 10:16:54'
    );

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
    `userid` int NOT NULL,
    `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO
    `users` (
        `userid`,
        `name`,
        `email`,
        `password`,
        `role`,
        `createdAt`,
        `updatedAt`
    )
VALUES (
        1,
        'Admin',
        'admin@gmail.com',
        '$argon2id$v=19$m=65536,t=3,p=4$1X0kizao7id2TDBhipG5xg$DRh4sQ1YZ65qIzFMGjc80PlPSPl1gOCh7MJ8qFG4Yok',
        'Admin',
        '2024-09-11 06:24:24',
        '2024-09-11 06:24:24'
    ),
    (
        3,
        'User Updated',
        'user@gmail.com',
        '$argon2id$v=19$m=65536,t=3,p=4$etpjRE68CphxbaJy63w7Bg$lXIhWVHNLnAzB0jGhL3lx+uy8tXK07w5u1PO1E0RNMg',
        'User',
        '2024-09-11 06:36:34',
        '2024-09-11 06:36:34'
    );

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
ADD PRIMARY KEY (`product_id`),
ADD KEY `userid` (`userid`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions` ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
ADD PRIMARY KEY (`userid`),
ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
MODIFY `product_id` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `userid` int NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;