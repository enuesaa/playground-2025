import marimo

__generated_with = "0.17.7"
app = marimo.App(width="medium")


@app.cell
def _():
    import pprint

    pprint.pprint('aaa')


    return


if __name__ == "__main__":
    app.run()
