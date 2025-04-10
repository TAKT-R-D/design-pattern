<?php

class ApiClient {
  public function fetchData(string $endpoint): void {
    $apiKey = getenv("API_KEY");
    echo "[ApiClient] APIキー: {$apiKey}\n";
    echo "[ApiClient] エンドポイントにアクセス: {$endpoint}\n";
  }
}

class BatchJob {
  public function run(): void {
    $runMode = getenv("MODE");
    echo "[BatchJob] 実行モード: {$runMode}\n";
    echo "[BatchJob] バッチ処理開始\n";
  }
}
