<?php
function calculatePrice(string $userType, float $basePrice): float {
  if ($userType === "student") {
    return $basePrice * 0.8;
  } elseif ($userType === "member") {
    return $basePrice * 0.9;
  } elseif ($userType === "vip") {
    return $basePrice * 0.7;
  } else {
    return $basePrice;
  }
}

// 利用例
echo calculatePrice("student", 1000) . PHP_EOL; // 800
