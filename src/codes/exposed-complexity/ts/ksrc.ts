class InventoryChecker {
  check(productId: string): boolean {
    console.log(`在庫確認: ${productId}`);
    return true;
  }
}

class PaymentGateway {
  pay(amount: number): boolean {
    console.log(`支払い処理: ¥${amount}`);
    return true;
  }
}

class ReceiptPrinter {
  print(productId: string, amount: number) {
    console.log(`領収書発行: 商品=${productId}, 金額=¥${amount}`);
  }
}

function completePurchase(productId: string, amount: number) {
  const checker = new InventoryChecker();
  const payment = new PaymentGateway();
  const printer = new ReceiptPrinter();

  if (checker.check(productId)) {
    if (payment.pay(amount)) {
      printer.print(productId, amount);
    }
  }
}
