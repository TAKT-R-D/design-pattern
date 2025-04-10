<?php

interface Step {
  public function execute(array &$context): void;
}

class AuthStep implements Step {
  public function execute(array &$context): void {
    echo "ユーザー認証: {$context['userId']}\n";
    $context['authenticated'] = true;
  }
}

class LoadProfileStep implements Step {
  public function execute(array &$context): void {
    if (!($context['authenticated'] ?? false)) {
      throw new Exception("未認証");
    }
    echo "プロフィール取得: {$context['userId']}\n";
    $context['profile'] = ['name' => 'Hiroshi', 'id' => $context['userId']];
  }
}

class AuditStep implements Step {
  public function execute(array &$context): void {
    echo "[監査ログ] プロフィール表示\n";
  }
}

class UserProfileFlow {
  private array $steps;

  public function __construct() {
    $this->steps = [new AuthStep(), new LoadProfileStep(), new AuditStep()];
  }

  public function execute(string $userId): void {
    $context = ['userId' => $userId];
    foreach ($this->steps as $step) {
      $step->execute($context);
    }
    print_r($context['profile']);
  }
}

// 利用例
$flow = new UserProfileFlow();
$flow->execute("user-123");
