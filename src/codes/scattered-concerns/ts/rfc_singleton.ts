class Config {
  private static instance: Config;
  private debugMode: boolean;

  private constructor() {
    this.debugMode = process.env.DEBUG_MODE === "true";
  }

  static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  isDebug(): boolean {
    return this.debugMode;
  }
}

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
    console.log(`[LOG] ${message}`);
  }

  debug(message: string) {
    if (Config.getInstance().isDebug()) {
      console.log(`[DEBUG] ${message}`);
    }
  }
}

// 利用例
class OrderService {
  createOrder(orderId: string) {
    const logger = Logger.getInstance();
    logger.log(`注文作成: ${orderId}`);
    logger.debug(`注文詳細: ${orderId}`);
  }
}
