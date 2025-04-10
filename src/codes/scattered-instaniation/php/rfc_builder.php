<?php

class Logger {
  public function log(string $message): void {
    echo "[LOG]: {$message}\n";
  }
}

class UserService {
  public function __construct(private Logger $logger) {}

  public function createUser(string $name): void {
    $this->logger->log("ユーザー作成: {$name}");
  }
}

class UserServiceBuilder {
  private ?Logger $logger = null;

  public function setLogger(Logger $logger): self {
    $this->logger = $logger;
    return $this;
  }

  public function build(): UserService {
    if (!$this->logger) {
      throw new Exception("Logger is required");
    }
    return new UserService($this->logger);
  }
}

// 利用例
$builder = new UserServiceBuilder();
$service = $builder->setLogger(new Logger())->build();
$service->createUser("Hiroshi");
