// レガシーAPIや内部処理（複雑）
class LegacyPrinter {
  printText(text: string) {
    console.log(`*** ${text} ***`);
  }
}

class FooterGenerator {
  getFooter(): string {
    return "---- END ----";
  }
}

// Facade（簡潔なインターフェース）
class PrintFacade {
  private printer = new LegacyPrinter();
  private footerGen = new FooterGenerator();

  printWithFooter(text: string) {
    const formatted = text.toUpperCase();
    this.printer.printText(formatted);
    const footer = this.footerGen.getFooter();
    this.printer.printText(footer);
  }
}

// 呼び出し元
class ReportGenerator {
  constructor(private facade: PrintFacade) {}

  printSummary(text: string) {
    this.facade.printWithFooter(text);
  }
}

// 利用例
const printer = new PrintFacade();
const report = new ReportGenerator(printer);
report.printSummary("月次レポート");
