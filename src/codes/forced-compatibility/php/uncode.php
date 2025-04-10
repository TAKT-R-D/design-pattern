<?php

// レガシーAPI（旧仕様）
class LegacyPrinter {
  public function printText(string $text): void {
    echo "*** {$text} ***\n";
  }
}

// 新しいコード（無理やり接続）
class ReportGenerator {
  public function printSummary(string $text): void {
    $printer = new LegacyPrinter(); // ← 古いクラスを直接使っている
    $legacyFormat = strtoupper($text); // ← 無理やり仕様に合わせる
    $printer->printText($legacyFormat); // ← ハードコーディング
  }
}

// 利用例
$report = new ReportGenerator();
$report->printSummary("月次レポート");
