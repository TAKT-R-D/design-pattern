<?php

class Config {
  public static function isDebug(): bool {
    return getenv("DEBUG_MODE") === "true";
  }
}

class LoggerFacade {
  public static function log(string $message): void {
    echo "[LOG] {$message}\n";
  }

  public static function debug(string $message): void {
    if (Config::isDebug()) {
      echo "[DEBUG] {$message}\n";
    }
  }
}

class OrderService {
  public function createOrder(string $orderId): void {
    LoggerFacade::log("注文作成: {$orderId}");
    LoggerFacade::debug("注文詳細: {$orderId}");
  }
}
