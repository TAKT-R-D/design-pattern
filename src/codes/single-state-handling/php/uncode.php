<?php

class Document {
  private string $state = "draft"; // 状態: 'draft', 'review', 'published'

  public function publish(): void {
    if ($this->state === "draft") {
      echo "レビュー依頼を送信\n";
      $this->state = "review";
    } elseif ($this->state === "review") {
      echo "公開しました\n";
      $this->state = "published";
    } elseif ($this->state === "published") {
      echo "すでに公開済みです\n";
    }
  }
}
