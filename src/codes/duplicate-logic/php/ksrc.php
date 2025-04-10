<?php

class ImageUploader {
  public function upload(string $file): void {
    echo "検証中...\n";
    echo "画像ファイルをアップロード中: {$file}\n";
    echo "完了しました\n";
  }
}

class VideoUploader {
  public function upload(string $file): void {
    echo "検証中...\n";
    echo "動画ファイルをアップロード中: {$file}\n";
    echo "完了しました\n";
  }
}

class AudioUploader {
  public function upload(string $file): void {
    echo "検証中...\n";
    echo "音声ファイルをアップロード中: {$file}\n";
    echo "完了しました\n";
  }
}
