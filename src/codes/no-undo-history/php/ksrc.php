<?php

class DrawService {
  private array $canvas = [];

  public function draw(string $shape): void {
    $this->canvas[] = $shape;
    echo "描画: {$shape}\n";
  }

  public function showCanvas(): void {
    echo "現在のキャンバス: " . implode(", ", $this->canvas) . "\n";
  }
}

// 利用例
$drawer = new DrawService();
$drawer->draw("circle");
$drawer->draw("square");
$drawer->showCanvas(); // circle, square
