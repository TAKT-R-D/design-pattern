import os

class ApiClient:
    def fetch_data(self, endpoint: str):
        api_key = os.getenv("API_KEY")
        print(f"[ApiClient] APIキー: {api_key}")
        print(f"[ApiClient] エンドポイントにアクセス: {endpoint}")

class BatchJob:
    def run(self):
        run_mode = os.getenv("MODE")
        print(f"[BatchJob] 実行モード: {run_mode}")
        print("[BatchJob] バッチ処理開始")
