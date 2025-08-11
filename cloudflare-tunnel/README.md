# Cloudflare Tunnel

EC2 に cloudflared をインストールして、reverse proxy できる

## Commands
ansible
```yaml
- name: cloudflared ... download deb
  ansible.builtin.get_url:
    url: https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
    dest: /tmp/cloudflared.deb
    mode: 0644

- name: cloudflared ... install
  ansible.builtin.apt:
    deb: /tmp/cloudflared.deb
```

で、この後に

```bash
cloudflared login # ブラウザでログイン
cloudflared tunnel run --token xxx
```
