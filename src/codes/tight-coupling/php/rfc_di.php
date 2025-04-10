<?php

interface Notifier {
  public function send(string $email, string $message): void;
}

class Mailer implements Notifier {
  public function send(string $email, string $message): void {
    echo "送信しました: {$email} → {$message}\n";
  }
}

class UserService {
  public function __construct(private Notifier $notifier) {}

  public function registerUser(string $email): void {
    echo "ユーザー登録: {$email}\n";
    $this->notifier->send($email, "ようこそ！");
  }
}

// 利用例（依存を注入）
$mailer = new Mailer();
$service = new UserService($mailer);
$service->registerUser("user@example.com");
