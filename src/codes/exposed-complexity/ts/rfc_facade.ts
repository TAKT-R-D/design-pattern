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

// Facade
class UserProfileFacade {
  private auth = new AuthService();
  private profile = new UserProfileService();
  private audit = new AuditService();

  show(userId: string) {
    if (this.auth.authenticate(userId)) {
      const profile = this.profile.load(userId);
      console.log(profile);
      this.audit.log("プロフィール表示");
    }
  }
}

// 利用例
const facade = new UserProfileFacade();
facade.show("user-123");
