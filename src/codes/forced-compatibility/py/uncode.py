# レガシーAPI（旧仕様）
class LegacyPrinter:
    def print_text(self, text: str):
        print(f"*** {text} ***")

# 新しいコード（無理やり接続）
class ReportGenerator:
    def print_summary(self, text: str):
        printer = LegacyPrinter()  # ← 直接依存
        legacy_format = text.upper()  # ← 無理やり仕様に合わせる
        printer.print_text(legacy_format)  # ← 古いインターフェースにベタ依存

# 利用例
report = ReportGenerator()
report.print_summary("月次レポート")
