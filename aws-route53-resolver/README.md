# Route53 Resolver

ずっと気になっていたやつ

- GraphQL の Resolver に概念は近い
- VPC を作ると、勝手にこれもできる
- VPC のなかで ネームサーバを resolve するのが Route53 Resolver
- オンプレと VPC を繋ぐときに、Private network のなかで名前解決するのが結構大変らしく、そのために Route53 Resolver インバウンドエンドポイントとかアウトバンドエンドポイントとかある
  - インバウンドエンドポイントというのは、オンプレ -> VPC
  - アウトバウンドエンドポイントは、VPC -> オンプレ
    で使う 
- よくよく考えたら Private Hosted Zone ってprivateだから vpc から見つけられないんだな
- で、だからなんか色々設定あるけど、実体は Route53 Resolver ってこと

- https://zenn.dev/fdnsy/articles/1b4933f719f98f
- https://speakerdeck.com/minorun365/amazon-route-53woyasasikuosarai?slide=41
