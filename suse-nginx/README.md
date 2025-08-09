# SUSE Nginx

- SUSE Linux Enterprise Server
- 初めて。
- とりあえず nginx を立ててみる

## Commands
apt update 的な
```console
$ zypper refresh
Retrieving repository 'SLE-Module-Basesystem15-SP7-Updates' metadata ...........................................................................[done]
Building repository 'SLE-Module-Basesystem15-SP7-Updates' cache ................................................................................[done]
Retrieving repository 'SLE-Module-Confidential-Computing-15-SP7-Updates' metadata ..............................................................[done]
```

nginx をインストール

```console
$ zypper install nginx
Refreshing service 'Basesystem_Module_x86_64'.
Refreshing service 'Confidential_Computing_Module_x86_64'.
```

systemd で起動

```console
$ systemctl start nginx
$ systemctl status nginx
● nginx.service - The nginx HTTP and reverse proxy server
     Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; preset: disabled)
     Active: active (running) since Sat 2025-08-09 07:36:22 UTC; 8min ago
    Process: 3032 ExecStartPre=/usr/sbin/nginx -t (code=exited, status=0/SUCCESS)
   Main PID: 3033 (nginx)
      Tasks: 2
        CPU: 83ms
     CGroup: /system.slice/nginx.service
             ├─3033 "nginx: master process /usr/sbin/nginx -g daemon off;"
             └─3035 "nginx: worker process"
```

nginx のrootが /srv/www/htdocs だった。suse ではここらしい。
