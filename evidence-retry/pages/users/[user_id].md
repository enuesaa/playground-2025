```sql user_info
SELECT 
    user_id,
    user_name,
    email,
    created_at
FROM users
WHERE user_id = '${params.user_id}'
```

# {user_info[0].user_name} さんのメモ

## 基本情報

- **ユーザーID**: {user_info[0].user_id}
- **メール**: {user_info[0].email}
- **登録日**: {user_info[0].created_at}

---

## メモ一覧

```sql user_memos
SELECT 
    memo_id,
    title,
    content,
    created_at,
    updated_at
FROM memos
WHERE user_id = '${params.user_id}'
ORDER BY updated_at DESC
```

```sql memo_count
SELECT COUNT(*) as total FROM memos WHERE user_id = '${params.user_id}'
```

<BigValue data={memo_count} value=total title="総メモ数" />


### すべてのメモ

<DataTable data={user_memos}>
    <Column id=title title="タイトル" />
    <Column id=content title="内容" wrap=true />
    <Column id=created_at title="作成日時" />
    <Column id=updated_at title="更新日時" />
</DataTable>

### 作成日時グラフ

```sql memo_timeline
SELECT 
    DATE(created_at) as date,
    COUNT(*) as count
FROM memos
WHERE user_id = '${params.user_id}'
GROUP BY DATE(created_at)
ORDER BY date
```

<BarChart data={memo_timeline} x=date y=count></BarChart>

### 詳細
{#each user_memos as memo}
#### {memo.title}

> {memo.content}

作成: {memo.created_at} | 更新: {memo.updated_at}

---
{/each}
