CREATE TABLE   IF NOT EXISTS`USER`(
    `id` int(32) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `phone_part` int(16),
    `phone` int(32),
    `name` varchar(255) DEFAULT NULL,
    `nick` varchar(255) DEFAULT NULL,
    `detail_info` json DEFAULT NULL,
    `create_time` varchar(20) DEFAULT NULL,
    `modified_time` varchar(20) DEFAULT NULL,
    `level` int(11) DEFAULT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `USER` set email = '18518165912@163.com', password = '5201314', name = '许广宇', nick = '道', phone_part = 185, phone = 18165912;
INSERT INTO `USER` set email = '13894766626@163.com', password = '5201314', phone_part = 138, phone = 94766626;


