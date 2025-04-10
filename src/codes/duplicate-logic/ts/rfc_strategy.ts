// Strategy インターフェース
interface ExportStrategy {
  exportData(data: string): void;
}

// 各出力形式（ConcreteStrategy）
class PdfExportStrategy implements ExportStrategy {
  exportData(data: string): void {
    console.log(`PDF出力: ${data}`);
  }
}

class CsvExportStrategy implements ExportStrategy {
  exportData(data: string): void {
    console.log(`CSV出力: ${data}`);
  }
}

class XmlExportStrategy implements ExportStrategy {
  exportData(data: string): void {
    console.log(`XML出力: ${data}`);
  }
}

// コンテキスト
class Exporter {
  constructor(private strategy: ExportStrategy) {}

  setStrategy(strategy: ExportStrategy): void {
    this.strategy = strategy;
  }

  export(data: string): void {
    console.log("開始ログ");
    this.strategy.exportData(data);
    console.log("完了ログ");
  }
}

// 利用例
const exporter = new Exporter(new PdfExportStrategy());
exporter.export("帳票データ");

exporter.setStrategy(new CsvExportStrategy());
exporter.export("ユーザー一覧");
