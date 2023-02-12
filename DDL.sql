SET datestyle TO postgres, dmy;

CREATE TABLE time (
	id serial NOT NULL,
	nome VARCHAR(45) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE jogador (
	id serial NOT NULL,
	nome VARCHAR(45) NOT NULL,
    idade int,
    time_id int,
    FOREIGN KEY(time_id) REFERENCES time(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);