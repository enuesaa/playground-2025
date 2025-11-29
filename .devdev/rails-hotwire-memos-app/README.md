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

# put seed data
rails db:seed
```

### model
```bash
# generate
rails g model Memo title:text content:text --skip-migration
```

### controller など
```bash
# generate
rails g scaffold Memo title:text content:text
```

## Links
- https://www.hotrails.dev/turbo-rails/crud-controller-ruby-on-rails
- https://zenn.dev/shita1112/books/cat-hotwire-turbo/viewer/turbo-drive
