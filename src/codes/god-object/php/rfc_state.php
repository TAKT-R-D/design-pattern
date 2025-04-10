<?php

interface OrderState {
  public function confirm(StatefulOrderProcessor $order): void;
}

class UnconfirmedState implements OrderState {
  public function confirm(StatefulOrderProcessor $order): void {
    InventoryService::reduce($order->productIds);
    EmailService::send($order->userEmail, "注文が確定されました");
    OrderLogger::log("order-" . substr(md5((string)mt_rand()), 0, 8));
    $order->setState(new ConfirmedState());
  }
}

class ConfirmedState implements OrderState {
  public function confirm(StatefulOrderProcessor $order): void {
    echo "すでに確定済みです\\n";
  }
}

class StatefulOrderProcessor {
  public OrderState $state;
  public array $productIds;
  public string $userEmail;

  public function __construct(array $productIds, string $userEmail) {
    $this->productIds = $productIds;
    $this->userEmail = $userEmail;
    $this->state = new UnconfirmedState();
  }

  public function setState(OrderState $state): void {
    $this->state = $state;
  }

  public function confirmOrder(): void {
    $this->state->confirm($this);
  }
}

// 外部サービス（ダミー）
class InventoryService {
  public static function reduce(array $productIds): void {
    echo "在庫を " . count($productIds) . " 件分減らしました\\n";
  }
}

class EmailService {
  public static function send(string $email, string $message): void {
    echo "メールを {$email} に送信: {$message}\\n";
  }
}

class OrderLogger {
  public static function log(string $orderId): void {
    echo "注文ログを記録: {$orderId}\\n";
  }
}

// 利用例
$processor = new StatefulOrderProcessor(["p01", "p02"], "hiroshi@example.com");
$processor->confirmOrder(); // 初回：確定
$processor->confirmOrder(); // 2回目：すでに確定済み
