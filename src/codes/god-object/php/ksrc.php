<?php

class PostManager {
  private array $posts = [];
  private string $authorEmail = "";

  public function setAuthor(string $email): void {
    $this->authorEmail = $email;
  }

  public function createPost(string $title, string $content): void {
    $this->posts[] = ['title' => $title, 'content' => $content];
  }

  public function publishAll(): void {
    foreach ($this->posts as $post) {
      // 1. データ保存
      echo "保存: {$post['title']}\n";

      // 2. 通知送信
      echo "通知を {$this->authorEmail} に送信\n";

      // 3. ログ
      echo "ログ: {$post['title']} を公開\n";
    }
  }
}
