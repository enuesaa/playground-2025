import pyarrow as pa
from pyiceberg import catalog as icecatalog
from fastapi import FastAPI
from pprint import pp

app = FastAPI()
region = ""

catalog = icecatalog.load_catalog(
    "S3TablesCatalog",
    type="rest",
    warehouse="",
    uri=f"https://s3tables.{region}.amazonaws.com/iceberg",
    **{
        "rest.sigv4-enabled": "true",
        "rest.signing-name": "s3tables",
        "rest.signing-region": region,
    },
)
table = catalog.load_table("main.notes")
pp(table)

schema = pa.schema([
    pa.field('title', pa.string()),
    pa.field('description', pa.string()),
])

@app.post("/data")
def create():
    data = {
        "title": "aaa",
        "description": "bbb",
    }
    df = pa.Table.from_pylist([data], schema=schema)
    pp(df)
    table.append(df)

    return {"ok": True}

@app.get("/data")
def list():
    data = table.scan()
    df = data.to_pandas()
    pp(df)
    return {"data": len(df)}
