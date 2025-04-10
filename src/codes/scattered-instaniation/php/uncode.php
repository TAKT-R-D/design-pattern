<?php
class Logger {
  public function log(string $message): void {
    echo "[LOG]: {$message}\n";
  }
}

class UserService {
  private Logger $logger;

  public function __construct() {
    $this->logger = new Logger(); // 毎回 new!!
  }

  public function createUser(string $name): void {
    $this->logger->log("ユーザー作成: {$name}");
  }
}
