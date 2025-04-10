from abc import ABC, abstractmethod

class Exporter(ABC):
    @abstractmethod
    def export(self, data: str):
        pass

class PdfExporter(Exporter):
    def export(self, data: str):
        print(f"PDF出力: {data}")

class CsvExporter(Exporter):
    def export(self, data: str):
        print(f"CSV出力: {data}")

class LoggingExporter(Exporter):
    def __init__(self, wrapped: Exporter):
        self._wrapped = wrapped

    def export(self, data: str):
        print("開始ログ")
        self._wrapped.export(data)
        print("完了ログ")

# 利用例
pdf = LoggingExporter(PdfExporter())
pdf.export("帳票データ")

csv = LoggingExporter(CsvExporter())
csv.export("ユーザー一覧")
