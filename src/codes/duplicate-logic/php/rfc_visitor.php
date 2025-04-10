<?php

interface ExportVisitor {
  public function visitPdf(PdfExporter $pdf): void;
  public function visitCsv(CsvExporter $csv): void;
  public function visitXml(XmlExporter $xml): void;
}

interface Exportable {
  public function accept(ExportVisitor $visitor): void;
}

class PdfExporter implements Exportable {
  public function __construct(private string $data) {}

  public function export(): void {
    echo "PDF出力: {$this->data}\n";
  }

  public function accept(ExportVisitor $visitor): void {
    $visitor->visitPdf($this);
  }
}

class CsvExporter implements Exportable {
  public function __construct(private string $data) {}

  public function export(): void {
    echo "CSV出力: {$this->data}\n";
  }

  public function accept(ExportVisitor $visitor): void {
    $visitor->visitCsv($this);
  }
}

class XmlExporter implements Exportable {
  public function __construct(private string $data) {}

  public function export(): void {
    echo "XML出力: {$this->data}\n";
  }

  public function accept(ExportVisitor $visitor): void {
    $visitor->visitXml($this);
  }
}

class LoggingVisitor implements ExportVisitor {
  public function visitPdf(PdfExporter $pdf): void {
    echo "開始ログ\n";
    $pdf->export();
    echo "完了ログ\n";
  }

  public function visitCsv(CsvExporter $csv): void {
    echo "開始ログ\n";
    $csv->export();
    echo "完了ログ\n";
  }

  public function visitXml(XmlExporter $xml): void {
    echo "開始ログ\n";
    $xml->export();
    echo "完了ログ\n";
  }
}

// 利用例
$visitor = new LoggingVisitor();

$pdf = new PdfExporter("帳票データ");
$pdf->accept($visitor);

$csv = new CsvExporter("ユーザー一覧");
$csv->accept($visitor);
