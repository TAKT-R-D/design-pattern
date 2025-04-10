<?php

class PdfExporter {
  public function export(string $data): void {
    echo "開始ログ\n";
    echo "PDF出力: {$data}\n";
    echo "完了ログ\n";
  }
}

class CsvExporter {
  public function export(string $data): void {
    echo "開始ログ\n";
    echo "CSV出力: {$data}\n";
    echo "完了ログ\n";
  }
}

class XmlExporter {
  public function export(string $data): void {
    echo "開始ログ\n";
    echo "XML出力: {$data}\n";
    echo "完了ログ\n";
  }
}
