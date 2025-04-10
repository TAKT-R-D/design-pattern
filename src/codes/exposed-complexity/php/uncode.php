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

// 呼び出し元がすべて処理を組み立てている
function showUserProfile(string $userId): void {
  $auth = new AuthService();
  $profileService = new UserProfileService();
  $audit = new AuditService();

  if ($auth->authenticate($userId)) {
    $profile = $profileService->load($userId);
    print_r($profile);
    $audit->log("プロフィール表示");
  }
}

// 実行
showUserProfile("user-123");
