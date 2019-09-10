use ocsweb

create table licenciasDeSoftware(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    version VARCHAR(180),
    stock INT(11),
    img VARCHAR(200),
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);