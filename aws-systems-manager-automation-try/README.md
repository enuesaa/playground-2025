# Systems Manager Automation

- 存在は知っていた
- Step Functions みたいなやつ
- 実際に触ってみると、UI はまんま Step Functions だった。たぶん同じチームが作っている
- 定義 (ASL) は、全然違う。
  - アクションも似ているものはあるが、識別子が異なる
  - 普通に aws api もよべる
  - 待機もできる（がアクション名は step functions と異なり aws:sleep というやつだった）
- Step Functions の場合、IAM Role の指定はあくまで AWS リソースの設定であるが、Automation では、yml で指定できる。
  下記の `assumeRole` というフィールド
- 肌感 CloudFormation を書いている気分になった
  - parameter とかがあるからだと思う
- 変数が使える
  - https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/automation-branch-condition.html#branch-action-output
- 実行時のUIは簡素
  - シンプルにテーブル形式
  - Step Functions みたいに左に図がない

## サンプル
これを Automation にした
https://lab.enuesaa.dev/prototype/aws-ec2-instance-setup-with-stepfunctions

```yml
schemaVersion: '0.3'
description: EC2を起動してコマンド実行後、10分後に削除するワークフロー
parameters:
  AutomationAssumeRole:
    type: String
    description: (Optional) Automation が使用する IAM ロール ARN
  ImageId:
    type: String
    description: AMI ID
  InstanceType:
    type: String
    description: EC2インスタンスタイプ
  SubnetId:
    type: String
    description: Subnet ID
  SecurityGroupId:
    type: String
    description: セキュリティグループ ID
  InstanceProfileName:
    type: String
    description: IAM Instance Profile 名
  SNSTopicArn:
    type: String
    description: 通知先SNSトピック ARN
assumeRole: '{{ AutomationAssumeRole }}'
mainSteps:
  - name: StartEC2
    action: aws:executeAwsApi
    nextStep: WaitEC2InstanceStartUp
    isEnd: false
    inputs:
      Service: ec2
      Api: RunInstances
      ImageId: '{{ ImageId }}'
      InstanceType: '{{ InstanceType }}'
      MinCount: 1
      MaxCount: 1
      SubnetId: '{{ SubnetId }}'
      SecurityGroupIds:
        - '{{ SecurityGroupId }}'
      IamInstanceProfile:
        Name: '{{ InstanceProfileName }}'
      TagSpecifications:
        - ResourceType: instance
          Tags:
            - Key: Name
              Value: dev
    outputs:
      - Name: InstanceId
        Selector: $.Instances[0].InstanceId
        Type: String
  - name: WaitEC2InstanceStartUp
    action: aws:sleep
    nextStep: RunCommand
    isEnd: false
    inputs:
      Duration: PT1M
  - name: RunCommand
    action: aws:runCommand
    nextStep: Notify
    isEnd: false
    inputs:
      DocumentName: AWS-RunShellScript
      InstanceIds:
        - '{{ StartEC2.InstanceId }}'
      Parameters:
        commands:
          - apt update
          - apt install -y git
  - name: Notify
    action: aws:executeAwsApi
    nextStep: WaitTenMinutes
    isEnd: false
    inputs:
      Service: sns
      Api: Publish
      TopicArn: '{{ SNSTopicArn }}'
      Message: EC2インスタンスが立ち上がり、コマンド実行が完了しました
  - name: WaitTenMinutes
    action: aws:sleep
    nextStep: TerminateInstance
    isEnd: false
    inputs:
      Duration: PT10M
  - name: TerminateInstance
    action: aws:executeAwsApi
    isEnd: true
    inputs:
      Service: ec2
      Api: TerminateInstances
      InstanceIds:
        - '{{ StartEC2.InstanceId }}'
```

## Step Functions との使い分け
Automation はコマンドやスクリプトを実行できる。ケースによっては Automation のほうが便利だと思う

```yml
  - name: RunScript
    action: aws:executeScript
    nextStep: InvokeWebhook
    isEnd: false
    inputs:
      Runtime: python3.8
      Handler: script_handler
      Script: |-
        def script_handler(events, context):
          print('hello world')
          # print(events["parameter"])
          return {'message': 'Hello'}
```

EC2 前提で、Systems Manager を使う機会があるのであれば、Automation を検討してもいいかも。

## Links
- https://moderniser.repo.cont-aid.com/Thorough-explanation-of-SSM-Automation's-aws:executeScript-action.html
