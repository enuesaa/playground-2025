from openai import OpenAI

APIKEY=''

def main():
    print('a')

    client = OpenAI(api_key=APIKEY)
    completion = client.chat.completions.create(
        model="gpt-4o-mini-search-preview",
        web_search_options={},
        messages=[
            {
                "role": "user",
                "content": "記事の概要と、反応(コメント)をまとめて。",
            }
        ],
    )
    print(completion)
    print(completion.choices[0].message.content)

