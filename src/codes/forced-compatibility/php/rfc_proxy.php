<?php

interface Printer {
  public function print(string $text): void;
}

class RealPrinter implements Printer {
  public function print(string $text): void {
    echo "印刷中: {$text}\n";
  }
}

class PrinterProxy implements Printer {
  private RealPrinter $real;

  public function __construct() {
    $this->real = new RealPrinter();
  }

  public function print(string $text): void {
    echo "ログ: 印刷を開始します\n";
    $this->real->print($text);
    echo "ログ: 印刷が完了しました\n";
  }
}

// 利用例
$printer = new PrinterProxy();
$printer->print("月次レポート");
