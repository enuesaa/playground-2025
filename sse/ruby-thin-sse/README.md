# Ruby thin

実行方法

```bash
bundle install
bundle exec ruby app.rb
```

実行結果

```bash
➜ curl -N http://localhost:4567/events -v
* Host localhost:4567 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:4567...
* Connected to localhost (::1) port 4567
> GET /events HTTP/1.1
> Host: localhost:4567
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< Content-Type: text/event-stream;charset=utf-8
< Cache-Control: no-cache
< Connection: keep-alive
< X-Content-Type-Options: nosniff
< server: thin
<
* no chunk, no close, no size. Assume close to signal end
data: 2025-09-30 01:03:08 +0900 - message 0

data: 2025-09-30 01:03:09 +0900 - message 1

data: 2025-09-30 01:03:10 +0900 - message 2

data: 2025-09-30 01:03:11 +0900 - message 3

data: 2025-09-30 01:03:12 +0900 - message 4

data: 2025-09-30 01:03:13 +0900 - message 5
```