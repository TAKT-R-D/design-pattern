<?php

interface MessageStrategy {
  public function compose(string $user, string $content): string;
}

class PlainMessageStrategy implements MessageStrategy {
  public function compose(string $user, string $content): string {
    return "{$user}: {$content}";
  }
}

class HtmlMessageStrategy implements MessageStrategy {
  public function compose(string $user, string $content): string {
    return "<p><strong>{$user}</strong>: {$content}</p>";
  }
}

abstract class Notifier {
  protected MessageStrategy $strategy;

  public function __construct(MessageStrategy $strategy) {
    $this->strategy = $strategy;
  }

  abstract public function notify(string $user, string $content): void;
}

class EmailNotifier extends Notifier {
  public function notify(string $user, string $content): void {
    $message = $this->strategy->compose($user, $content);
    echo "[Email] Sending: $message\n";
  }
}

class SlackNotifier extends Notifier {
  public function notify(string $user, string $content): void {
    $message = $this->strategy->compose($user, $content);
    echo "[Slack] Sending: $message\n";
  }
}

// 使用例
$notifier = new SlackNotifier(new HtmlMessageStrategy());
$notifier->notify("Taro", "Server restarted.");
