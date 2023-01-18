CREATE DATABASE cab_service_system;
USE cab_service_system;

CREATE TABLE `passengers`(
	`pid` INT PRIMARY KEY AUTO_INCREMENT,
    `pname` VARCHAR(50) NOT NULL,
	`paddress` VARCHAR(100) NOT NULL,
    `pemail` VARCHAR(100) NOT NULL UNIQUE,
    `pphone` BIGINT NOT NULL,
    `pgender` VARCHAR(10) NOT NULL,
    `pdob` DATE NOT NULL
);

INSERT INTO `passengers`(`pname`, `paddress`, `pemail`, `pphone`, `pgender`, `pdob`) VALUES 
('Arjun', 'Kottayam', 'arjun@mail.com', 9878987788, 'M', '2001-10-10'),
('Sarath', 'Kozhikode', 'sarath@mail.com', 9878673454, 'M', '1999-10-10'),
('Sreenath', 'Kottayam', 'sreenath@mail.com', 9890789878, 'M', '2001-02-22');

CREATE TABLE `drivers`(
	`did` INT PRIMARY KEY AUTO_INCREMENT,
    `dname` VARCHAR(30) NOT NULL,
    `daddress` VARCHAR(100) NOT NULL,
    `demail` VARCHAR(100) NOT NULL UNIQUE,
    `dphone` BIGINT NOT NULL,
    `dgender` VARCHAR(10) NOT NULL,
    `dvehicle` VARCHAR(40) NOT NULL,
    `dlicense` VARCHAR(30) NOT NULL
);

INSERT INTO `drivers`(`dname`, `daddress`, `demail`, `dphone`, `dgender`, `dvehicle`, `dlicense`) VALUES
('Tom', 'Kottayam', 'tom@mail.com', 7898789987, 'M', 'Urus', 'KL232023123988'),
('Rajan', 'Kozhikode', 'raj@mail.com', 9889098909, 'M', 'Mini Cooper', 'KL237584839292'),
('Tintu', 'Kochi', 'tintu@mail.com', 6787678767, 'M', 'GLS-450', 'KL0720220390292');

CREATE TABLE `routes`(
	`rid` INT PRIMARY KEY AUTO_INCREMENT,
    `rfrom` VARCHAR(20) NOT NULL,
    `rto` VARCHAR(20) NOT NULL,
    `rrates` INT NOT NULL
);

INSERT INTO `routes`(`rfrom`, `rto`, `rrates`) VALUES
('kochi', 'kozhikode', 9500),
('kochi', 'kottayam', 3800),
('kottayam', 'kochi', 4100),
('kozhikode', 'kochi', 10000),
('kottayam', 'kozhikode', 12300);

CREATE TABLE `bookings`(
	`bid` INT PRIMARY KEY AUTO_INCREMENT,
    `pid` INT NOT NULL,
    `did` INT NOT NULL,
    `rid` INT NOT NULL,
    `trip_date_time` DATETIME NOT NULL,
    `booking_date_time` DATETIME NOT NULL,
    CONSTRAINT FK_pid FOREIGN KEY (pid) REFERENCES passengers(pid),
    CONSTRAINT FK_did FOREIGN KEY (did) REFERENCES drivers(did),
    CONSTRAINT FK_rid FOREIGN KEY (rid) REFERENCES routes(rid)
);

INSERT INTO `bookings`(`pid`, `did`, `rid`, `trip_date_time`, `booking_date_time`) VALUES
(1, 2, 2, '2023-01-20 12:30', '2023-01-15 02:30'),
(2, 1, 1, '2023-01-10 02:30', '2023-01-08 01:30'),
(3, 3, 4, '2022-01-20 01:30', '2022-01-15 05:30');
