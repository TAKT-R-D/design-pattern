<?php

// レガシーAPI（旧仕様）
class LegacyFileSaver {
  public function saveData(string $data): void {
    echo "保存形式: <<<{$data}>>>\n";
  }
}

class ExportService {
  public function exportReport(array $json): void {
    $legacySaver = new LegacyFileSaver();
    $formatted = str_replace(['{', '}'], ['[', ']'], json_encode($json));
    $legacySaver->saveData($formatted);
  }
}
