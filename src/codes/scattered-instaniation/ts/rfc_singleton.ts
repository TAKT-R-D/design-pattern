class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

class UserService {
  private logger: Logger;

  constructor() {
    this.logger = Logger.getInstance(); // Singleton の取得
  }

  createUser(name: string) {
    this.logger.log(`ユーザー作成: ${name}`);
  }
}

// 利用例
const service = new UserService();
service.createUser("Hiroshi");
