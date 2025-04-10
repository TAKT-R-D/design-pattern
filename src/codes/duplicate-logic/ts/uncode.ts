class PdfExporter {
  export(data: string) {
    console.log("開始ログ");
    console.log(`PDF出力: ${data}`);
    console.log("完了ログ");
  }
}

class CsvExporter {
  export(data: string) {
    console.log("開始ログ");
    console.log(`CSV出力: ${data}`);
    console.log("完了ログ");
  }
}

class XmlExporter {
  export(data: string) {
    console.log("開始ログ");
    console.log(`XML出力: ${data}`);
    console.log("完了ログ");
  }
}
