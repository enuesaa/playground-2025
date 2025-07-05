CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  done BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (title, done) VALUES
  ('買い物に行く', FALSE),
  ('レポートを書く', TRUE),
  ('メールを返す', FALSE);
