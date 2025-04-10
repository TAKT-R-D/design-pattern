class Logger {
  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

class UserService {
  private logger: Logger;

  constructor() {
    this.logger = new Logger(); // 毎回 new!!
  }

  createUser(name: string) {
    this.logger.log(`ユーザー作成: ${name}`);
  }
}
