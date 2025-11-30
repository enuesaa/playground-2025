CREATE TABLE users (
    user_id VARCHAR(50) PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE memos (
    memo_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    title VARCHAR(200),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO users (user_id, user_name, email) VALUES
('user_001', 'Jack', 'jack@example.com'),
('user_002', 'John', 'john@example.com'),
('user_003', 'Alice', 'alice@example.com'),
('user_004', 'Bob', 'bob@example.com'),
('user_005', 'Carol', 'carol@example.com'),
('user_006', 'Dave', 'dave@example.com'),
('user_007', 'Eve', 'eve@example.com'),
('user_008', 'Frank', 'frank@example.com'),
('user_009', 'Grace', 'grace@example.com'),
('user_010', 'Heidi', 'heidi@example.com');

INSERT INTO memos (user_id, title, content, created_at, updated_at) VALUES
('user_001', 'Meeting Notes', 'Discussed Q4 objectives', '2025-11-01 10:00:00', '2025-11-01 12:00:00'),
('user_001', 'TODO', 'Write report\nPrepare materials', '2025-11-02 09:30:00', '2025-11-02 10:00:00'),
('user_002', 'Idea', 'Proposed new feature: support for dark mode', '2025-11-03 14:00:00', '2025-11-03 15:00:00'),
('user_002', 'Shopping List', 'Milk, eggs, bread', '2025-11-04 08:00:00', '2025-11-04 08:10:00'),
('user_003', 'Project Notes', 'Deadline: 12/31', '2025-11-05 11:00:00', '2025-11-05 11:30:00'),
('user_003', 'Technical Research', 'Evaluation results of Evidence.dev', '2025-11-06 16:00:00', '2025-11-06 16:45:00'),
('user_004', 'Travel Plan', 'Itinerary for Kyoto trip', '2025-11-07 13:00:00', '2025-11-07 13:30:00'),
('user_005', 'Reading Notes', 'Thoughts on "No Longer Human"', '2025-11-08 17:00:00', '2025-11-08 17:10:00'),
('user_006', 'Study Log', 'Completed Python introduction', '2025-11-09 19:00:00', '2025-11-09 19:30:00'),
('user_007', 'Recipe', 'How to make curry', '2025-11-10 18:00:00', '2025-11-10 18:20:00'),
('user_008', 'Exercise Log', '5 km jog', '2025-11-11 07:00:00', '2025-11-11 07:30:00'),
('user_009', 'Work Notes', 'Weekly meeting summary', '2025-11-12 09:00:00', '2025-11-12 09:15:00'),
('user_010', 'Hobby', 'Guitar practice log', '2025-11-13 20:00:00', '2025-11-13 20:30:00'),
('user_001', 'Diary', 'It was sunny today', '2025-11-14 21:00:00', '2025-11-14 21:05:00'),
('user_002', 'Note', 'Important notices', '2025-11-15 22:00:00', '2025-11-15 22:10:00'),
('user_003', 'TODO', 'Submit documents', '2025-11-16 23:00:00', '2025-11-16 23:20:00');
