# devenv
Ansible playbook for my dev env.

## Setup
```bash
curl -sL https://raw.githubusercontent.com/enuesaa/playground-2025/refs/heads/main/.devdev/devenv/setup.sh | bash
```

### Commands
```bash
apt update
apt install ansible

git clone https://github.com/example/a
cd a/.devdev/devenv
ansible-playbook playbook.yml
```
