class Config {
  static isDebug(): boolean {
    return process.env.DEBUG_MODE === "true";
  }
}

class LoggerFacade {
  static log(message: string) {
    console.log(`[LOG] ${message}`);
  }

  static debug(message: string) {
    if (Config.isDebug()) {
      console.log(`[DEBUG] ${message}`);
    }
  }
}

// 利用例
class OrderService {
  createOrder(orderId: string) {
    LoggerFacade.log(`注文作成: ${orderId}`);
    LoggerFacade.debug(`注文詳細: ${orderId}`);
  }
}
