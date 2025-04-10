// レガシーAPI（旧仕様）
class LegacyPrinter {
  printText(text: string): void {
    console.log(`*** ${text} ***`);
  }
}

// 新しいインターフェース
interface Printer {
  print(text: string): void;
}

// Adapter（旧APIをラップ）
class LegacyPrinterAdapter implements Printer {
  private legacy: LegacyPrinter;

  constructor() {
    this.legacy = new LegacyPrinter();
  }

  print(text: string): void {
    const formatted = text.toUpperCase(); // 必要な変換をここで吸収
    this.legacy.printText(formatted);
  }
}

// 新しいコード（Adapter に依存）
class ReportGenerator {
  constructor(private printer: Printer) {}

  printSummary(text: string): void {
    this.printer.print(text);
  }
}

// 利用例
const printer = new LegacyPrinterAdapter();
const report = new ReportGenerator(printer);
report.printSummary("月次レポート");
