# PHP 8.5 Pipeline Operator

## PHP のソースをビルドする方法

docker で debian:bullseye を立てる

```console
$ apt update
$ apt install -y git

### for php-src
### see https://github.com/php/php-src
$ apt install -y pkg-config build-essential autoconf bison re2c libxml2-dev libsqlite3-dev

$ git clone https://github.com/php/php-src
$ cd php-src

### これ --force が必要かも。php8.5 beta1 では --force が必要だった
$ ./buildconf
buildconf: Checking installation
buildconf: autoconf version 2.69 (ok)
buildconf: Cleaning cache and configure files
buildconf: Rebuilding configure
buildconf: Rebuilding main/php_config.h.in
buildconf: Run ./configure to proceed with customizing the PHP build.

### Makefile を生成するらしい
$ ./configure

$ make -j4
$ make test

$ make install
Installing shared extensions:     /usr/local/lib/php/extensions/no-debug-non-zts-20240925/
Installing PHP CLI binary:        /usr/local/bin/
Installing PHP CLI man page:      /usr/local/php/man/man1/
Installing phpdbg binary:         /usr/local/bin/
Installing phpdbg man page:       /usr/local/php/man/man1/
Installing PHP CGI binary:        /usr/local/bin/
Installing PHP CGI man page:      /usr/local/php/man/man1/
Installing build environment:     /usr/local/lib/php/build/
Installing header files:          /usr/local/include/php/
Installing helper programs:       /usr/local/bin/
  program: phpize
  program: php-config
Installing man pages:             /usr/local/php/man/man1/
  page: phpize.1
  page: php-config.
  
$ php -v
PHP 8.5.0-dev (cli) (built: Jul 10 2025 14:21:57) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.5.0-dev, Copyright (c) Zend Technologies
```

## Pipeline Operator
8.5 で導入

```php
<?php

$list = ['a', 'b', 'c', 'd', 'a', 'e'];

$ret1 = array_unique($list);
var_dump($ret1);

$ret2 = array_values(array_unique($list));
var_dump($ret2);

$ret3 = $list
        |> array_unique(...)
        |> array_values(...);
var_dump($ret3);

# これはダメみたい。
#$ret4 = $list
#       |> array_filter(..., function(string $x) {
#               return $x === 'd';
#       });
#var_dump($ret4);

# array_filter のばあい、こう書くしかない。
$ret5 = $list
        |> fn(array $a) => array_filter($a, fn(string $x) => $x === 'd');
var_dump($ret5);

# これもだめ
#$ret6 = $list
#       |> array_unique
#       |> array_values;
#var_dump($ret6);
```

- Elixirスタイル とか提案あったらしいけど、reject された。
  - 比較的、限定的な印象

## Links
- https://qiita.com/rana_kualu/items/72434273d20f05fdbd7a
