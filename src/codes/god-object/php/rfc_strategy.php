<?php

interface DiscountStrategy {
  public function calculate(float $base): float;
}

class NoDiscount implements DiscountStrategy {
  public function calculate(float $base): float {
    return $base;
  }
}

class StudentDiscount implements DiscountStrategy {
  public function calculate(float $base): float {
    return $base * 0.8;
  }
}

class MemberDiscount implements DiscountStrategy {
  public function calculate(float $base): float {
    return $base * 0.9;
  }
}

// 外部サービスはダミー定義（実際は別クラスとする想定）
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

// 注文処理クラス
class StrategyOrderProcessor {
  public function __construct(
    private array $productIds,
    private string $userEmail,
    private DiscountStrategy $discountStrategy
  ) {}

  public function confirmOrder(): void {
    $basePrice = count($this->productIds) * 1000;
    $total = $this->discountStrategy->calculate($basePrice);

    InventoryService::reduce($this->productIds);
    EmailService::send($this->userEmail, "ご注文ありがとうございます。合計: ¥{$total}");
    $orderId = "order-" . substr(md5((string)mt_rand()), 0, 8);
    OrderLogger::log($orderId);
  }
}

// 利用例
$processor = new StrategyOrderProcessor(
  ["p01", "p02"],
  "hiroshi@example.com",
  new StudentDiscount()
);
$processor->confirmOrder();
