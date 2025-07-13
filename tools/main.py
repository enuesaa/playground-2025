from streamlit.web import cli
import os


def dev():
    apppath = os.path.abspath("./app")
    print(apppath)
    cli.main_run(["app/main.py", "--server.folderWatchList", apppath])
