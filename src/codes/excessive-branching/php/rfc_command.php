<?php

interface DiscountCommand {
  public function execute(float $basePrice): float;
}

class StudentDiscountCommand implements DiscountCommand {
  public function execute(float $basePrice): float {
    return $basePrice * 0.8;
  }
}

class MemberDiscountCommand implements DiscountCommand {
  public function execute(float $basePrice): float {
    return $basePrice * 0.9;
  }
}

class VIPDiscountCommand implements DiscountCommand {
  public function execute(float $basePrice): float {
    return $basePrice * 0.7;
  }
}

class NoDiscountCommand implements DiscountCommand {
  public function execute(float $basePrice): float {
    return $basePrice;
  }
}

class DiscountExecutor {
  private DiscountCommand $command;

  public function __construct(DiscountCommand $command) {
    $this->command = $command;
  }

  public function setCommand(DiscountCommand $command): void {
    $this->command = $command;
  }

  public function run(float $basePrice): float {
    return $this->command->execute($basePrice);
  }
}

// 利用例
$userType = "member";
switch ($userType) {
  case "student":
    $command = new StudentDiscountCommand();
    break;
  case "member":
    $command = new MemberDiscountCommand();
    break;
  case "vip":
    $command = new VIPDiscountCommand();
    break;
  default:
    $command = new NoDiscountCommand();
}

$executor = new DiscountExecutor($command);
echo $executor->run(1000) . PHP_EOL; // 900
