class ReportGenerator:
    def generate_pdf_report(self, data: str):
        print("=== レポート開始 ===")
        print(f"[PDF形式] {data}")
        print("=== レポート終了 ===")

    def generate_csv_report(self, data: str):
        print("=== レポート開始 ===")
        print(f"[CSV形式] {data}")
        print("=== レポート終了 ===")

    def generate_html_report(self, data: str):
        print("=== レポート開始 ===")
        print(f"<html><body>{data}</body></html>")
        print("=== レポート終了 ===")
