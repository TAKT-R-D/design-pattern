<?php

interface Exporter {
  public function export(string $data): void;
}

class PdfExporter implements Exporter {
  public function export(string $data): void {
    echo "PDF出力: {$data}\n";
  }
}

class CsvExporter implements Exporter {
  public function export(string $data): void {
    echo "CSV出力: {$data}\n";
  }
}

class LoggingExporter implements Exporter {
  public function __construct(private Exporter $wrapped) {}

  public function export(string $data): void {
    echo "開始ログ\n";
    $this->wrapped->export($data);
    echo "完了ログ\n";
  }
}

// 利用例
$pdf = new LoggingExporter(new PdfExporter());
$pdf->export("帳票データ");

$csv = new LoggingExporter(new CsvExporter());
$csv->export("ユーザー一覧");
