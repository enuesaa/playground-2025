import boto3
from langchain_huggingface import HuggingFaceEmbeddings
from pprint import pp

texts = [
    "東京は、伝統と最先端技術が共存する都市で、築地市場や渋谷のスクランブル交差点が有名です。",
    "パリは芸術と歴史にあふれる街で、エッフェル塔やルーヴル美術館が世界中から観光客を惹きつけています。",
    "ニューヨークは眠らない街として知られ、タイムズスクエアやセントラルパークが象徴的な存在です。",
    "イスタンブールはアジアとヨーロッパの境界に位置し、歴史的なモスクやバザールが魅力です。",
    "リオデジャネイロでは、キリスト像が山の上から街を見守っており、カーニバルの時期には街全体が熱狂に包まれます。",
    "シドニーはオペラハウスやビーチで知られ、自然と都市生活が融合したライフスタイルが特徴です。",
    "カイロはナイル川とピラミッドの街で、古代エジプト文明の痕跡を今に伝えています。",
    "ケープタウンはテーブルマウンテンに囲まれた美しい海沿いの都市で、多様な文化が共存しています。",
    "バンコクは活気あるナイトマーケットや寺院が魅力の都市で、屋台料理も世界的に有名です。",
    "ヘルシンキはデザインと静けさを重視する街で、北欧らしいミニマリズムが日常に根付いています。",
]

embedding_model = HuggingFaceEmbeddings(model_name='sentence-transformers/all-mpnet-base-v2')
embeddings = embedding_model.embed_documents(texts)

vectors = []
for idx, (text, embedding) in enumerate(zip(texts, embeddings), start=1):
    vector = {
        "key": str(idx),
        "data": {
            "float32": embedding,
        },
        "metadata": {
            "id": str(idx),
            "source_text": text
        }
    }
    vectors.append(vector)
    pp(vector)

s3vectors = boto3.client('s3vectors', region_name='us-east-1')

result = s3vectors.put_vectors(
    vectorBucketName='my-s3-vector',
    indexName='mytest2', 
    vectors=vectors
)
pp(result)
