<?php

// Strategy インターフェース
interface DiscountStrategy {
    public function calculate(float $basePrice): float;
}

// ConcreteStrategy: 学生割引
class StudentDiscount implements DiscountStrategy {
    public function calculate(float $basePrice): float {
        return $basePrice * 0.8;
    }
}

// ConcreteStrategy: 会員割引
class MemberDiscount implements DiscountStrategy {
    public function calculate(float $basePrice): float {
        return $basePrice * 0.9;
    }
}

// ConcreteStrategy: VIP割引
class VIPDiscount implements DiscountStrategy {
    public function calculate(float $basePrice): float {
        return $basePrice * 0.7;
    }
}

// ConcreteStrategy: 割引なし
class NoDiscount implements DiscountStrategy {
    public function calculate(float $basePrice): float {
        return $basePrice;
    }
}

// Context クラス
class PriceCalculator {
    private DiscountStrategy $discountStrategy;

    public function __construct(DiscountStrategy $discountStrategy) {
        $this->discountStrategy = $discountStrategy;
    }

    public function calculatePrice(float $basePrice): float {
        return $this->discountStrategy->calculate($basePrice);
    }
}

// 利用例
$basePrice = 1000;

$studentCalculator = new PriceCalculator(new StudentDiscount());
echo $studentCalculator->calculatePrice($basePrice) . PHP_EOL; // 800

$memberCalculator = new PriceCalculator(new MemberDiscount());
echo $memberCalculator->calculatePrice($basePrice) . PHP_EOL; // 900

$vipCalculator = new PriceCalculator(new VIPDiscount());
echo $vipCalculator->calculatePrice($basePrice) . PHP_EOL; // 700

$regularCalculator = new PriceCalculator(new NoDiscount());
echo $regularCalculator->calculatePrice($basePrice) . PHP_EOL; // 1000
