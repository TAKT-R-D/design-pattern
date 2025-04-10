class ReportGenerator {
  generatePdfReport(data: string) {
    console.log("=== レポート開始 ===");
    console.log(`[PDF形式] ${data}`);
    console.log("=== レポート終了 ===");
  }

  generateCsvReport(data: string) {
    console.log("=== レポート開始 ===");
    console.log(`[CSV形式] ${data}`);
    console.log("=== レポート終了 ===");
  }

  generateHtmlReport(data: string) {
    console.log("=== レポート開始 ===");
    console.log(`<html><body>${data}</body></html>`);
    console.log("=== レポート終了 ===");
  }
}
