// インターフェース
interface Printer {
  print(text: string): void;
}

// 実際の処理を行うクラス（本体）
class RealPrinter implements Printer {
  print(text: string): void {
    console.log(`印刷中: ${text}`);
  }
}

// Proxy（アクセスを仲介）
class PrinterProxy implements Printer {
  private real: RealPrinter;

  constructor() {
    this.real = new RealPrinter();
  }

  print(text: string): void {
    console.log("ログ: 印刷を開始します");
    this.real.print(text);
    console.log("ログ: 印刷が完了しました");
  }
}

// 利用例
const printer: Printer = new PrinterProxy();
printer.print("月次レポート");
