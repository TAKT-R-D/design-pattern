// 要素インターフェース
interface Exportable {
  accept(visitor: ExportVisitor): void;
}

// Visitor インターフェース
interface ExportVisitor {
  visitPdf(pdf: PdfExporter): void;
  visitCsv(csv: CsvExporter): void;
  visitXml(xml: XmlExporter): void;
}

// 各要素（出力形式）
class PdfExporter implements Exportable {
  constructor(private data: string) {}

  export(): void {
    console.log(`PDF出力: ${this.data}`);
  }

  accept(visitor: ExportVisitor): void {
    visitor.visitPdf(this);
  }
}

class CsvExporter implements Exportable {
  constructor(private data: string) {}

  export(): void {
    console.log(`CSV出力: ${this.data}`);
  }

  accept(visitor: ExportVisitor): void {
    visitor.visitCsv(this);
  }
}

class XmlExporter implements Exportable {
  constructor(private data: string) {}

  export(): void {
    console.log(`XML出力: ${this.data}`);
  }

  accept(visitor: ExportVisitor): void {
    visitor.visitXml(this);
  }
}

// Visitor 実装：ログ付き出力
class LoggingVisitor implements ExportVisitor {
  visitPdf(pdf: PdfExporter): void {
    console.log("開始ログ");
    pdf.export();
    console.log("完了ログ");
  }

  visitCsv(csv: CsvExporter): void {
    console.log("開始ログ");
    csv.export();
    console.log("完了ログ");
  }

  visitXml(xml: XmlExporter): void {
    console.log("開始ログ");
    xml.export();
    console.log("完了ログ");
  }
}

// 利用例
const visitor = new LoggingVisitor();

const pdf = new PdfExporter("帳票データ");
pdf.accept(visitor);

const csv = new CsvExporter("ユーザー一覧");
csv.accept(visitor);
