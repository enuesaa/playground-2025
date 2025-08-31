# rv

- ruby のバージョン管理ツール
- ruby のインストールが一瞬で終わる
- まだ作り途中らしい
  - .ruby-version をみてくれない
  - gem の管理もまだ
- python の uv インスピレーション

```bash
$ brew install rv
$ rv ruby install 3.4.5
```

## help
```bash
➜ rv -h
Ruby version management, but fast

Usage: rv [OPTIONS] [COMMAND]

Commands:
  ruby   Manage Ruby versions and installations
  cache  Manage rv's cache
  shell  Configure your shell to use rv
  help   Print this message or the help of the given subcommand(s)

Options:
      --ruby-dir <RUBY_DIR>        Ruby directories to search for installations
      --project-dir <PROJECT_DIR>
      --gemfile <GEMFILE>          Path to Gemfile [env: BUNDLE_GEMFILE=]
  -v, --verbose...                 Increase logging verbosity
  -q, --quiet...                   Decrease logging verbosity
      --color <COLOR>              [env: RV_COLOR=] [possible values: auto, always, never]
  -h, --help                       Print help (see more with '--help')
  -V, --version                    Print version

Cache Options:
  -n, --no-cache               Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation [env: RV_NO_CACHE=]
      --cache-dir <CACHE_DIR>  Path to the cache directory [env: RV_CACHE_DIR=]
```

## Links
- https://softantenna.com/blog/rv/ 
- https://github.com/spinel-coop/rv/blob/main/README.md
