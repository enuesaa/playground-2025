import streamlit as st
from app.a import aa

import streamlit as st
import pandas as pd
import streamlit as st
import pandas as pd
import altair as alt

# アクセスログ（IPなし）
logs = [
    {"time": "2025-07-13 16:50:01", "method": "GET", "path": "/query?operation_name=aaa", "status": 200, "response_time": 12.4},
    {"time": "2025-07-13 16:51:22", "method": "POST", "path": "/api/data", "status": 500, "response_time": 85.1},
    {"time": "2025-07-13 16:52:45", "method": "OPTIONS", "path": "/auth/check", "status": 204, "response_time": 3.5},
    {"time": "2025-07-13 16:53:01", "method": "GET", "path": "/health", "status": 200, "response_time": 1.2},
]

df = pd.DataFrame(logs)

st.title("📊 アクセスログビューア")

# --- フィルター ---
with st.sidebar:
    st.header("🔍 フィルター")

    method = st.selectbox("HTTPメソッド", ["ALL"] + sorted(df["method"].unique()))
    status = st.selectbox("ステータスコード", ["ALL"] + sorted(map(str, df["status"].unique())))
    path_contains = st.text_input("パスに含まれる文字列", "")

# --- フィルター適用 ---
filtered_df = df.copy()

if method != "ALL":
    filtered_df = filtered_df[filtered_df["method"] == method]

if status != "ALL":
    filtered_df = filtered_df[filtered_df["status"].astype(str) == status]

if path_contains:
    filtered_df = filtered_df[filtered_df["path"].str.contains(path_contains)]

# --- 表示 ---
st.dataframe(filtered_df, use_container_width=True)

st.subheader("📈 レスポンスタイム（パス別）")
bar_chart = alt.Chart(filtered_df).mark_bar().encode(
    x=alt.X("path:N", title="パス"),
    y=alt.Y("response_time:Q", title="レスポンスタイム（ms）"),
    tooltip=["path", "response_time"]
)
st.altair_chart(bar_chart, use_container_width=True)

st.subheader("📉 レスポンスタイムの時系列")
line_chart = alt.Chart(filtered_df).mark_line(point=True).encode(
    x=alt.X("time:T", title="時間"),
    y=alt.Y("response_time:Q", title="レスポンスタイム（ms）"),
    color="method:N",
    tooltip=["time", "method", "response_time"]
)
st.altair_chart(line_chart, use_container_width=True)

st.subheader("📊 ステータスコードの分布")
status_chart = alt.Chart(filtered_df).mark_bar().encode(
    x=alt.X("status:N", title="ステータスコード"),
    y=alt.Y("count():Q", title="件数"),
    tooltip=["status", "count()"]
)
st.altair_chart(status_chart, use_container_width=True)
