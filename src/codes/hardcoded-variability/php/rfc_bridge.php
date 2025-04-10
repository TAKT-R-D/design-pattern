<?php

interface Notifier {
  public function sendMessage(string $to, string $content): void;
}

class EmailNotifier implements Notifier {
  public function sendMessage(string $to, string $content): void {
    echo "件名: お知らせ\n";
    echo "本文: {$content}\n";
    echo "宛先: {$to}@example.com\n";
  }
}

class SlackNotifier implements Notifier {
  public function sendMessage(string $to, string $content): void {
    echo "Slack宛: {$to}\n";
    echo "内容: {$content}\n";
  }
}

abstract class Notification {
  public function __construct(protected Notifier $notifier) {}

  abstract public function notify(string $user, string $message): void;
}

class NormalNotification extends Notification {
  public function notify(string $user, string $message): void {
    $this->notifier->sendMessage($user, $message);
  }
}

class UrgentNotification extends Notification {
  public function notify(string $user, string $message): void {
    $this->notifier->sendMessage($user, "[緊急] {$message}");
  }
}

// 利用例
$notification1 = new UrgentNotification(new EmailNotifier());
$notification1->notify("hiroshi", "サーバーが落ちました");

$notification2 = new NormalNotification(new SlackNotifier());
$notification2->notify("hiroshi", "定例ミーティングは15時です");
