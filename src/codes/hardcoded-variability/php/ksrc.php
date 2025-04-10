<?php

class ReportGenerator {
  public function generatePdfReport(string $data): void {
    echo "=== レポート開始 ===\n";
    echo "[PDF形式] {$data}\n";
    echo "=== レポート終了 ===\n";
  }

  public function generateCsvReport(string $data): void {
    echo "=== レポート開始 ===\n";
    echo "[CSV形式] {$data}\n";
    echo "=== レポート終了 ===\n";
  }

  public function generateHtmlReport(string $data): void {
    echo "=== レポート開始 ===\n";
    echo "<html><body>{$data}</body></html>\n";
    echo "=== レポート終了 ===\n";
  }
}
