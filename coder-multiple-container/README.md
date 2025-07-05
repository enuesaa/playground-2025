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
terraform apply
```
