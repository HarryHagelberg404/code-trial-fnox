DROP TABLE IF EXISTS boxes ;
CREATE TABLE boxes (
  id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  weight integer,
  color VARCHAR(11),
  country VARCHAR(3)
);