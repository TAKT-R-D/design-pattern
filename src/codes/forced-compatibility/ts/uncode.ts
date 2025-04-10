// レガシーAPI（旧仕様）
class LegacyPrinter {
  printText(text: string) {
    console.log(`*** ${text} ***`);
  }
}

// 新しいコード
class ReportGenerator {
  printSummary(text: string) {
    const printer = new LegacyPrinter(); // ← 直接依存（インターフェース不一致）
    // 無理やり旧APIに合わせる
    const legacyFormat = text.toUpperCase();
    printer.printText(legacyFormat); // ← ハードコーディング
  }
}
