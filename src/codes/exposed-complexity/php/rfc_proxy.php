<?php

interface UserProfile {
  public function load(string $userId): array;
}

class UserProfileService implements UserProfile {
  public function load(string $userId): array {
    echo "プロフィール取得: {$userId}\n";
    return ["name" => "Hiroshi", "id" => $userId];
  }
}

class UserProfileProxy implements UserProfile {
  private UserProfileService $real;
  private AuthService $auth;
  private AuditService $audit;

  public function __construct() {
    $this->real = new UserProfileService();
    $this->auth = new AuthService();
    $this->audit = new AuditService();
  }

  public function load(string $userId): array {
    if (!$this->auth->authenticate($userId)) {
      throw new Exception("認証失敗");
    }
    $profile = $this->real->load($userId);
    $this->audit->log("プロフィール表示");
    return $profile;
  }
}

// 利用例
$proxy = new UserProfileProxy();
$profile = $proxy->load("user-123");
print_r($profile);
