// レガシーAPI（旧仕様）
class LegacyFileSaver {
  saveData(data: string) {
    console.log(`保存形式: <<<${data}>>>`);
  }
}

class ExportService {
  exportReport(json: object) {
    const legacySaver = new LegacyFileSaver();
    const formatted = JSON.stringify(json)
      .replaceAll("{", "[")
      .replaceAll("}", "]");
    legacySaver.saveData(formatted);
  }
}
