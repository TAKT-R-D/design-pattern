// コンポーネントインターフェース
interface Exporter {
  export(data: string): void;
}

// 具象コンポーネント
class PdfExporter implements Exporter {
  export(data: string): void {
    console.log(`PDF出力: ${data}`);
  }
}

class CsvExporter implements Exporter {
  export(data: string): void {
    console.log(`CSV出力: ${data}`);
  }
}

// デコレータ（共通機能）
class LoggingExporter implements Exporter {
  constructor(private wrapped: Exporter) {}

  export(data: string): void {
    console.log("開始ログ");
    this.wrapped.export(data);
    console.log("完了ログ");
  }
}

// 利用例
const pdf = new LoggingExporter(new PdfExporter());
pdf.export("帳票データ");

const csv = new LoggingExporter(new CsvExporter());
csv.export("ユーザー一覧");
