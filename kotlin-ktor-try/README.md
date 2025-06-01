# kotlin ktor

- ServerSide Kotlin のフレームワーク
- JetBrain が作ったらしい
- Project Generator というページが公式にあり、そこでコードを生成した。
  - https://start.ktor.io/settings
- そのまま `./gradlew run` すると :8080 にサーバが立ち上がり動作した
- routing とかみてるけど、微妙に文法が分からないな

下記は Project Generator が生成した README のコピペ

### Commands

| Task                                    | Description                                                          |
|-----------------------------------------|---------------------------------------------------------------------- |
| `./gradlew test`                        | Run the tests                                                        |
| `./gradlew build`                       | Build everything                                                     |
| `./gradlew run`                         | Run the server                                                       |

If the server starts successfully, you'll see the following output:

```
2024-12-04 14:32:45.584 [main] INFO  Application - Application started in 0.303 seconds.
2024-12-04 14:32:45.682 [main] INFO  Application - Responding at http://0.0.0.0:8080
```

