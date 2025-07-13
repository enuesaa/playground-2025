import streamlit as st
from app.a import aa

st.title(aa())
st.write("Hello")
st.error('this is error')

# サイドバー
with st.sidebar:
    st.write("hello")

names = st.multiselect(
    label='select one or two..',
    options=['a', 'b', 'c'],
    default=['a', 'b'],
    help='this is help text',
)

# 値を変更するたびに stdout される
# react みたいに再度 render しているのかな
print(names)

st.markdown(
    body='''# Hello
# hello
```js
const a = 'b';
```

''',
)

# snowflake のロゴが降ってくる
st.snow()
