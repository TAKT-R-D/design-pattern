<?php

interface NotificationStrategy {
  public function send(string $user, string $message): void;
}

class EmailStrategy implements NotificationStrategy {
  public function send(string $user, string $message): void {
    echo "[Email] To: {$user}, Message: {$message}\n";
  }
}

class SlackStrategy implements NotificationStrategy {
  public function send(string $user, string $message): void {
    echo "[Slack] To: {$user}, Message: {$message}\n";
  }
}

interface Notifier {
  public function notify(string $user, string $message): void;
}

class RealNotifier implements Notifier {
  private NotificationStrategy $strategy;

  public function __construct(NotificationStrategy $strategy) {
    $this->strategy = $strategy;
  }

  public function notify(string $user, string $message): void {
    $this->strategy->send($user, $message);
  }
}

class NotifierProxy implements Notifier {
  private Notifier $real;

  public function __construct(Notifier $real) {
    $this->real = $real;
  }

  public function notify(string $user, string $message): void {
    if (strpos($user, "@") === false) {
      echo "Invalid user. Notification aborted.\n";
      return;
    }
    echo "Proxy: Access check passed.\n";
    $this->real->notify($user, $message);
    echo "Proxy: Notification sent.\n";
  }
}

// Usage
$realNotifier = new RealNotifier(new EmailStrategy());
$proxy = new NotifierProxy($realNotifier);
$proxy->notify("taro@example.com", "Disk space warning");
