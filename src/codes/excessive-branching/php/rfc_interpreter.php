<?php

interface Expression {
  public function interpret(string $userType, float $basePrice): float;
}

class DiscountExpression implements Expression {
  public function __construct(private string $targetType, private float $rate) {}

  public function interpret(string $userType, float $basePrice): float {
    return $userType === $this->targetType ? $basePrice * $this->rate : $basePrice;
  }
}

class DiscountInterpreter {
  private array $expressions = [];

  public function add(DiscountExpression $expr): void {
    $this->expressions[] = $expr;
  }

  public function interpret(string $userType, float $basePrice): float {
    foreach ($this->expressions as $expr) {
      $result = $expr->interpret($userType, $basePrice);
      if ($result !== $basePrice) {
        return $result;
      }
    }
    return $basePrice;
  }
}

// 利用例
$interpreter = new DiscountInterpreter();
$interpreter->add(new DiscountExpression("student", 0.8));
$interpreter->add(new DiscountExpression("member", 0.9));
$interpreter->add(new DiscountExpression("vip", 0.7));

echo $interpreter->interpret("vip", 1000) . PHP_EOL;     // 700
echo $interpreter->interpret("student", 1000) . PHP_EOL; // 800
echo $interpreter->interpret("guest", 1000) . PHP_EOL;   // 1000
