from abc import ABC, abstractmethod

class Exporter(ABC):
    def export(self, data: str):
        print("開始ログ")
        self.do_export(data)  # フックメソッド
        print("完了ログ")

    @abstractmethod
    def do_export(self, data: str):
        pass

class PdfExporter(Exporter):
    def do_export(self, data: str):
        print(f"PDF出力: {data}")

class CsvExporter(Exporter):
    def do_export(self, data: str):
        print(f"CSV出力: {data}")

class XmlExporter(Exporter):
    def do_export(self, data: str):
        print(f"XML出力: {data}")

# 利用例
exporter = PdfExporter()
exporter.export("データ123")
