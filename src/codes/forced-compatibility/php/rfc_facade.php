<?php

class LegacyPrinter {
  public function printText(string $text): void {
    echo "*** {$text} ***\n";
  }
}

class FooterGenerator {
  public function getFooter(): string {
    return "---- END ----";
  }
}

class PrintFacade {
  private LegacyPrinter $printer;
  private FooterGenerator $footerGen;

  public function __construct() {
    $this->printer = new LegacyPrinter();
    $this->footerGen = new FooterGenerator();
  }

  public function printWithFooter(string $text): void {
    $formatted = strtoupper($text);
    $this->printer->printText($formatted);
    $footer = $this->footerGen->getFooter();
    $this->printer->printText($footer);
  }
}

class ReportGenerator {
  public function __construct(private PrintFacade $facade) {}

  public function printSummary(string $text): void {
    $this->facade->printWithFooter($text);
  }
}

// 利用例
$facade = new PrintFacade();
$report = new ReportGenerator($facade);
$report->printSummary("月次レポート");
