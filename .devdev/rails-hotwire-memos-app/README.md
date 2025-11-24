# rails hotwire memos app

## Commands
```bash
docker compose up
```

### migration
```bash
# generate
rails g migration create_memos

# status
rails db:migrate:status

# migrate
rails db:migrate
```

### model
```bash
# generate
rails g model Memo title:text content:text --skip-migration
```
