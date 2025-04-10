from abc import ABC, abstractmethod

class Printer(ABC):
    @abstractmethod
    def print(self, text: str):
        pass

class RealPrinter(Printer):
    def print(self, text: str):
        print(f"印刷中: {text}")

class PrinterProxy(Printer):
    def __init__(self):
        self._real = RealPrinter()

    def print(self, text: str):
        print("ログ: 印刷を開始します")
        self._real.print(text)
        print("ログ: 印刷が完了しました")

# 利用例
printer = PrinterProxy()
printer.print("月次レポート")
