import requests
import httpx
import aiohttp
import asyncio

def fetch_requests():
    res = requests.get("https://httpbin.org/get", params={"q": "hello"})
    print('requests', res.status_code)

async def fetch_httpx():
    async with httpx.AsyncClient() as client:
        res = await client.get("https://httpbin.org/get", params={"q": "hello"})
        print('httpx', res.status_code)

async def fetch_aiohttp():
    async with aiohttp.ClientSession() as session:
        async with session.get("https://httpbin.org/get", params={"q": "hello"}) as res:
            print('aiohttp', res.status)

async def fetchall():
    fetch_requests()
    await fetch_httpx()
    await fetch_aiohttp()

asyncio.run(fetchall())
