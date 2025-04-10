<?php

class Config {
  private static ?Config $instance = null;
  private bool $debugMode;

  private function __construct() {
    $this->debugMode = getenv("DEBUG_MODE") === "true";
  }

  public static function getInstance(): Config {
    if (self::$instance === null) {
      self::$instance = new Config();
    }
    return self::$instance;
  }

  public function isDebug(): bool {
    return $this->debugMode;
  }
}

class Logger {
  private static ?Logger $instance = null;

  private function __construct() {}

  public static function getInstance(): Logger {
    if (self::$instance === null) {
      self::$instance = new Logger();
    }
    return self::$instance;
  }

  public function log(string $message): void {
    echo "[LOG] {$message}\n";
  }

  public function debug(string $message): void {
    if (Config::getInstance()->isDebug()) {
      echo "[DEBUG] {$message}\n";
    }
  }
}

class OrderService {
  public function createOrder(string $orderId): void {
    $logger = Logger::getInstance();
    $logger->log("注文作成: {$orderId}");
    $logger->debug("注文詳細: {$orderId}");
  }
}
