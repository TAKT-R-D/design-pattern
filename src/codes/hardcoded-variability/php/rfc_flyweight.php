<?php

class NotificationTemplate {
  public function __construct(public string $header, public string $footer) {}

  public function format(string $user, string $body): string {
    return "{$this->header}\n宛先: {$user}\n本文: {$body}\n{$this->footer}";
  }
}

class Notification {
  public function __construct(
    private string $user,
    private string $message,
    private NotificationTemplate $template
  ) {}

  public function send(): void {
    echo $this->template->format($this->user, $this->message) . "\n";
  }
}

// 利用例
$template = new NotificationTemplate("件名: お知らせ", "-- 通知システム");

(new Notification("hiroshi", "メッセージ1", $template))->send();
(new Notification("satoshi", "メッセージ2", $template))->send();
