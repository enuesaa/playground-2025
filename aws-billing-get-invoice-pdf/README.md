# AWS Get Invoice PDF API

- 請求書のPDFを取得するAPI
  - https://aws.amazon.com/jp/about-aws/whats-new/2025/11/get-invoice-pdf-api/
  - 地味に気になっていた
  - 2025年11月19日追加
- API は us-east-1 だけ
- aws cli ではリージョンを気にする必要なさそう
  - ap-northeast-1 でもよべた。
- 呼ぶ際には invoice-id が必要
  - AWS コンソールで確認できる。
  - 請求書にしれっとIDが書かれてた。初めて見たかも
- レスポンスに含まれるデータは S3 の署名付きURLっぽい
  - URLをクリックしたらダウンロードできた

```bash
➜ aws invoicing  get-invoice-pdf --invoice-id JPIN11-xxxxxx
{
    "InvoicePDF": {
        "InvoiceId": "JPIN11-xxxxxx",
        "DocumentUrl": "https://khipus-statement-documents-us-east-1-prod.s3.us-east-1.amazonaws.com/StatementDocuments/xxxxxx",
        "DocumentUrlExpirationDate": "2025-12-08T21:57:38.270000+09:00",
        "SupplementalDocuments": []
    }
}
```

地味に便利だろうなあ。

## Links
- https://aws.amazon.com/jp/about-aws/whats-new/2025/11/get-invoice-pdf-api/
- https://docs.aws.amazon.com/cli/latest/reference/invoicing/get-invoice-pdf.html
