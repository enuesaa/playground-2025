---
title: ユーザー一覧
---

```sql users
SELECT 
    user_id,
    user_name,
    CONCAT('/users/', user_id) as user_link
FROM users
ORDER BY user_name
```

<DataTable data={users} link=user_link>
    <Column id=user_name title="ユーザー名" />
</DataTable>
