from fastmcp import FastMCP

mcp = FastMCP("Demo 🚀")

@mcp.tool
def greet(name: str) -> str:
    return f"Hello, {name}!"

@mcp.tool
def list_tasks(year: int) -> list[str]:
    """list up my tasks in the year."""

    if year == 2020:
        return ["電車に乗る", "花火を見る", "歩く"]
    if year == 2021:
        return ["走る"]
    if year == 2022:
        return []
    if year == 2023:
        return ["メールを見る", "返信する", "記事を書く"]
    if year == 2024:
        return ["休憩"]
    if year == 2025:
        return ["会話する", "山に登る"]
    return []

def main():
    mcp.run(transport="stdio")
