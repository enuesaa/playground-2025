# Python Flask

実行結果
```bash
➜ curl -N http://localhost:3000/events -v
* Host localhost:3000 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:3000...
* connect to ::1 port 3000 from ::1 port 58696 failed: Connection refused
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000
> GET /events HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< Server: Werkzeug/3.1.3 Python/3.13.3
< Date: Mon, 29 Sep 2025 09:07:38 GMT
< Content-Type: text/event-stream; charset=utf-8
< Transfer-Encoding: chunked
< Connection: close
<
data: {"time": "2025-09-29 18:07:38", "count": 1}

data: {"time": "2025-09-29 18:07:39", "count": 2}

data: {"time": "2025-09-29 18:07:40", "count": 3}

data: {"time": "2025-09-29 18:07:41", "count": 4}

data: {"time": "2025-09-29 18:07:42", "count": 5}
```
