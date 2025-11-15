-- name: get-tasks-with-user
SELECT t.id, t.name AS task_name, t.description, u.name AS user_name, u.email
FROM tasks t
  JOIN users u ON t.user_id = u.id
ORDER BY t.id;
