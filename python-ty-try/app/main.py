
def main():
    print("aa")

    ret = hello()
    print(ret)

    # これは検知できる
    a: str = 1

    ret2 = hello2()
    print(ret2)

def hello() -> str:
    return "a"


# これ検知できないっぽい
def hello2() -> dict[str, str]:
    return {"a": "b", "b": 1}
