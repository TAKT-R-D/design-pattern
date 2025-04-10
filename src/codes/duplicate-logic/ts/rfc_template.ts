abstract class Exporter {
  export(data: string): void {
    console.log("開始ログ");
    this.doExport(data); // フックポイント（抽象メソッド）
    console.log("完了ログ");
  }

  protected abstract doExport(data: string): void;
}

class PdfExporter extends Exporter {
  protected doExport(data: string): void {
    console.log(`PDF出力: ${data}`);
  }
}

class CsvExporter extends Exporter {
  protected doExport(data: string): void {
    console.log(`CSV出力: ${data}`);
  }
}

class XmlExporter extends Exporter {
  protected doExport(data: string): void {
    console.log(`XML出力: ${data}`);
  }
}

// 利用例
const exporter = new CsvExporter();
exporter.export("データ123");
