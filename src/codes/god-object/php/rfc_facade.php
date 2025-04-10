<?php

// 個別責務のクラスたち
class DiscountCalculator {
  public static function calculate(float $base, string $type): float {
    switch ($type) {
      case "student":
        return $base * 0.8;
      case "member":
        return $base * 0.9;
      default:
        return $base;
    }
  }
}

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

// Facadeクラス
class OrderProcessor {
  public function __construct(
    private array $productIds,
    private string $userEmail,
    private string $discountType
  ) {}

  public function confirmOrder(): void {
    $basePrice = count($this->productIds) * 1000;
    $total = DiscountCalculator::calculate($basePrice, $this->discountType);

    InventoryService::reduce($this->productIds);
    EmailService::send($this->userEmail, "ご注文が確定しました（合計: ¥{$total}）");
    $orderId = "order-" . substr(md5((string)mt_rand()), 0, 8);
    OrderLogger::log($orderId);
  }
}

// 利用例
$processor = new OrderProcessor(
  ["p01", "p02"],
  "hiroshi@example.com",
  "student"
);
$processor->confirmOrder();
