#!/bin/bash
set -e

APPROVE=false
if [ "$1" == "y" ]; then
  APPROVE=true
fi

confirm() {
  if $APPROVE; then
    return 0
  fi
  read -p "Do you proceed? [y/n]: " yn
  if [ "$yn" = "y" ]; then
    return 0
  else
    return 1
  fi
}

echo "RUN: apt update"
confirm
apt update

echo "RUN: apt install -y ansible"
confirm
apt install -y ansible

echo "RUN: git clone https://github.com/enuesaa/playground-2025"
confirm
git clone https://github.com/enuesaa/playground-2025

cd playground-2025/.devdev/devenv || exit 1
echo "RUN: ansible-playbook playbook.yml"
confirm
ansible-playbook playbook.yml

echo "setup completed!"
