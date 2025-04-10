# レガシーAPI（旧仕様）
class LegacyFileSaver:
    def save_data(self, data: str):
        print(f"保存形式: <<<{data}>>>")

class ExportService:
    def export_report(self, json_obj: dict):
        legacy_saver = LegacyFileSaver()
        formatted = str(json_obj).replace("{", "[").replace("}", "]")
        legacy_saver.save_data(formatted)
