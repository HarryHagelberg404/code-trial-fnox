DROP TABLE IF EXISTS boxes ;
CREATE TABLE boxes (
  id SERIAL,
  name VARCHAR(20) NOT NULL,
  weight double precision,
  color VARCHAR(23),
  country VARCHAR(3),
  PRIMARY KEY (id)
);