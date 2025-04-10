class ImageUploader {
  upload(file: string) {
    console.log("検証中...");
    console.log(`画像ファイルをアップロード中: ${file}`);
    console.log("完了しました");
  }
}

class VideoUploader {
  upload(file: string) {
    console.log("検証中...");
    console.log(`動画ファイルをアップロード中: ${file}`);
    console.log("完了しました");
  }
}

class AudioUploader {
  upload(file: string) {
    console.log("検証中...");
    console.log(`音声ファイルをアップロード中: ${file}`);
    console.log("完了しました");
  }
}
