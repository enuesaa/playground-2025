# AWS Migration Evaluator

- AWS へ移行する際のコストを試算するそういうサービス
- いわゆる TCO 分析
- Application Discovery Service は主に技術面。例えば依存関係とかネットワークを分析したり。
  - こっちは Agent (Linux/Windows) と Agentless Collector (vSphere) があるほう
  - 情報を出力して Athena に分析できるようにしたり。
  - あとは Migaration Hub でネットワークグラフにしたり。
  - https://pages.awscloud.com/rs/112-TZM-766/images/20220518_18th_ISV_DiveDeepSeminar_MigrationHub.pdf
- こっちも Agentless Collector がある
  - https://pages.awscloud.com/rs/112-TZM-766/images/AWS-05_RehostMigration_KMD34.pdf

## Links
- https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Black-Belt_2023_Discovery-Tool_0430_v1.pdf
