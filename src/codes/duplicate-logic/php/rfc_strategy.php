<?php

interface ExportStrategy {
  public function exportData(string $data): void;
}

class PdfExportStrategy implements ExportStrategy {
  public function exportData(string $data): void {
    echo "PDF出力: {$data}\n";
  }
}

class CsvExportStrategy implements ExportStrategy {
  public function exportData(string $data): void {
    echo "CSV出力: {$data}\n";
  }
}

class XmlExportStrategy implements ExportStrategy {
  public function exportData(string $data): void {
    echo "XML出力: {$data}\n";
  }
}

class Exporter {
  public function __construct(private ExportStrategy $strategy) {}

  public function setStrategy(ExportStrategy $strategy): void {
    $this->strategy = $strategy;
  }

  public function export(string $data): void {
    echo "開始ログ\n";
    $this->strategy->exportData($data);
    echo "完了ログ\n";
  }
}

// 利用例
$exporter = new Exporter(new PdfExportStrategy());
$exporter->export("帳票データ");

$exporter->setStrategy(new CsvExportStrategy());
$exporter->export("ユーザー一覧");
