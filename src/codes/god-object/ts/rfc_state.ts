interface OrderState {
  confirm(order: StatefulOrderProcessor): void;
}

class UnconfirmedState implements OrderState {
  confirm(order: StatefulOrderProcessor): void {
    // 在庫調整・メール送信など
    InventoryService.reduce(order.productIds);
    EmailService.send(order.userEmail, "注文が確定されました");
    OrderLogger.log("order-" + Math.random().toString(36).substring(2));

    order.setState(new ConfirmedState());
  }
}

class ConfirmedState implements OrderState {
  confirm(order: StatefulOrderProcessor): void {
    console.log("すでに確定済みです");
  }
}

class StatefulOrderProcessor {
  private state: OrderState;

  constructor(public productIds: string[], public userEmail: string) {
    this.state = new UnconfirmedState();
  }

  setState(state: OrderState) {
    this.state = state;
  }

  confirmOrder() {
    this.state.confirm(this);
  }
}

// 利用例
const stateProcessor = new StatefulOrderProcessor(
  ["p01", "p02"],
  "hiroshi@example.com"
);
stateProcessor.confirmOrder(); // 初回 → 確定
stateProcessor.confirmOrder(); // 2回目 → 確定済みメッセージ
