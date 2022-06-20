-- Base de datos: `auto_garage_2_db`

DROP DATABASE IF EXISTS auto_garage_2_db;
CREATE DATABASE auto_garage_2_db;
USE auto_garage_2_db;


-- Estructura de tabla para la tabla `Comments`
CREATE TABLE `Comments` (
  `id` int(11) NOT NULL,
  `comment` varchar(250) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Volcado de datos para la tabla `Comments`
INSERT INTO `Comments` (`id`, `comment`, `product_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'saludos', 8, 6, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(2, 'muy bueno', 5, 2, '2022-06-06 03:00:00', '2022-06-15 17:06:42'),
(5, 'excelente', 9, 6, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(6, 'genial', 7, 5, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(13, 'malisimo', 6, 8, '2022-06-15 17:06:42', '2022-06-15 17:06:42'),
(14, 'un desastre', 9, 9, '2022-06-06 03:00:00', '2022-06-15 18:31:33');


-- Estructura de tabla para la tabla `products`
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `model` varchar(250) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `year` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `foto` varchar(250) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Volcado de datos para la tabla `products`
INSERT INTO `products` (`id`, `model`, `marca`, `year`, `price`, `foto`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Giulia', 'Alfa Romeo', 2015, 20000, '/images/products/Alfa-romeo.jpeg', 1, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(2, 'Serie 2', 'BMW', 2020, 40000, '/images/products/BMW.jpeg', 1, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(5, 'Tiggo 2', 'Chery', 2013, 8000, '/images/products/Chery.jpeg', 1, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(6, '4', 'DS', 2022, 40000, '/images/products/DS9.jpeg', 1, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(7, 'Bronco Sport', 'Ford', 2019, 25000, '/images/products/Ford.jpeg', 1, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(8, 'Quattroporte', 'Maserati', 2021, 70000, '/images/products/Maserati.jpeg', 1, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(9, 'Sentra', 'Nissan', 2018, 20000, '/images/products/Nissan.jpeg', 1, '2022-06-06 03:00:00', '2022-06-06 03:00:00'),
(40, 'Corola', 'Toyota', 2018, 10000, '/images/products/Toyota.jpeg', 1, '2022-06-06 00:00:00', '2022-06-06 00:00:00');


-- Estructura de tabla para la tabla `users`
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `foto_perfil` varchar(250) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(200) NOT NULL,
  `date_of_birth` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Volcado de datos para la tabla `users`
INSERT INTO `users` (`id`, `name`, `lastname`, `foto_perfil`, `username`, `password`, `email`, `date_of_birth`, `created_at`, `updated_at`) VALUES
(1, 'brian', 'gomez', 'asdasd', 'briang', '123123123', 'bg@dh.com', '2022-06-06', '2022-06-06 03:00:00', '2022-06-13 14:55:17'),
(2, 'carlos', 'as', 'asdasd', 'asdasd', 'asdadasd', 'cg@as.com', '2022-06-06', '2022-06-06 03:00:00', '2022-06-13 14:56:21'),
(5, 'marcos', 'wilson', 'dshcsj', 'mwilson', 'uhsjinaij', 'mw@dh.com', '2002-10-24', '2022-06-06 03:00:00', '2022-06-13 14:56:21'),
(6, 'manuel', 'pascua', 'acndo', 'mpascua', 'oansclk', 'mp@dh.som', '1999-01-07', '2022-06-13 14:56:21', '2022-06-13 14:56:21'),
(7, 'Luli', 'Cabello', 'vddcd', 'lcabello', 'fvdsx', 'lc@dh.com', '2001-05-06', '2022-06-13 14:56:21', '2022-06-13 14:56:21'),
(8, 'Mateo', 'Escalante', 'vccdc', 'mescalante', 'rcexw', 'me@dh.com', '2002-11-10', '2022-06-13 14:56:21', '2022-06-13 14:56:21'),
(9, 'Jorge', 'Fellner', 'cexsc', 'jfellner', 'vcvrr', 'jf@dh.com', '2002-06-03', '2022-06-13 14:56:21', '2022-06-13 14:56:21'),
(10, 'Harry', 'Potter', 'dhoa', 'hpotter', 'koandcok', 'hp@dh.com', '2002-06-03', '2022-06-13 14:56:21', '2022-06-13 14:56:21'),
(11, 'Ron', 'Weasley', 'jdn', 'rweasley', 'jnd', 'rw@dh.com', '1999-01-07', '2022-06-13 14:56:21', '2022-06-13 14:56:21');


-- Índices para tablas volcadas

-- Indices de la tabla `Comments`
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coments_products_idx` (`product_id`),
  ADD KEY `coments_user` (`user_id`);


-- Indices de la tabla `products`
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);


-- Indices de la tabla `users`
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);


-- AUTO_INCREMENT de las tablas volcadas


-- AUTO_INCREMENT de la tabla `Comments`
ALTER TABLE `Comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;


-- AUTO_INCREMENT de la tabla `products`
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;


-- AUTO_INCREMENT de la tabla `users`
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;


-- Restricciones para tablas volcadas


-- Filtros para la tabla `Comments`
ALTER TABLE `Comments`
  ADD CONSTRAINT `coments_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `coments_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;


