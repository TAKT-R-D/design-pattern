<?php
class OrderManager {
  private array $orders = [];
  private string $userEmail = "";
  private string $discountType = "none";

  public function setUser(string $email): void {
    $this->userEmail = $email;
  }

  public function addOrder(string $productId): void {
    $this->orders[] = $productId;
  }

  public function applyDiscount(string $type): void {
    $this->discountType = $type;
  }

  public function calculateTotal(): float {
    $basePrice = count($this->orders) * 1000;
    if ($this->discountType === "student") {
      return $basePrice * 0.8;
    } elseif ($this->discountType === "member") {
      return $basePrice * 0.9;
    }
    return $basePrice;
  }

  public function confirmOrder(): void {
    // 1. 在庫調整
    echo "在庫を減らす\\n";

    // 2. メール通知
    echo "メールを {$this->userEmail} に送信\\n";

    // 3. ログ出力
    echo "注文完了ログ\\n";
  }
}