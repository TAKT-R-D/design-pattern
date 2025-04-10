<?php

interface DiscountState {
  public function calculate(float $basePrice): float;
}

class StudentState implements DiscountState {
  public function calculate(float $basePrice): float {
    return $basePrice * 0.8;
  }
}

class MemberState implements DiscountState {
  public function calculate(float $basePrice): float {
    return $basePrice * 0.9;
  }
}

class VIPState implements DiscountState {
  public function calculate(float $basePrice): float {
    return $basePrice * 0.7;
  }
}

class DefaultState implements DiscountState {
  public function calculate(float $basePrice): float {
    return $basePrice;
  }
}

class DiscountContext {
  private DiscountState $state;

  public function __construct(DiscountState $state) {
    $this->state = $state;
  }

  public function setState(DiscountState $state): void {
    $this->state = $state;
  }

  public function calculate(float $basePrice): float {
    return $this->state->calculate($basePrice);
  }
}

// 利用例
$context = new DiscountContext(new StudentState());
echo $context->calculate(1000) . PHP_EOL; // 800
