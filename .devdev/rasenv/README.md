# rasenv
Ansible playbook for raspberry pi (ubuntu)

### Commands
```bash
apt update
apt install ansible

git clone https://github.com/enuesaa/playground-2025
cd playground-2025/.devdev/rasenv
ansible-playbook playbook.yml
```

### TODO

音を鳴らすのに必要
```bash
apt install -y pkg-config libasound2-dev libssl-dev libpulse-dev libdbus-1-dev portaudio19-dev alsa-utils

amixer sset 'PCM' 50%
```

8bitdo のペアリング
```bash
apt install -y bluetooth bluez

bluetoothctl
> power on
> scan on
> connect xx:xx
> trust xx:xx
> pair xx:xx
> info xx:xx
```

playwright を動かすのに必要
```bash
apt install -y libxcb-shm0 libxrandr2 libxcomposite1 libxcursor1 libxdamage1 libxfixes3 libxi6 libgtk-3-0t64 libpangocairo-1.0-0 libpango-1.0-0 libatk1.0-0t64 libcairo-gobject2 libcairo2 libgdk-pixbuf-2.0-0 libxrender1 libfreetype6 libfontconfig1
```

taskhop
```bash
curl -sL https://github.com/enuesaa/taskhop/releases/download/v0.1.1/install.sh | bash
```
