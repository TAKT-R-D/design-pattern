<?php

// 製品インターフェース
interface Logger {
  public function log(string $message): void;
}

// 製品の具象クラス
class ConsoleLogger implements Logger {
  public function log(string $message): void {
    echo "[LOG]: {$message}\n";
  }
}

// 抽象ファクトリ
interface ServiceFactory {
  public function createLogger(): Logger;
}

// 具体ファクトリ
class DefaultServiceFactory implements ServiceFactory {
  public function createLogger(): Logger {
    return new ConsoleLogger();
  }
}

// クライアント
class UserService {
  private Logger $logger;

  public function __construct(ServiceFactory $factory) {
    $this->logger = $factory->createLogger();
  }

  public function createUser(string $name): void {
    $this->logger->log("ユーザー作成: {$name}");
  }
}

// 利用例
$factory = new DefaultServiceFactory();
$service = new UserService($factory);
$service->createUser("Hiroshi");
