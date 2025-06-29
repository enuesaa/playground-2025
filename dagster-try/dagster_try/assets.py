from dagster import asset, MetadataValue
import pandas as pd

@asset
def raw_data():
    df = pd.DataFrame({"value": [1, 2, 3, 4, 5]})
    return df

@asset
def processed_data(context, raw_data: pd.DataFrame):
    df = raw_data.copy()
    df["squared"] = df["value"] ** 2
    context.add_output_metadata({
        "preview": MetadataValue.md(df.head().to_markdown())
    })
    return df
