<?php

class InventoryService {
  public function reduceStock(string $productId, int $amount): void {
    echo "在庫を減らしました: {$productId} × {$amount}\n";
  }
}

class OrderService {
  private InventoryService $inventory;

  public function __construct() {
    $this->inventory = new InventoryService();
  }

  public function placeOrder(string $productId, int $quantity): void {
    echo "注文受付: {$productId} × {$quantity}\n";
    $this->inventory->reduceStock($productId, $quantity);
  }
}
