<?php

class AuthService {
  public function authenticate(string $userId): bool {
    echo "ユーザー認証: {$userId}\n";
    return true;
  }
}

class UserProfileService {
  public function load(string $userId): array {
    echo "プロフィール取得: {$userId}\n";
    return ["name" => "Hiroshi", "id" => $userId];
  }
}

class AuditService {
  public function log(string $action): void {
    echo "[監査ログ] {$action}\n";
  }
}

// Facade
class UserProfileFacade {
  private AuthService $auth;
  private UserProfileService $profile;
  private AuditService $audit;

  public function __construct() {
    $this->auth = new AuthService();
    $this->profile = new UserProfileService();
    $this->audit = new AuditService();
  }

  public function show(string $userId): void {
    if ($this->auth->authenticate($userId)) {
      $profile = $this->profile->load($userId);
      print_r($profile);
      $this->audit->log("プロフィール表示");
    }
  }
}

// 利用例
$facade = new UserProfileFacade();
$facade->show("user-123");
