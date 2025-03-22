from openai import OpenAI

APIKEY=''

def main():
    print('a')

    # 記事の概要を出力するよう書いているが、これでは記事の面白い部分を拾えず、丸められてしまい、モチベーション維持できないと感じた

    client = OpenAI(api_key=APIKEY)
    completion = client.chat.completions.create(
        model="gpt-4o-mini-search-preview",
        web_search_options={},
        messages=[
            {
                "role": "user",
                "content": "この記事から面白い文章を取り出して紹介して。他人の記事の紹介という形式ではなく記事の著者が面白い文章だけ取り出しているふうに書いて。url:"
                # "content": "記事の概要と、反応(コメント)をまとめて。反応は、できるだけそのまま文字を書き起こして。反応は3件くらいでいい。",
            }
        ],
    )
    print(completion)
    print(completion.choices[0].message.content)
