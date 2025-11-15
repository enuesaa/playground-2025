# regresql

- SQL の結果セットを regression test するツール
- PostgreSQL 向け
- カレントディレクトリ配下にあるsqlファイルを読み取って、その sql を実行する
- なので実行するときはディレクトリを決めた方が良い
- ディレクトリ構成はよくあるやつと変わらないと思う
  - expected
  - out
  - plans ... これだけよくわかってない

## Install
```bash
go install github.com/dimitri/regresql@latest
```

## Commands
```bash
regresql init 'postgres://postgres:postgres@localhost:5432/app?sslmode=disable'
```

```bash
$ regresql update
Connecting to 'postgres://postgres:postgres@localhost:5432/app?sslmode=disable'… ✓
Writing expected Result Sets:
  regresql/expected/queries
    get_tasks_users.out
    get_users.out

Expected files have now been created.
You can run regression tests for your SQL queries with the command

  regresql test

When you add new queries to your code repository, run 'regresql plan' to
create the missing test plans, edit them to add test parameters, and then
run 'regresql update' to have expected data files to test against.

If you change the expected result set (because picking a new data set or
because new requirements impacts the result of existing queries, you can run
the regresql update command again to reset the expected output files.
```

```bash
$ regresql test
Connecting to 'postgres://postgres:postgres@localhost:5432/app?sslmode=disable'… ✓
TAP version 13
Creating directory 'regresql/out/queries'
ok 1 - queries/get_tasks_users.out
ok 2 - queries/get_users.out
```

## Links
- https://github.com/dimitri/regresql
