<?php

interface ExporterPrototype {
  public function clone(): ExporterPrototype;
  public function export(string $data): void;
}

class PdfExporter implements ExporterPrototype {
  public function __construct(private bool $withLog = false) {}

  public function clone(): ExporterPrototype {
    return new PdfExporter($this->withLog);
  }

  public function export(string $data): void {
    if ($this->withLog) echo "開始ログ\n";
    echo "PDF出力: {$data}\n";
    if ($this->withLog) echo "完了ログ\n";
  }

  public function enableLogging(): void {
    $this->withLog = true;
  }
}

// 利用例
$baseExporter = new PdfExporter();
$baseExporter->enableLogging();

$cloned = $baseExporter->clone();
$cloned->export("請求書");
