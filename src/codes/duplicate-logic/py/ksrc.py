class ImageUploader:
    def upload(self, file: str):
        print("検証中...")
        print(f"画像ファイルをアップロード中: {file}")
        print("完了しました")

class VideoUploader:
    def upload(self, file: str):
        print("検証中...")
        print(f"動画ファイルをアップロード中: {file}")
        print("完了しました")

class AudioUploader:
    def upload(self, file: str):
        print("検証中...")
        print(f"音声ファイルをアップロード中: {file}")
        print("完了しました")
