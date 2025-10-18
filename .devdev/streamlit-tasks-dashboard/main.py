import streamlit as st
import mysql.connector
import pandas as pd

def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="password",
        database="app",
    )

def get_users():
    conn = get_connection()
    df = pd.read_sql("SELECT id, name, email, created_at FROM users ORDER BY id", conn)
    conn.close()
    return df

def get_tasks_by_user(user_id):
    conn = get_connection()
    query = """
    SELECT t.id, t.title, t.content, t.is_done, c.name AS category, t.created_at
    FROM tasks t
    LEFT JOIN categories c ON t.category_id = c.id
    WHERE t.user_id = %s
    ORDER BY t.created_at DESC
    """
    df = pd.read_sql(query, conn, params=(user_id,))
    conn.close()
    return df

st.set_page_config(page_title="メモ帳ダッシュボード", layout="wide")

st.title("🗒️ メモ帳ダッシュボード")

users_df = get_users()

# --- Step 1: ユーザー一覧 ---
st.sidebar.header("👤 ユーザー一覧")
selected_user = st.sidebar.radio(
    "ユーザーを選択してください",
    options=users_df["id"],
    format_func=lambda x: users_df.loc[users_df["id"] == x, "name"].values[0],
)

# --- Step 2: 選択ユーザーのタスク表示 ---
user_name = users_df.loc[users_df["id"] == selected_user, "name"].values[0]
st.subheader(f"📋 {user_name} さんのタスク一覧")

tasks_df = get_tasks_by_user(selected_user)

# --- カテゴリフィルタ ---
categories = ["すべて"] + sorted(tasks_df["category"].dropna().unique().tolist())
selected_cat = st.selectbox("カテゴリで絞り込み", categories)

if selected_cat != "すべて":
    tasks_df = tasks_df[tasks_df["category"] == selected_cat]

# --- 表示 ---
st.dataframe(
    tasks_df[["title", "category", "is_done", "created_at"]],
    use_container_width=True,
)

# --- 統計など ---
done_count = tasks_df["is_done"].sum()
total = len(tasks_df)
st.metric("完了済みタスク", f"{done_count}/{total}")
