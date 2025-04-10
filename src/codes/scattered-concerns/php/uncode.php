<?php

class OrderService {
  public function createOrder(string $orderId): void {
    echo "[OrderService] 注文作成: {$orderId}\n"; // 直書きログ

    $debugMode = getenv("DEBUG_MODE") === "true"; // 設定の直接参照
    if ($debugMode) {
      echo "[DEBUG] 注文詳細: {$orderId}\n";
    }
  }
}

class UserService {
  public function createUser(string $name): void {
    echo "[UserService] ユーザー作成: {$name}\n"; // 直書きログ
  }
}

// 環境変数設定（実行前に CLI などで設定）
// putenv("DEBUG_MODE=true");

$orderService = new OrderService();
$orderService->createOrder("order-123");

$userService = new UserService();
$userService->createUser("hiroshi");
