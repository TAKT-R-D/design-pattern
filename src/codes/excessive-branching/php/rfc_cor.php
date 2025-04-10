<?php

interface DiscountHandler {
  public function setNext(DiscountHandler $handler): DiscountHandler;
  public function handle(string $userType, float $basePrice): float;
}

abstract class BaseDiscountHandler implements DiscountHandler {
  private ?DiscountHandler $nextHandler = null;

  public function setNext(DiscountHandler $handler): DiscountHandler {
    $this->nextHandler = $handler;
    return $handler;
  }

  public function handle(string $userType, float $basePrice): float {
    if ($this->nextHandler) {
      return $this->nextHandler->handle($userType, $basePrice);
    }
    return $basePrice;
  }
}

class StudentHandler extends BaseDiscountHandler {
  public function handle(string $userType, float $basePrice): float {
    if ($userType === "student") return $basePrice * 0.8;
    return parent::handle($userType, $basePrice);
  }
}

class MemberHandler extends BaseDiscountHandler {
  public function handle(string $userType, float $basePrice): float {
    if ($userType === "member") return $basePrice * 0.9;
    return parent::handle($userType, $basePrice);
  }
}

class VIPHandler extends BaseDiscountHandler {
  public function handle(string $userType, float $basePrice): float {
    if ($userType === "vip") return $basePrice * 0.7;
    return parent::handle($userType, $basePrice);
  }
}

// 利用例
$student = new StudentHandler();
$member = new MemberHandler();
$vip = new VIPHandler();

$student->setNext($member)->setNext($vip);

echo $student->handle("vip", 1000) . PHP_EOL;     // 700
echo $student->handle("student", 1000) . PHP_EOL; // 800
echo $student->handle("guest", 1000) . PHP_EOL;   // 1000
