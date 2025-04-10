class Logger {
  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

// Creator（抽象クラス）
abstract class UserService {
  protected logger: Logger;

  constructor() {
    this.logger = this.createLogger(); // Factory Method を呼ぶ
  }

  protected abstract createLogger(): Logger;

  createUser(name: string) {
    this.logger.log(`ユーザー作成: ${name}`);
  }
}

// ConcreteCreator
class DefaultUserService extends UserService {
  protected createLogger(): Logger {
    return new Logger();
  }
}

// 利用例
const service = new DefaultUserService();
service.createUser("Hiroshi");
