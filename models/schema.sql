-- //Add Database BEFORE starting server for the first time//
DROP DATABASE IF EXISTS pocketMonstersDB;
CREATE DATABASE pocketMonstersDB;

-- ///////AFTER starting server, insert values into tables////////
USE pocketMonstersDB;

SELECT * FROM Characters;

INSERT INTO Characters (characterName, lifePoints, attackPoints, accuracy, dodging, startLevel, imageUrl, createdAt, updatedAt)
VALUES ('Bat Wing Demon', 100, 11, 40, 30, 3, '/images/beast1.jpg','2018-11-14 05:41:33', '2018-11-14 05:41:33'),
('Rokurokubi', 125, 12, 41, 31, 4, '/images/beast2.png','2018-11-14 05:41:33', '2018-11-14 05:41:33'),
('Hunter', 150, 14, 42, 32, 5, '/images/beast3.jpeg', '2018-11-14 05:41:33', '2018-11-14 05:41:33');

SELECT * FROM Monsters;

INSERT INTO Monsters(monsterName, lifePoints, attackPoints, accuracy, dodging, imageUrl, createdAt, updatedAt) 
VALUES ('Voodoolich', 100, 12, 41,31, '/images/Webhag.jpg','2018-11-14 05:41:33', '2018-11-14 05:41:33'),
('Trancelich', 150, 13, 42, 32,'/images/Trancelich.jpg','2018-11-14 05:41:33', '2018-11-14 05:41:33'),
('Mistling', 200, 14, 43, 33, '/images/mistling.jpg','2018-11-14 05:41:33', '2018-11-14 05:41:33');