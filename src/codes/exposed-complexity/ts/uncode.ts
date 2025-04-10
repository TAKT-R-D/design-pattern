class AuthService {
  authenticate(userId: string): boolean {
    console.log(`ユーザー認証: ${userId}`);
    return true;
  }
}

class UserProfileService {
  load(userId: string): object {
    console.log(`プロフィール取得: ${userId}`);
    return { name: "Hiroshi", id: userId };
  }
}

class AuditService {
  log(action: string) {
    console.log(`[監査ログ] ${action}`);
  }
}

// 呼び出し元が全部自分で処理を組み立てている
function showUserProfile(userId: string) {
  const auth = new AuthService();
  const profileService = new UserProfileService();
  const audit = new AuditService();

  if (auth.authenticate(userId)) {
    const profile = profileService.load(userId);
    console.log(profile);
    audit.log("プロフィール表示");
  }
}
