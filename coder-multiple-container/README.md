# coder

## Commands
postgres 立ち上げ
```bash
docker compose up
```

coder 立ち上げ
```bash
coder server --postgres-url "postgres://coder:coderpass@localhost:5432/coder?sslmode=disable" --access-url "http://127.0.0.1:3000"
```

テンプレート登録
```bash
cd templates
terraform init

# トークンをセット
echo 'token=""' > terraform.tfvars

# テンプレート登録
terraform apply
```

## 証明書付き
Coder Desktop でサインインするには Coder Server へ HTTPS へアクセスできるようにする必要ある

```bash
mkcert 127.0.0.1
# 127.0.0.1.pem, 127.0.0.1-key.pem が生成される

# Coder を立ち上げる時に証明書を指定する
# サーバーのポートが変わる
coder server --postgres-url "postgres://coder:coderpass@localhost:5432/coder?sslmode=disable" --tls-enable --tls-cert-file 127.0.0.1.pem --tls-key-file 127.0.0.1-key.pem --access-url "https://127.0.0.1:3443"
```

Coder Desktop は、ワークスペースの作成や、一覧、VS Code を開いたりできるっぽい
