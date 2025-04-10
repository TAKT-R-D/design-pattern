from abc import ABC, abstractmethod

# レガシーAPI（旧仕様）
class LegacyPrinter:
    def print_text(self, text: str):
        print(f"*** {text} ***")

# 新しいインターフェース
class Printer(ABC):
    @abstractmethod
    def print(self, text: str):
        pass

# Adapter（旧APIをラップ）
class LegacyPrinterAdapter(Printer):
    def __init__(self):
        self.legacy = LegacyPrinter()

    def print(self, text: str):
        formatted = text.upper()
        self.legacy.print_text(formatted)

# 新しいコード
class ReportGenerator:
    def __init__(self, printer: Printer):
        self.printer = printer

    def print_summary(self, text: str):
        self.printer.print(text)

# 利用例
printer = LegacyPrinterAdapter()
report = ReportGenerator(printer)
report.print_summary("月次レポート")
