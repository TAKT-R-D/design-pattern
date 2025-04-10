class LegacyPrinter:
    def print_text(self, text: str):
        print(f"*** {text} ***")

class FooterGenerator:
    def get_footer(self) -> str:
        return "---- END ----"

class PrintFacade:
    def __init__(self):
        self.printer = LegacyPrinter()
        self.footer_gen = FooterGenerator()

    def print_with_footer(self, text: str):
        formatted = text.upper()
        self.printer.print_text(formatted)
        footer = self.footer_gen.get_footer()
        self.printer.print_text(footer)

class ReportGenerator:
    def __init__(self, facade: PrintFacade):
        self.facade = facade

    def print_summary(self, text: str):
        self.facade.print_with_footer(text)

# 利用例
facade = PrintFacade()
report = ReportGenerator(facade)
report.print_summary("月次レポート")
