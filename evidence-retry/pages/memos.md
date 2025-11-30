---
title: 最近のメモ
---

```sql recent_memos
SELECT 
    m.memo_id,
    m.title,
    m.content,
    u.user_name,
    m.created_at,
FROM memos m
JOIN users u ON m.user_id = u.user_id
ORDER BY m.created_at DESC
LIMIT 10
```

<DataTable data={recent_memos}>
    <Column id=title title="タイトル" />
    <Column id=user_name title="作成者" />
    <Column id=created_at title="作成日時" />
</DataTable>
