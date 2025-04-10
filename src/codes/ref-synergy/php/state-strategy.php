<?php

interface PaymentStrategy {
  public function pay(int $amount): void;
}

class CreditCardPayment implements PaymentStrategy {
  public function pay(int $amount): void {
    echo "[CreditCard] Paid {$amount}\n";
  }
}

class PayPalPayment implements PaymentStrategy {
  public function pay(int $amount): void {
    echo "[PayPal] Paid {$amount}\n";
  }
}

interface PaymentState {
  public function handle(int $amount): void;
  public function setStrategy(PaymentStrategy $strategy): void;
}

class ReadyState implements PaymentState {
  private PaymentStrategy $strategy;

  public function __construct(PaymentStrategy $strategy) {
    $this->strategy = $strategy;
  }

  public function handle(int $amount): void {
    echo "Ready to process payment\n";
    $this->strategy->pay($amount);
  }

  public function setStrategy(PaymentStrategy $strategy): void {
    $this->strategy = $strategy;
  }
}

class DisabledState implements PaymentState {
  public function handle(int $amount): void {
    echo "Payment is currently disabled\n";
  }

  public function setStrategy(PaymentStrategy $strategy): void {
    echo "Cannot set strategy while disabled\n";
  }
}

class PaymentContext {
  private PaymentState $state;

  public function __construct(PaymentState $state) {
    $this->state = $state;
  }

  public function setState(PaymentState $state): void {
    $this->state = $state;
  }

  public function setStrategy(PaymentStrategy $strategy): void {
    $this->state->setStrategy($strategy);
  }

  public function pay(int $amount): void {
    $this->state->handle($amount);
  }
}

// Usage
$context = new PaymentContext(new ReadyState(new CreditCardPayment()));
$context->pay(100);

$context->setStrategy(new PayPalPayment());
$context->pay(200);

$context->setState(new DisabledState());
$context->pay(300);
