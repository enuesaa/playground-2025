import daft

df = daft.from_pydict({
    "A": [1, 2, 3, 4],
    "B": [1.5, 2.5, 3.5, 4.5],
    "C": [True, True, False, False],
    "D": [None, None, None, None],
})
df.show()

# df = daft.from_glob_path("s3://daft-public-data/laion-sample-images/*")

# df = df.with_column("image", df["path"].url.download().image.decode())
# df = df.with_column("resized", df["image"].image.resize(32, 32))

# df.show(3)
