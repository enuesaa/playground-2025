import boto3
from langchain_huggingface import HuggingFaceEmbeddings
from pprint import pp

embedding_model = HuggingFaceEmbeddings(model_name='sentence-transformers/all-mpnet-base-v2')
embedding = embedding_model.embed_query("歴史を学べる場所")
pp(embedding)

s3vectors = boto3.client('s3vectors', region_name='us-east-1')

results = s3vectors.query_vectors(
    vectorBucketName='my-s3-vector',
    indexName='mytest2',
    queryVector={"float32": embedding}, # これ渡し方間違っているかも
    topK=5, 
    returnDistance=True,
    returnMetadata=True
)
pp(results)
