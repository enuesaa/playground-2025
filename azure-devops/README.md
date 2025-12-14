# azure devops

- azure の CI/CD
- azure からは独立しているっぽい
  - たぶんクロスアカウントで利用できるようにってことだと思う
  - azure の請求に紐づく
  - ユーザー追加もできるっぽいけど、どのレベルかわからないな。EntraID にも追加されるんだろうか
- Organization > Project > Repos/Pipeline/Boards という構成
  - Project が git repo に相当
  - git repo に pipeline が自動でついてくる感じ
  - 複数リポジトリってありがちだと思うが、その場合は Project が別れるから あるプロジェクトを正と扱って Board はそっちに集約みたいに運用するのだろうか
- Repos は GitHub にちかい
  - UI はぜんぜん似てないけど、構成要素は一緒
  - PR の画面とか、情報の配置場所が同じ
  - でもデザインは独自。まったく似てない。真っ白い
- Pipelineには無料枠がある
  - が、申請しないと使えない
  - `##[error]No hosted parallelism has been purchased or granted. To request a free parallelism grant, please fill out the following form https://aka.ms/azpipelines-parallelism-request`
