# replibyte

- DBのデータをダンプするツール
- 内部で pg_dump を操っている
- 別のdbへの restore もできる
- email や名前を匿名加工できる
  - email だと example.org に置き換わる程度
  - テストデータとして使うんだと思う
  - 加工処理をカスタムで組める。wasmにしてファイル指定し実行するみたい
- なんかサブコマンドが変わったみたいで、ドキュメントに揺らぎがある
- CLI自体は普通に安定的に動く
- s3 にダンプデータをおくが、どういう形式で圧縮しているかわからないから開けない

## Install
```bash
brew install Qovery/replibyte/replibyte
```

## Commands
```console
$ replibyte -c conf.yml dump create
⠁
⠒ [00:00:00] [###############################################################################################] 4.82KiB/4.82KiB (0s)
$ replibyte -c conf.yml dump list
 name               | size | when           | compressed | encrypted
--------------------+------+----------------+------------+-----------
 dump-1750588176757 | 1 kB | 4 seconds ago  | true       | false
 dump-1750588127669 | 1 kB | 53 seconds ago | true       | false
 dump-1750587677159 | 1 kB | 8 minutes ago  | true       | false
⠒
$ replibyte -c conf.yml dump restore remote --value dump-1750588176757
NOTICE:  drop cascades to 2 other objects
DETAIL:  drop cascades to table todos
drop cascades to table users
Restore successful!
```

## Links
- https://github.com/Qovery/Replibyte
