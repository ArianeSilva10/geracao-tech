CREATE DATABASE blog;

USE blog;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
	post_titulo VARCHAR(45),
    post_data DATE,
    post_conteudo TEXT,
    post_autor VARCHAR(45),
    post_autor_foto_perfil VARCHAR(45),
    post_autor_bio VARCHAR(255),
    quantidade_seguidores INT, 
    quantidade_comentarios INT
);

INSERT INTO posts (post_titulo,post_conteudo, post_autor )
values ("Titulo do post", "Conteudo do post", "Kelvys Moura");

INSERT INTO posts (post_titulo, post_data, post_conteudo, post_autor)
VALUES ('Post sobre MySQL', '2024-02-15', 'Aprendendo sobre MySQL no curso de banco de dados.', 'Maria Souza');

INSERT INTO posts (post_titulo, post_data, post_conteudo, post_autor)
VALUES ('Dicas de JavaScript', '2024-03-10', 'Compartilhando dicas sobre JavaScript.', 'Pedro Lima');

INSERT INTO posts(post_titulo, post_data, post_conteudo, post_autor, post_autor_foto_perfil, post_autor_bio, quantidade_seguidores, quantidade_comentarios)
VALUES
('Viagens pelo Mundo', '2024-07-01', 'Explorando diferentes culturas ao redor do mundo', 'Ana Costa', 'imagem.com/ana_costa.png', 'Ana é uma viajante apaixonada.', 20587.0, 120),
('Tendências da Moda', '2024-07-02', 'Descubra as últimas tendências da moda.', 'Lucas Martins', 'imagem.com/lucas_martins.png', 'Lucas é um estilista renomado.', 1500, 45);

INSERT INTO posts (post_titulo, post_data, post_conteudo, post_autor, post_autor_foto_perfil, post_autor_bio, quantidade_seguidores, quantidade_comentarios)
VALUES 
('Meu Primeiro Post', '2024-01-01', 'Este é o conteúdo do meu primeiro post.', 'João Silva', 'imagem.com/joao_silva.png', 'João é um desenvolvedor.', 1200.0, 30),
('Post sobre MySQL', '2024-02-15', 'Aprendendo sobre MySQL no curso de banco de dados.', 'Maria Souza', 'imagem.com/maria_souza.png', 'Maria é desenvolvedora de software.', 1500.0, 45);

TRUNCATE TABLE posts;

