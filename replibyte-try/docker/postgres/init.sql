-- created by chatgpt

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Charlie', 'charlie@example.com'),
('David', 'david@example.com'),
('Eva', 'eva@example.com'),
('Frank', 'frank@example.com'),
('Grace', 'grace@example.com'),
('Hannah', 'hannah@example.com'),
('Ivan', 'ivan@example.com'),
('Julia', 'julia@example.com');

INSERT INTO todos (user_id, title, completed) VALUES
(1, 'Buy groceries', FALSE),
(2, 'Walk the dog', TRUE),
(3, 'Finish homework', FALSE),
(4, 'Call mom', TRUE),
(5, 'Pay bills', FALSE),
(6, 'Clean the house', TRUE),
(7, 'Fix the bike', FALSE),
(8, 'Write blog post', TRUE),
(9, 'Book dentist appointment', FALSE),
(10, 'Prepare presentation', TRUE);
