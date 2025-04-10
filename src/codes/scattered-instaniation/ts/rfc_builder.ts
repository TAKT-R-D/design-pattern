class Logger {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

// 対象クラス
class UserService {
  constructor(private logger: Logger) {}

  createUser(name: string) {
    this.logger.log(`ユーザー作成: ${name}`);
  }
}

// Builder
class UserServiceBuilder {
  private logger: Logger | null = null;

  setLogger(logger: Logger): this {
    this.logger = logger;
    return this;
  }

  build(): UserService {
    if (!this.logger) {
      throw new Error("Logger is required");
    }
    return new UserService(this.logger);
  }
}

// 利用例
const builder = new UserServiceBuilder();
const service = builder.setLogger(new Logger()).build();
service.createUser("Hiroshi");
