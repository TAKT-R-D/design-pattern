interface Step {
  execute(context: Record<string, any>): void;
}

class AuthStep implements Step {
  execute(context: Record<string, any>): void {
    console.log(`ユーザー認証: ${context.userId}`);
    context.authenticated = true;
  }
}

class LoadProfileStep implements Step {
  execute(context: Record<string, any>): void {
    if (!context.authenticated) throw new Error("未認証");
    console.log(`プロフィール取得: ${context.userId}`);
    context.profile = { name: "Hiroshi", id: context.userId };
  }
}

class AuditStep implements Step {
  execute(context: Record<string, any>): void {
    console.log("[監査ログ] プロフィール表示");
  }
}

class UserProfileFlow {
  private steps: Step[] = [];

  constructor() {
    this.steps = [new AuthStep(), new LoadProfileStep(), new AuditStep()];
  }

  execute(userId: string) {
    const context: Record<string, any> = { userId };
    for (const step of this.steps) {
      step.execute(context);
    }
    console.log(context.profile);
  }
}

// 利用例
const flow = new UserProfileFlow();
flow.execute("user-123");
