class ApiClient {
  fetchData(endpoint: string) {
    const apiKey = process.env.API_KEY;
    console.log(`[ApiClient] APIキー: ${apiKey}`);
    console.log(`[ApiClient] エンドポイントにアクセス: ${endpoint}`);
  }
}

class BatchJob {
  run() {
    const runMode = process.env.MODE;
    console.log(`[BatchJob] 実行モード: ${runMode}`);
    console.log(`[BatchJob] バッチ処理開始`);
  }
}
