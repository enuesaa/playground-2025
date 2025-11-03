# dev

# pidstat
```bash
dnf install -y sysstat
```
```bash
$ pidstat -p ALL 5

Linux 6.8.0-36-generic (host) 	11/03/2025 	_x86_64_	(8 CPU)

10:33:05      UID       PID    %usr %system  %guest   %wait    %CPU   CPU  Command
10:33:10     1000      1147    0.00    0.00    0.00    0.00    0.00     0  bash
10:33:10     1000      3178    0.10    0.00    0.00    0.00    0.10     2  gnome-shell
```

ざっくりこんな感じ
