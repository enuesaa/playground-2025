import streamlit as st
import pandas as pd
import altair as alt
from app.data import logs

st.title("📊 アクセスログビューア")


df = pd.DataFrame(logs)
methods = sorted(df["method"].unique())
statuses = sorted(map(str, df["status"].unique()))


with st.sidebar:
    st.header("🔍 フィルター")
    method = st.selectbox("HTTPメソッド", ["ALL"] + methods)
    status = st.selectbox("ステータスコード", ["ALL"] + statuses)
    path_prefix = st.text_input("パスのprefix", "")

filtered = df.copy()

if method != "ALL":
    filtered = filtered[filtered["method"] == method]

if status != "ALL":
    filtered = filtered[filtered["status"].astype(str) == status]

if path_prefix:
    filtered = filtered[filtered["path"].str.startswith(path_prefix)]

st.dataframe(filtered, use_container_width=True)

st.subheader("📈 レスポンスタイム（パス別）")
bar_chart = (
    alt.Chart(filtered)
    .mark_bar()
    .encode(
        x=alt.X("path:N", title="パス"),
        y=alt.Y("response_time:Q", title="レスポンスタイム（ms）"),
        tooltip=["path", "response_time"],
    )
)
st.altair_chart(bar_chart, use_container_width=True)

st.subheader("📉 レスポンスタイムの時系列")
line_chart = (
    alt.Chart(filtered)
    .mark_line(point=True)
    .encode(
        x=alt.X("time:T", title="時間"),
        y=alt.Y("response_time:Q", title="レスポンスタイム（ms）"),
        color="method:N",
        tooltip=["time", "method", "response_time"],
    )
)
st.altair_chart(line_chart, use_container_width=True)

st.subheader("📊 ステータスコードの分布")
status_chart = alt.Chart(filtered).mark_bar().encode(x=alt.X("status:N", title="ステータスコード"), y=alt.Y("count():Q", title="件数"), tooltip=["status", "count()"])
st.altair_chart(status_chart, use_container_width=True)
