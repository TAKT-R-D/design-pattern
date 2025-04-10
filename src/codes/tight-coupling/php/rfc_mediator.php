<?php

interface Mediator {
  public function notify(string $sender, mixed $data): void;
}

class UserService {
  public function __construct(private Mediator $mediator) {}

  public function registerUser(string $email): void {
    echo "ユーザー登録: {$email}\n";
    $this->mediator->notify("UserService", $email);
  }
}

class Mailer {
  public function sendWelcome(string $email): void {
    echo "送信しました: {$email} → ようこそ！\n";
  }
}

class AppMediator implements Mediator {
  public function __construct(private Mailer $mailer) {}

  public function notify(string $sender, mixed $data): void {
    if ($sender === "UserService") {
      $this->mailer->sendWelcome($data);
    }
  }
}

// 利用例
$mailer = new Mailer();
$mediator = new AppMediator($mailer);
$userService = new UserService($mediator);
$userService->registerUser("user@example.com");
