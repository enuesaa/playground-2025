# migration

## Requirements

```bash
$ cargo install sea-orm-cli
```

## Generate migration file
```bash
$ tree -L 2
.
├── Cargo.lock
├── Cargo.toml
├── README.md
├── src
│   ├── main.rs
│   └── models
└── migration
    ├── src
    └── target
$ sea-orm-cli migrate generate create_executions_table
Generating new migration...
Creating migration file `./migration/src/m20250929_081344_create_executions_table.rs`
Adding migration `m20250929_081344_create_executions_table` to `./migration/src/lib.rs`
```
