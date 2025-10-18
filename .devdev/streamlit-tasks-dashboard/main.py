from sqlalchemy import create_engine
import streamlit as st
import pandas as pd

def get_engine():
    return create_engine("mysql+mysqlconnector://root:password@localhost/app")

def get_users() -> pd.DataFrame:
    engine = get_engine()
    query = "SELECT id, name, email, created_at FROM users ORDER BY id"
    with engine.connect() as conn:
        return pd.read_sql(query, conn)

def get_tasks_by_user(user_id: int) -> pd.DataFrame:
    engine = get_engine()
    query = """
        SELECT 
            t.id,
            t.title,
            c.name AS category,
            t.is_done,
            t.created_at
        FROM tasks t
        LEFT JOIN categories c ON t.category_id = c.id
        WHERE t.user_id = %s
        ORDER BY t.created_at DESC
    """
    with engine.connect() as conn:
        return pd.read_sql(query, conn, params=(user_id,))


# for streamlit
st.set_page_config(layout="wide")
st.title("🗒️ ダッシュボード")

users_df = get_users()

st.sidebar.header("👤 ユーザー一覧")
selected_user = st.sidebar.radio(
    "ユーザーを選択してください",
    options=users_df["id"],
    format_func=lambda x: users_df.loc[users_df["id"] == x, "name"].values[0], # type: ignore
)

# --- 選択ユーザーのタスク表示 ---
user_name = users_df.loc[users_df["id"] == selected_user, "name"].values[0] # type: ignore
st.subheader(f"📋 {user_name} さんのタスク一覧")

tasks_df = get_tasks_by_user(selected_user)

# --- カテゴリフィルタ ---
categories = ["すべて"] + sorted(tasks_df["category"].dropna().unique().tolist())
selected_cat = st.selectbox("カテゴリで絞り込み", categories)

if selected_cat != "すべて":
    tasks_df = tasks_df[tasks_df["category"] == selected_cat]

# --- タスク表示 ---
st.dataframe(
    tasks_df[["title", "category", "is_done", "created_at"]],
    width='stretch',
)

# --- 統計表示 ---
done_count = tasks_df["is_done"].sum()
total = len(tasks_df)
st.metric("完了済みタスク", f"{done_count}/{total}")

