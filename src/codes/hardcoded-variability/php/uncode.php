<?php

class NotificationService {
  public function sendEmail(string $user, string $message): void {
    echo "件名: お知らせ\n";
    echo "本文: {$message}\n";
    echo "宛先: {$user}@example.com\n";
  }

  public function sendSlack(string $user, string $message): void {
    echo "Slack宛: {$user}\n";
    echo "内容: {$message}\n";
  }
}

// 利用例
$notifier = new NotificationService();
$notifier->sendEmail("hiroshi", "メッセージ1");
$notifier->sendSlack("hiroshi", "メッセージ2");
