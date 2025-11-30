---
title: Home
---

<Details title='How to edit this page'>

  This page can be found in your project at `/pages/index.md`. Make a change to the markdown file and save it to see the change take effect in your browser.
</Details>

## ユーザー一覧

```sql users
SELECT 
    user_id,
    user_name,
    email,
    created_at,
    '/users/' || user_id as user_link
FROM users
ORDER BY user_name
```

<DataTable data={users} link=user_link>
    <Column id=user_name title="ユーザー名" />
    <Column id=email title="メール" />
    <Column id=created_at title="登録日" />
</DataTable>

## 最近のメモ

```sql recent_memos
SELECT 
    m.memo_id,
    m.title,
    m.content,
    u.user_name,
    m.created_at,
    '/users/' || m.user_id as user_link
FROM memos m
JOIN users u ON m.user_id = u.user_id
ORDER BY m.created_at DESC
LIMIT 10
```

<DataTable data={recent_memos}>
    <Column id=title title="タイトル" />
    <Column id=user_name title="作成者" contentType=link linkLabel=user_name href=user_link />
    <Column id=created_at title="作成日時" />
</DataTable>
