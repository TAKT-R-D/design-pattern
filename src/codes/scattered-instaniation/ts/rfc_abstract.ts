// 製品：Logger
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

// 抽象ファクトリ
interface ServiceFactory {
  createLogger(): Logger;
}

// 具体ファクトリ
class DefaultServiceFactory implements ServiceFactory {
  createLogger(): Logger {
    return new ConsoleLogger();
  }
}

// クライアント
class UserService {
  private logger: Logger;

  constructor(factory: ServiceFactory) {
    this.logger = factory.createLogger();
  }

  createUser(name: string) {
    this.logger.log(`ユーザー作成: ${name}`);
  }
}

// 利用例
const factory = new DefaultServiceFactory();
const service = new UserService(factory);
service.createUser("Hiroshi");
