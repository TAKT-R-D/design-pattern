<?php

interface NotificationStrategy {
  public function send(string $user, string $message): void;
}

class EmailStrategy implements NotificationStrategy {
  public function send(string $user, string $message): void {
    echo "件名: お知らせ\n";
    echo "本文: {$message}\n";
    echo "宛先: {$user}@example.com\n";
  }
}

class SlackStrategy implements NotificationStrategy {
  public function send(string $user, string $message): void {
    echo "Slack宛: {$user}\n";
    echo "内容: {$message}\n";
  }
}

class NotificationService {
  public function __construct(private NotificationStrategy $strategy) {}

  public function notify(string $user, string $message): void {
    $this->strategy->send($user, $message);
  }
}

// 利用例
(new NotificationService(new EmailStrategy()))->notify("hiroshi", "メールメッセージ");
(new NotificationService(new SlackStrategy()))->notify("hiroshi", "Slackメッセージ");
