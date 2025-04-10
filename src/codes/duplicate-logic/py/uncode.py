class PdfExporter:
    def export(self, data: str):
        print("開始ログ")
        print(f"PDF出力: {data}")
        print("完了ログ")

class CsvExporter:
    def export(self, data: str):
        print("開始ログ")
        print(f"CSV出力: {data}")
        print("完了ログ")

class XmlExporter:
    def export(self, data: str):
        print("開始ログ")
        print(f"XML出力: {data}")
        print("完了ログ")
