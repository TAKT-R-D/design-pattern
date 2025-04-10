interface ExporterPrototype {
  clone(): ExporterPrototype;
  export(data: string): void;
}

class PdfExporter implements ExporterPrototype {
  constructor(private withLog: boolean = false) {}

  clone(): ExporterPrototype {
    return new PdfExporter(this.withLog);
  }

  export(data: string): void {
    if (this.withLog) console.log("開始ログ");
    console.log(`PDF出力: ${data}`);
    if (this.withLog) console.log("完了ログ");
  }

  enableLogging(): void {
    this.withLog = true;
  }
}

// 利用例
const baseExporter = new PdfExporter();
baseExporter.enableLogging();

const cloned = baseExporter.clone();
cloned.export("請求書");
