from abc import ABC, abstractmethod

# Visitor インターフェース
class ExportVisitor(ABC):
    @abstractmethod
    def visit_pdf(self, pdf): pass

    @abstractmethod
    def visit_csv(self, csv): pass

    @abstractmethod
    def visit_xml(self, xml): pass

# Exportable インターフェース
class Exportable(ABC):
    @abstractmethod
    def accept(self, visitor: ExportVisitor): pass

# 出力形式
class PdfExporter(Exportable):
    def __init__(self, data: str):
        self.data = data

    def export(self):
        print(f"PDF出力: {self.data}")

    def accept(self, visitor: ExportVisitor):
        visitor.visit_pdf(self)

class CsvExporter(Exportable):
    def __init__(self, data: str):
        self.data = data

    def export(self):
        print(f"CSV出力: {self.data}")

    def accept(self, visitor: ExportVisitor):
        visitor.visit_csv(self)

class XmlExporter(Exportable):
    def __init__(self, data: str):
        self.data = data

    def export(self):
        print(f"XML出力: {self.data}")

    def accept(self, visitor: ExportVisitor):
        visitor.visit_xml(self)

# Visitor 実装
class LoggingVisitor(ExportVisitor):
    def visit_pdf(self, pdf: PdfExporter):
        print("開始ログ")
        pdf.export()
        print("完了ログ")

    def visit_csv(self, csv: CsvExporter):
        print("開始ログ")
        csv.export()
        print("完了ログ")

    def visit_xml(self, xml: XmlExporter):
        print("開始ログ")
        xml.export()
        print("完了ログ")

# 利用例
visitor = LoggingVisitor()

pdf = PdfExporter("帳票データ")
pdf.accept(visitor)

csv = CsvExporter("ユーザー一覧")
csv.accept(visitor)
