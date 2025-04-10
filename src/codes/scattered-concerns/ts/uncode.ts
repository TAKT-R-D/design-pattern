// あちこちで Logger や設定を直接扱っている
class OrderService {
  createOrder(orderId: string) {
    console.log(`[OrderService] 注文作成: ${orderId}`); // 直書きログ
    const debugMode = process.env.DEBUG_MODE === "true"; // 設定の直接参照
    if (debugMode) {
      console.log(`[DEBUG] 注文詳細: ${orderId}`);
    }
  }
}

class UserService {
  createUser(name: string) {
    console.log(`[UserService] ユーザー作成: ${name}`);
  }
}
