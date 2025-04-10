<?php

class Mailer {
  public function send(string $to, string $message): void {
    echo "メール送信: {$to} => {$message}\n";
  }
}

class Notifier {
  public function notify(string $userId, string $content): void {
    $mailer = new Mailer();
    $formatted = "[通知] {$content}";
    $mailer->send("{$userId}@example.com", $formatted);
  }
}