<?php
class Logger {
  public function log(string $message): void {
    echo "[LOG]: {$message}\n";
  }
}

// Creator（抽象クラス）
abstract class UserService {
  protected Logger $logger;

  public function __construct() {
    $this->logger = $this->createLogger();
  }

  abstract protected function createLogger(): Logger;

  public function createUser(string $name): void {
    $this->logger->log("ユーザー作成: {$name}");
  }
}

// ConcreteCreator
class DefaultUserService extends UserService {
  protected function createLogger(): Logger {
    return new Logger();
  }
}

// 利用例
$service = new DefaultUserService();
$service->createUser("Hiroshi");
