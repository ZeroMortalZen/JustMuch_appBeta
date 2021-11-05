-- Dumping structure for table assignment.orders

CREATE TABLE IF NOT EXISTS `orders` (

  `id` int(11) NOT NULL AUTO_INCREMENT,

  `ordercontent` varchar(50) NOT NULL DEFAULT '0',
   
   `Qty` int(50) NOT NULL DEFAULT "0",
   
  `total` varchar(50) NOT NULL DEFAULT '0',

  PRIMARY KEY (`id`)

) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;



-- Dumping data for table assignment.orders: ~0 rows (approximately)

/*!40000 ALTER TABLE `orders` DISABLE KEYS */;

INSERT INTO `orders` (`id`, `ordercontent`,` Qty` ,`total`) VALUES

(1, 'Chips', '1.50')
