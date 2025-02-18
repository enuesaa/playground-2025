-- migration
CREATE TABLE IF NOT EXISTS customers (id serial, name varchar(255), email varchar(255));

-- seed
INSERT INTO customers(name, email) VALUES ('John', 'john@example.com');
