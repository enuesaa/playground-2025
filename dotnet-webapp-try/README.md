# dotnet web app

- .NET (ASP.NET)
- 言語としては C# で、そのフレームワークが .NET のはず
- 意外にもすぐ動いた。

### インストール
```bash
$ brew install dotnet-sdk
$ dotnet --version
10.0.100
```

### init
```bash
$ dotnet new web -o dotnet-webapp-try

.NET 10.0 へようこそ!
---------------------
SDK バージョン: 10.0.100

テレメトリ
---------
.NET ツールは、エクスペリエンスの向上のために利用状況データを収集します。データは Microsoft によって収集され、コミュニティと共有されます。テレメトリをオプトアウトするには、好みのシェルを使用して、DOTNET_CLI_TELEMETRY_OPTOUT 環境変数を '1' または 'true' に設定できます。

.NET CLI ツールのテレメトリの詳細をご覧ください: https://aka.ms/dotnet-cli-telemetry

$ tree
.
├── appsettings.Development.json
├── appsettings.json
├── bin
│   └── Debug
│       └── net10.0
│           ├── appsettings.Development.json
│           ├── appsettings.json
│           ├── dotnet-webapp-try
│           ├── dotnet-webapp-try.deps.json
│           ├── dotnet-webapp-try.dll
│           ├── dotnet-webapp-try.pdb
│           ├── dotnet-webapp-try.runtimeconfig.json
│           └── dotnet-webapp-try.staticwebassets.endpoints.json
├── dotnet-webapp-try.csproj
├── obj
│   ├── Debug
│   │   └── net10.0
│   │       ├── apphost
│   │       ├── dotnet-webapp-try.AssemblyInfo.cs
│   │       ├── dotnet-webapp-try.AssemblyInfoInputs.cache
│   │       ├── dotnet-webapp-try.assets.cache
│   │       ├── dotnet-webapp-try.csproj.CoreCompileInputs.cache
│   │       ├── dotnet-webapp-try.csproj.FileListAbsolute.txt
│   │       ├── dotnet-webapp-try.dll
│   │       ├── dotnet-webapp-try.GeneratedMSBuildEditorConfig.editorconfig
│   │       ├── dotnet-webapp-try.genruntimeconfig.cache
│   │       ├── dotnet-webapp-try.GlobalUsings.g.cs
│   │       ├── dotnet-webapp-try.MvcApplicationPartsAssemblyInfo.cache
│   │       ├── dotnet-webapp-try.pdb
│   │       ├── dotnet-webapp-try.sourcelink.json
│   │       ├── ref
│   │       │   └── dotnet-webapp-try.dll
│   │       ├── refint
│   │       │   └── dotnet-webapp-try.dll
│   │       ├── rjsmcshtml.dswa.cache.json
│   │       ├── rjsmrazor.dswa.cache.json
│   │       ├── rpswa.dswa.cache.json
│   │       ├── staticwebassets
│   │       ├── staticwebassets.build.endpoints.json
│   │       ├── staticwebassets.build.json
│   │       ├── staticwebassets.build.json.cache
│   │       └── swae.build.ex.cache
│   ├── dotnet-webapp-try.csproj.nuget.dgspec.json
│   ├── dotnet-webapp-try.csproj.nuget.g.props
│   ├── dotnet-webapp-try.csproj.nuget.g.targets
│   ├── project.assets.json
│   └── project.nuget.cache
├── Program.cs
├── Properties
│   └── launchSettings.json
└── README.md
```

.gitignore の生成
```bash
$ dotnet new gitignore
```

### run
```bash
➜ dotnet run

/dotnet-webapp-try/Properties/launchSettings.json からの起動設定を使用中...
ビルドしています...
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5237
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: /dotnet-webapp-try
```
