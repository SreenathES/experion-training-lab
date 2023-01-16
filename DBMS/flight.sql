CREATE DATABASE flight_booking_system;
USE flight_booking_system;

CREATE TABLE `passenger`(
	`passenger_id` INT PRIMARY KEY AUTO_INCREMENT,
    `passenger_name` VARCHAR(50) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(30) NOT NULL,
    `mobile` INT NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `date_of_birth` DATE NOT NULL
);

CREATE TABLE `flight`(
	`flight_number` INT PRIMARY KEY,
    `flight_name` VARCHAR(20) NOT NULL,
    `flight_description` VARCHAR(150),
    `flight_total_capacity` INT NOT NULL
);

CREATE TABLE `flight_schedule`(
	`flight_schedule_id` INT PRIMARY KEY AUTO_INCREMENT,
    `flight_from` VARCHAR(30) NOT NULL,
    `fligth_to` VARCHAR(30) NOT NULL,
    `flight_date` DATE NOT NULL,
    `flight_time` TIME NOT NULL,
    `cost` INT NOT NULL,
    `flight_number` INT,
    CONSTRAINT FK_Flight_Number FOREIGN KEY (flight_number) REFERENCES flight(flight_number)
);

CREATE TABLE `booked_ticket`(
	`ticket_number` INT PRIMARY KEY AUTO_INCREMENT,
    `date_of_booking` DATE NOT NULL,
    `date_of_travel` DATE NOT NULL,
    `flight_from` VARCHAR(30) NOT NULL,
    `fligth_to` VARCHAR(30) NOT NULL,
    `flight_time` TIME NOT NULL,
    `flight_seat` INT NOT NULL,
    `schedule_id` INT,
    `passenger_id` INT,
    CONSTRAINT FK_Passenger_Id FOREIGN KEY (passenger_id) REFERENCES passenger(passenger_id),
    CONSTRAINT FK_Schedule_Id FOREIGN KEY (schedule_id) REFERENCES flight_schedule(flight_schedule_id)
);
