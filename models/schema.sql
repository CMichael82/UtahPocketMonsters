DROP DATABASE IF EXISTS pocketMonstersDB;
CREATE DATABASE pocketMonstersDB;
USE  pocketMonstersfDB;

CREATE TABLE Characters(
  item_id INT AUTO_INCREMENT NOT NULL,
  character_name VARCHAR(100) NOT NULL,
  life_points INTEGER(100) NOT NULL,
  attack_points INTEGER(100) NOT NULL,
  start_level INTEGER(100) NOT NULL,
  primary key(item_id)
);

SELECT * FROM Characters;

INSERT INTO Characters (character_name, life_points, attack_points, start_level)
VALUES ("Bat Wing Demon", 10, 20, 3),
("Rokurokubi", 20, 15, 4),
("Hunter", 20, 20, 5)