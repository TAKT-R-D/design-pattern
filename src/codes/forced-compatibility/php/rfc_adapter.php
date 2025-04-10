<?php

// レガシーAPI（旧仕様）
class LegacyPrinter {
  public function printText(string $text): void {
    echo "*** {$text} ***\n";
  }
}

// 新しいインターフェース
interface Printer {
  public function print(string $text): void;
}

// Adapter（旧APIをラップ）
class LegacyPrinterAdapter implements Printer {
  private LegacyPrinter $legacy;

  public function __construct() {
    $this->legacy = new LegacyPrinter();
  }

  public function print(string $text): void {
    $formatted = strtoupper($text); // 変換はここで
    $this->legacy->printText($formatted);
  }
}

// 新しいコード
class ReportGenerator {
  public function __construct(private Printer $printer) {}

  public function printSummary(string $text): void {
    $this->printer->print($text);
  }
}

// 利用例
$printer = new LegacyPrinterAdapter();
$report = new ReportGenerator($printer);
$report->printSummary("月次レポート");
