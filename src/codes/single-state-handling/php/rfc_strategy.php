<?php

interface PublishStrategy {
  public function publish(): void;
}

class DraftStrategy implements PublishStrategy {
  public function publish(): void {
    echo "レビュー依頼を送信\n";
  }
}

class ReviewStrategy implements PublishStrategy {
  public function publish(): void {
    echo "公開しました\n";
  }
}

class PublishedStrategy implements PublishStrategy {
  public function publish(): void {
    echo "すでに公開済みです\n";
  }
}

class Document {
  public function __construct(private PublishStrategy $strategy) {}

  public function setStrategy(PublishStrategy $strategy): void {
    $this->strategy = $strategy;
  }

  public function publish(): void {
    $this->strategy->publish();
  }
}

// 利用例
$doc = new Document(new DraftStrategy());
$doc->publish(); // → レビュー依頼

$doc->setStrategy(new ReviewStrategy());
$doc->publish(); // → 公開

$doc->setStrategy(new PublishedStrategy());
$doc->publish(); // → すでに公開済み
