# go-http-sse

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
< Cache-Control: no-cache
< Content-Type: text/event-stream
< Date: Mon, 29 Sep 2025 08:52:43 GMT
< Transfer-Encoding: chunked
<
data: {"time":"2025-09-29T17:52:43+09:00","count":1}

data: {"time":"2025-09-29T17:52:44+09:00","count":2}

data: {"time":"2025-09-29T17:52:45+09:00","count":3}

data: {"time":"2025-09-29T17:52:46+09:00","count":4}

data: {"time":"2025-09-29T17:52:47+09:00","count":5}
```
