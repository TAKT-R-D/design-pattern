import copy
from abc import ABC, abstractmethod

class ExporterPrototype(ABC):
    @abstractmethod
    def clone(self): pass

    @abstractmethod
    def export(self, data: str): pass

class PdfExporter(ExporterPrototype):
    def __init__(self, with_log: bool = False):
        self.with_log = with_log

    def clone(self) -> "PdfExporter":
        return copy.deepcopy(self)

    def enable_logging(self):
        self.with_log = True

    def export(self, data: str):
        if self.with_log:
            print("開始ログ")
        print(f"PDF出力: {data}")
        if self.with_log:
            print("完了ログ")

# 利用例
base_exporter = PdfExporter()
base_exporter.enable_logging()

cloned = base_exporter.clone()
cloned.export("請求書")
