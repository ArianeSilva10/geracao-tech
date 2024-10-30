DROP DATABASE IF EXISTS blog;

CREATE DATABASE blog;

USE blog;

CREATE TABLE users (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(45),
    email VARCHAR(45)
);

CREATE TABLE posts (
	post_id INT AUTO_INCREMENT PRIMARY KEY,
    post_title VARCHAR(255),
    post_content TEXT,
    post_date DATE,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (user_name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Carol', 'carol@example.com');

INSERT INTO posts (post_title, post_content, post_date, user_id) VALUES
('Primeiro Post', 'Conteúdo do primeiro post...', '2024-10-17', 1),
('Segundo Post', 'Conteúdo do segundo post...', '2024-10-18', 2);



/*-----------------------------------------------------------------------------------------------*/
DESCRIBE users;

INSERT INTO users (user_name, email) VALUES ('Test User', 'test@example.com');

INSERT INTO users (user_name) VALUES ('User Without Email');

CREATE TABLE users_required (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(45),
    email VARCHAR(45) NOT NULL
);

INSERT INTO users_required (user_name) VALUES ('User Without Email');

CREATE TABLE users_default (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(45),
    email VARCHAR(45) DEFAULT 'default@example.com'
);

INSERT INTO users_default (user_name) VALUES ('User Without Email');


/*=====================================================================================================*/
CREATE TABLE posts2 (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT
);

INSERT INTO posts2 (title, content) VALUES ('JS', 'Conteúdo do post');

SELECT * FROM posts2;

ALTER TABLE posts2 ADD COLUMN id2 INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

DESCRIBE posts2;

/*###########################################################################################################*/
DELETE FROM posts2;

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM posts3;

SET SQL_SAFE_UPDATES = 1;