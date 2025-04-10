<?php

class Mailer {
  public function send(string $email, string $content): void {
    echo "送信しました: {$email} → {$content}\n";
  }
}

class UserService {
  private Mailer $mailer;

  public function __construct() {
    $this->mailer = new Mailer(); // ← 密結合：直接生成
  }

  public function notifyUser(string $email): void {
    $content = "ようこそ！";
    $this->mailer->send($email, $content); // ← Mailer の存在を知りすぎている
  }
}

// 利用例
$service = new UserService();
$service->notifyUser("user@example.com");
