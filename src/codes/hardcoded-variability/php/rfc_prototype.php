<?php

class Notification {
  public function __construct(
    public string $header,
    public string $footer,
    public string $user = "",
    public string $message = ""
  ) {}

  public function clone(): Notification {
    return new Notification($this->header, $this->footer);
  }

  public function send(): void {
    echo "{$this->header}\n宛先: {$this->user}\n本文: {$this->message}\n{$this->footer}\n";
  }
}

// プロトタイプ生成
$prototype = new Notification("件名: お知らせ", "-- 通知システム");

// 利用例
$n1 = $prototype->clone();
$n1->user = "hiroshi";
$n1->message = "こんにちは";
$n1->send();

$n2 = $prototype->clone();
$n2->user = "satoshi";
$n2->message = "お知らせがあります";
$n2->send();
