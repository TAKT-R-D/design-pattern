<?php

abstract class Notifier {
  public function send(string $user, string $message): void {
    echo $this->header() . "\n";
    echo $this->formatMessage($message) . "\n";
    echo $this->destination($user) . "\n";
  }

  abstract protected function header(): string;
  abstract protected function destination(string $user): string;
  abstract protected function formatMessage(string $message): string;
}

class EmailNotifier extends Notifier {
  protected function header(): string {
    return "件名: お知らせ";
  }

  protected function destination(string $user): string {
    return "宛先: {$user}@example.com";
  }

  protected function formatMessage(string $message): string {
    return "本文: {$message}";
  }
}

class SlackNotifier extends Notifier {
  protected function header(): string {
    return "Slack 通知";
  }

  protected function destination(string $user): string {
    return "Slack宛: {$user}";
  }

  protected function formatMessage(string $message): string {
    return "内容: {$message}";
  }
}

// 利用例
(new EmailNotifier())->send("hiroshi", "メールメッセージ");
(new SlackNotifier())->send("hiroshi", "Slackメッセージ");
