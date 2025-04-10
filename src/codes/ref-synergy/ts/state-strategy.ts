interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`[CreditCard] Paid ${amount}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`[PayPal] Paid ${amount}`);
  }
}

interface PaymentState {
  handle(amount: number): void;
  setStrategy(strategy: PaymentStrategy): void;
}

class ReadyState implements PaymentState {
  constructor(private strategy: PaymentStrategy) {}

  handle(amount: number): void {
    console.log("Ready to process payment");
    this.strategy.pay(amount);
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }
}

class DisabledState implements PaymentState {
  handle(amount: number): void {
    console.log("Payment is currently disabled");
  }

  setStrategy(strategy: PaymentStrategy): void {
    console.log("Cannot set strategy while disabled");
  }
}

class PaymentContext {
  constructor(private state: PaymentState) {}

  setState(state: PaymentState) {
    this.state = state;
  }

  setStrategy(strategy: PaymentStrategy) {
    this.state.setStrategy(strategy);
  }

  pay(amount: number) {
    this.state.handle(amount);
  }
}

// Usage
const context = new PaymentContext(new ReadyState(new CreditCardPayment()));
context.pay(100);

context.setStrategy(new PayPalPayment());
context.pay(200);

context.setState(new DisabledState());
context.pay(300);
