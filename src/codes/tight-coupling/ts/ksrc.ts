class InventoryService {
  reduceStock(productId: string, amount: number) {
    console.log(`在庫を減らしました: ${productId} × ${amount}`);
  }
}

class OrderService {
  private inventory: InventoryService;

  constructor() {
    this.inventory = new InventoryService();
  }

  placeOrder(productId: string, quantity: number) {
    console.log(`注文受付: ${productId} × ${quantity}`);
    this.inventory.reduceStock(productId, quantity);
  }
}
