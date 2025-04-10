<?php

interface DocumentState {
  public function publish(DocumentContext $context): void;
}

class DraftState implements DocumentState {
  public function publish(DocumentContext $context): void {
    echo "レビュー依頼を送信\n";
    $context->setState(new ReviewState());
  }
}

class ReviewState implements DocumentState {
  public function publish(DocumentContext $context): void {
    echo "公開しました\n";
    $context->setState(new PublishedState());
  }
}

class PublishedState implements DocumentState {
  public function publish(DocumentContext $context): void {
    echo "すでに公開済みです\n";
  }
}

class DocumentContext {
  private DocumentState $state;

  public function __construct() {
    $this->state = new DraftState();
  }

  public function setState(DocumentState $state): void {
    $this->state = $state;
  }

  public function publish(): void {
    $this->state->publish($this);
  }
}

// 利用例
$doc = new DocumentContext();
$doc->publish(); // → レビュー依頼
$doc->publish(); // → 公開
$doc->publish(); // → すでに公開済み
