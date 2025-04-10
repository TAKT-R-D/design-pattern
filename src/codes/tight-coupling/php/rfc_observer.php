<?php

interface Observer {
  public function update(string $email): void;
}

class Mailer implements Observer {
  public function update(string $email): void {
    echo "送信しました: {$email} → ようこそ！\n";
  }
}

class UserService {
  /** @var Observer[] */
  private array $observers = [];

  public function addObserver(Observer $observer): void {
    $this->observers[] = $observer;
  }

  private function notifyObservers(string $email): void {
    foreach ($this->observers as $observer) {
      $observer->update($email);
    }
  }

  public function registerUser(string $email): void {
    echo "ユーザー登録: {$email}\n";
    $this->notifyObservers($email);
  }
}

// 利用例
$service = new UserService();
$service->addObserver(new Mailer());
$service->registerUser("user@example.com");
