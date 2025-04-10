<?php

abstract class Exporter {
  public function export(string $data): void {
    echo "開始ログ\n";
    $this->doExport($data); // フックメソッド（差分のみサブクラスに委譲）
    echo "完了ログ\n";
  }

  abstract protected function doExport(string $data): void;
}

class PdfExporter extends Exporter {
  protected function doExport(string $data): void {
    echo "PDF出力: {$data}\n";
  }
}

class CsvExporter extends Exporter {
  protected function doExport(string $data): void {
    echo "CSV出力: {$data}\n";
  }
}

class XmlExporter extends Exporter {
  protected function doExport(string $data): void {
    echo "XML出力: {$data}\n";
  }
}

// 利用例
$exporter = new XmlExporter();
$exporter->export("データ123");
