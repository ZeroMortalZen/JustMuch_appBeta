-- Dumping structure for table assignment.orders

CREATE TABLE IF NOT EXISTS `orders` (

  `id` int(11) NOT NULL AUTO_INCREMENT,

  `name` varchar(50) NOT NULL DEFAULT '0',
   
   `price` FLOAT(50) NOT NULL DEFAULT "0",
   
  `QTY` varchar(50) NOT NULL DEFAULT '0',
  

  PRIMARY KEY (`id`)

) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;




