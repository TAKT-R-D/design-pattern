<?php
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
    echo "[LOG]: {$message}\n";
  }
}

class UserService {
  private Logger $logger;

  public function __construct() {
    $this->logger = Logger::getInstance(); // Singleton
  }

  public function createUser(string $name): void {
    $this->logger->log("ユーザー作成: {$name}");
  }
}

// 利用例
$service = new UserService();
$service->createUser("Hiroshi");
