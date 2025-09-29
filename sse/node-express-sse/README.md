# Node.js Express

実行結果
```bash
➜ curl -N http://localhost:3000/events -v
* Host localhost:3000 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> GET /events HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/event-stream
< Cache-Control: no-cache
< Date: Mon, 29 Sep 2025 09:00:24 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
<
data: {"time":"2025-09-29T09:00:24.579Z","count":1}

data: {"time":"2025-09-29T09:00:25.580Z","count":2}

data: {"time":"2025-09-29T09:00:26.581Z","count":3}

data: {"time":"2025-09-29T09:00:27.582Z","count":4}

data: {"time":"2025-09-29T09:00:28.584Z","count":5}
```
