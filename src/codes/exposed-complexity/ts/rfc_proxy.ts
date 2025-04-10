interface UserProfile {
  load(userId: string): object;
}

// 本体
class UserProfileService implements UserProfile {
  load(userId: string): object {
    console.log(`プロフィール取得: ${userId}`);
    return { name: "Hiroshi", id: userId };
  }
}

// Proxy（認証と監査を担当）
class UserProfileProxy implements UserProfile {
  private real = new UserProfileService();
  private auth = new AuthService();
  private audit = new AuditService();

  load(userId: string): object {
    if (!this.auth.authenticate(userId)) {
      throw new Error("認証失敗");
    }
    const profile = this.real.load(userId);
    this.audit.log("プロフィール表示");
    return profile;
  }
}

// 利用例
const proxy = new UserProfileProxy();
const profile = proxy.load("user-123");
console.log(profile);