INSERT INTO posts (post_titulo, post_data, post_conteudo, post_autor, post_autor_foto_perfil, post_autor_bio, quantidade_seguidores, quantidade_comentarios)
VALUES
('Título 1', '2024-07-01', 'Conteúdo do post 1', 'Autor 1', 'imagem.com/autor1.png', 'Biografia do Autor 1', 1000, 50),
('Título 2', '2024-07-02', 'Conteúdo do post 2', 'Autor 2', 'imagem.com/autor2.png', 'Biografia do Autor 2', 2000, 60),
('Título 3', '2024-07-03', 'Conteúdo do post 3', 'Autor 3', 'imagem.com/autor3.png', 'Biografia do Autor 3', 3000, 70),
('Título 4', '2024-07-04', 'Conteúdo do post 4', 'Autor 4', 'imagem.com/autor4.png', 'Biografia do Autor 4', 4000, 80),
('Título 5', '2024-07-05', 'Conteúdo do post 5', 'Autor 5', 'imagem.com/autor5.png', 'Biografia do Autor 5', 5000, 90),
('Título 6', '2024-07-06', 'Conteúdo do post 6', 'Autor 6', 'imagem.com/autor6.png', 'Biografia do Autor 6', 6000, 100),
('Título 7', '2024-07-07', 'Conteúdo do post 7', 'Autor 7', 'imagem.com/autor7.png', 'Biografia do Autor 7', 7000, 110),
('Título 8', '2024-07-08', 'Conteúdo do post 8', 'Autor 8', 'imagem.com/autor8.png', 'Biografia do Autor 8', 8000, 120),
('Título 9', '2024-07-09', 'Conteúdo do post 9', 'Autor 9', 'imagem.com/autor9.png', 'Biografia do Autor 9', 9000, 130),
('Título 10', '2024-07-10', 'Conteúdo do post 10', 'Autor 10', 'imagem.com/autor10.png', 'Biografia do Autor 10', 10000, 140),
('Título 11', '2024-07-11', 'Conteúdo do post 11', 'Autor 11', 'imagem.com/autor11.png', 'Biografia do Autor 11', 11000, 150),
('Título 12', '2024-07-12', 'Conteúdo do post 12', 'Autor 12', 'imagem.com/autor12.png', 'Biografia do Autor 12', 12000, 160),
('Título 13', '2024-07-13', 'Conteúdo do post 13', 'Autor 13', 'imagem.com/autor13.png', 'Biografia do Autor 13', 13000, 170),
('Título 14', '2024-07-14', 'Conteúdo do post 14', 'Autor 14', 'imagem.com/autor14.png', 'Biografia do Autor 14', 14000, 180),
('Título 15', '2024-07-15', 'Conteúdo do post 15', 'Autor 15', 'imagem.com/autor15.png', 'Biografia do Autor 15', 15000, 190),
('Título 16', '2024-07-16', 'Conteúdo do post 16', 'Autor 16', 'imagem.com/autor16.png', 'Biografia do Autor 16', 16000, 200),
('Título 17', '2024-07-17', 'Conteúdo do post 17', 'Autor 17', 'imagem.com/autor17.png', 'Biografia do Autor 17', 17000, 210),
('Título 18', '2024-07-18', 'Conteúdo do post 18', 'Autor 18', 'imagem.com/autor18.png', 'Biografia do Autor 18', 18000, 220),
('Título 19', '2024-07-19', 'Conteúdo do post 19', 'Autor 19', 'imagem.com/autor19.png', 'Biografia do Autor 19', 19000, 230),
('Título 20', '2024-07-20', 'Conteúdo do post 20', 'Autor 20', 'imagem.com/autor20.png', 'Biografia do Autor 20', 20000, 240),
('Título 21', '2024-07-21', 'Conteúdo do post 21', 'Autor 21', 'imagem.com/autor21.png', 'Biografia do Autor 21', 21000, 250),
('Título 22', '2024-07-22', 'Conteúdo do post 22', 'Autor 22', 'imagem.com/autor22.png', 'Biografia do Autor 22', 22000, 260),
('Título 23', '2024-07-23', 'Conteúdo do post 23', 'Autor 23', 'imagem.com/autor23.png', 'Biografia do Autor 23', 23000, 270),
('Título 24', '2024-07-24', 'Conteúdo do post 24', 'Autor 24', 'imagem.com/autor24.png', 'Biografia do Autor 24', 24000, 280),
('Título 25', '2024-07-25', 'Conteúdo do post 25', 'Autor 25', 'imagem.com/autor25.png', 'Biografia do Autor 25', 25000, 290),
('Título 26', '2024-07-26', 'Conteúdo do post 26', 'Autor 26', 'imagem.com/autor26.png', 'Biografia do Autor 26', 26000, 300),
('Título 27', '2024-07-27', 'Conteúdo do post 27', 'Autor 27', 'imagem.com/autor27.png', 'Biografia do Autor 27', 27000, 310),
('Título 28', '2024-07-28', 'Conteúdo do post 28', 'Autor 28', 'imagem.com/autor28.png', 'Biografia do Autor 28', 28000, 320),
('Título 29', '2024-07-29', 'Conteúdo do post 29', 'Autor 29', 'imagem.com/autor29.png', 'Biografia do Autor 29', 29000, 330),
('Título 30', '2024-07-30', 'Conteúdo do post 30', 'Autor 30', 'imagem.com/autor30.png', 'Biografia do Autor 30', 30000, 340),
('Título 31', '2024-07-31', 'Conteúdo do post 31', 'Autor 31', 'imagem.com/autor31.png', 'Biografia do Autor 31', 31000, 350),
('Título 32', '2024-08-01', 'Conteúdo do post 32', 'Autor 32', 'imagem.com/autor32.png', 'Biografia do Autor 32', 32000, 360),
('Título 33', '2024-08-02', 'Conteúdo do post 33', 'Autor 33', 'imagem.com/autor33.png', 'Biografia do Autor 33', 33000, 370),
('Título 34', '2024-08-03', 'Conteúdo do post 34', 'Autor 34', 'imagem.com/autor34.png', 'Biografia do Autor 34', 34000, 380),
('Título 35', '2024-08-04', 'Conteúdo do post 35', 'Autor 35', 'imagem.com/autor35.png', 'Biografia do Autor 35', 35000, 390),
('Título 36', '2024-08-05', 'Conteúdo do post 36', 'Autor 36', 'imagem.com/autor36.png', 'Biografia do Autor 36', 36000, 400),
('Título 37', '2024-08-06', 'Conteúdo do post 37', 'Autor 37', 'imagem.com/autor37.png', 'Biografia do Autor 37', 37000, 410),
('Título 38', '2024-08-07', 'Conteúdo do post 38', 'Autor 38', 'imagem.com/autor38.png', 'Biografia do Autor 38', 38000, 420),
('Título 39', '2024-08-08', 'Conteúdo do post 39', 'Autor 39', 'imagem.com/autor39.png', 'Biografia do Autor 39', 39000, 430),
('Título 40', '2024-08-09', 'Conteúdo do post 40', 'Autor 40', 'imagem.com/autor40.png', 'Biografia do Autor 40', 40000, 440),
('Título 41', '2024-08-10', 'Conteúdo do post 41', 'Autor 41', 'imagem.com/autor41.png', 'Biografia do Autor 41', 41000, 450),
('Título 42', '2024-08-11', 'Conteúdo do post 42', 'Autor 42', 'imagem.com/autor42.png', 'Biografia do Autor 42', 42000, 460),
('Título 43', '2024-08-12', 'Conteúdo do post 43', 'Autor 43', 'imagem.com/autor43.png', 'Biografia do Autor 43', 43000, 470),
('Título 44', '2024-08-13', 'Conteúdo do post 44', 'Autor 44', 'imagem.com/autor44.png', 'Biografia do Autor 44', 44000, 480),
('Título 45', '2024-08-14', 'Conteúdo do post 45', 'Autor 45', 'imagem.com/autor45.png', 'Biografia do Autor 45', 45000, 490),
('Título 46', '2024-08-15', 'Conteúdo do post 46', 'Autor 46', 'imagem.com/autor46.png', 'Biografia do Autor 46', 46000, 500),
('Título 47', '2024-08-16', 'Conteúdo do post 47', 'Autor 47', 'imagem.com/autor47.png', 'Biografia do Autor 47', 47000, 510),
('Título 48', '2024-08-17', 'Conteúdo do post 48', 'Autor 48', 'imagem.com/autor48.png', 'Biografia do Autor 48', 48000, 520),
('Título 49', '2024-08-18', 'Conteúdo do post 49', 'Autor 49', 'imagem.com/autor49.png', 'Biografia do Autor 49', 49000, 530),
('Título 50', '2024-08-19', 'Conteúdo do post 50', 'Autor 50', 'imagem.com/autor50.png', 'Biografia do Autor 50', 50000, 540),
('Título 51', '2024-08-20', 'Conteúdo do post 51', 'Autor 51', 'imagem.com/autor51.png', 'Biografia do Autor 51', 51000, 550),
('Título 52', '2024-08-21', 'Conteúdo do post 52', 'Autor 52', 'imagem.com/autor52.png', 'Biografia do Autor 52', 52000, 560),
('Título 53', '2024-08-22', 'Conteúdo do post 53', 'Autor 53', 'imagem.com/autor53.png', 'Biografia do Autor 53', 53000, 570),
('Título 54', '2024-08-23', 'Conteúdo do post 54', 'Autor 54', 'imagem.com/autor54.png', 'Biografia do Autor 54', 54000, 580),
('Título 55', '2024-08-24', 'Conteúdo do post 55', 'Autor 55', 'imagem.com/autor55.png', 'Biografia do Autor 55', 55000, 590),
('Título 56', '2024-08-25', 'Conteúdo do post 56', 'Autor 56', 'imagem.com/autor56.png', 'Biografia do Autor 56', 56000, 600),
('Título 57', '2024-08-26', 'Conteúdo do post 57', 'Autor 57', 'imagem.com/autor57.png', 'Biografia do Autor 57', 57000, 610),
('Título 58', '2024-08-27', 'Conteúdo do post 58', 'Autor 58', 'imagem.com/autor58.png', 'Biografia do Autor 58', 58000, 620),
('Título 59', '2024-08-28', 'Conteúdo do post 59', 'Autor 59', 'imagem.com/autor59.png', 'Biografia do Autor 59', 59000, 630),
('Título 60', '2024-08-29', 'Conteúdo do post 60', 'Autor 60', 'imagem.com/autor60.png', 'Biografia do Autor 60', 60000, 640),
('Título 61', '2024-08-30', 'Conteúdo do post 61', 'Autor 61', 'imagem.com/autor61.png', 'Biografia do Autor 61', 61000, 650),
('Título 62', '2024-08-31', 'Conteúdo do post 62', 'Autor 62', 'imagem.com/autor62.png', 'Biografia do Autor 62', 62000, 660),
('Título 63', '2024-09-01', 'Conteúdo do post 63', 'Autor 63', 'imagem.com/autor63.png', 'Biografia do Autor 63', 63000, 670),
('Título 64', '2024-09-02', 'Conteúdo do post 64', 'Autor 64', 'imagem.com/autor64.png', 'Biografia do Autor 64', 64000, 680),
('Título 65', '2024-09-03', 'Conteúdo do post 65', 'Autor 65', 'imagem.com/autor65.png', 'Biografia do Autor 65', 65000, 690),
('Título 66', '2024-09-04', 'Conteúdo do post 66', 'Autor 66', 'imagem.com/autor66.png', 'Biografia do Autor 66', 66000, 700),
('Título 67', '2024-09-05', 'Conteúdo do post 67', 'Autor 67', 'imagem.com/autor67.png', 'Biografia do Autor 67', 67000, 710),
('Título 68', '2024-09-06', 'Conteúdo do post 68', 'Autor 68', 'imagem.com/autor68.png', 'Biografia do Autor 68', 68000, 720),
('Título 69', '2024-09-07', 'Conteúdo do post 69', 'Autor 69', 'imagem.com/autor69.png', 'Biografia do Autor 69', 69000, 730),
('Título 70', '2024-09-08', 'Conteúdo do post 70', 'Autor 70', 'imagem.com/autor70.png', 'Biografia do Autor 70', 70000, 740),
('Título 71', '2024-09-09', 'Conteúdo do post 71', 'Autor 71', 'imagem.com/autor71.png', 'Biografia do Autor 71', 71000, 750),
('Título 72', '2024-09-10', 'Conteúdo do post 72', 'Autor 72', 'imagem.com/autor72.png', 'Biografia do Autor 72', 72000, 760),
('Título 73', '2024-09-11', 'Conteúdo do post 73', 'Autor 73', 'imagem.com/autor73.png', 'Biografia do Autor 73', 73000, 770),
('Título 74', '2024-09-12', 'Conteúdo do post 74', 'Autor 74', 'imagem.com/autor74.png', 'Biografia do Autor 74', 74000, 780),
('Título 75', '2024-09-13', 'Conteúdo do post 75', 'Autor 75', 'imagem.com/autor75.png', 'Biografia do Autor 75', 75000, 790),
('Título 76', '2024-09-14', 'Conteúdo do post 76', 'Autor 76', 'imagem.com/autor76.png', 'Biografia do Autor 76', 76000, 800),
('Título 77', '2024-09-15', 'Conteúdo do post 77', 'Autor 77', 'imagem.com/autor77.png', 'Biografia do Autor 77', 77000, 810),
('Título 78', '2024-09-16', 'Conteúdo do post 78', 'Autor 78', 'imagem.com/autor78.png', 'Biografia do Autor 78', 78000, 820),
('Título 79', '2024-09-17', 'Conteúdo do post 79', 'Autor 79', 'imagem.com/autor79.png', 'Biografia do Autor 79', 79000, 830),
('Título 80', '2024-09-18', 'Conteúdo do post 80', 'Autor 80', 'imagem.com/autor80.png', 'Biografia do Autor 80', 80000, 840),
('Título 81', '2024-09-19', 'Conteúdo do post 81', 'Autor 81', 'imagem.com/autor81.png', 'Biografia do Autor 81', 81000, 850),
('Título 82', '2024-09-20', 'Conteúdo do post 82', 'Autor 82', 'imagem.com/autor82.png', 'Biografia do Autor 82', 82000, 860);
