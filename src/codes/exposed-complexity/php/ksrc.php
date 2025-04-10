<?php

class InventoryChecker {
  public function check(string $productId): bool {
    echo "在庫確認: {$productId}\n";
    return true;
  }
}

class PaymentGateway {
  public function pay(int $amount): bool {
    echo "支払い処理: ¥{$amount}\n";
    return true;
  }
}

class ReceiptPrinter {
  public function print(string $productId, int $amount): void {
    echo "領収書発行: 商品={$productId}, 金額=¥{$amount}\n";
  }
}

function completePurchase(string $productId, int $amount): void {
  $checker = new InventoryChecker();
  $payment = new PaymentGateway();
  $printer = new ReceiptPrinter();

  if ($checker->check($productId)) {
    if ($payment->pay($amount)) {
      $printer->print($productId, $amount);
    }
  }
}
