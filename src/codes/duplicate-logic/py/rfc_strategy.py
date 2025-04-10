from abc import ABC, abstractmethod

class ExportStrategy(ABC):
    @abstractmethod
    def export_data(self, data: str):
        pass

class PdfExportStrategy(ExportStrategy):
    def export_data(self, data: str):
        print(f"PDF出力: {data}")

class CsvExportStrategy(ExportStrategy):
    def export_data(self, data: str):
        print(f"CSV出力: {data}")

class XmlExportStrategy(ExportStrategy):
    def export_data(self, data: str):
        print(f"XML出力: {data}")

class Exporter:
    def __init__(self, strategy: ExportStrategy):
        self._strategy = strategy

    def set_strategy(self, strategy: ExportStrategy):
        self._strategy = strategy

    def export(self, data: str):
        print("開始ログ")
        self._strategy.export_data(data)
        print("完了ログ")

# 利用例
exporter = Exporter(PdfExportStrategy())
exporter.export("帳票データ")

exporter.set_strategy(CsvExportStrategy())
exporter.export("ユーザー一覧")
