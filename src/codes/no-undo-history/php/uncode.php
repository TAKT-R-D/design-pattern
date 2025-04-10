<?php

class TextEditor {
  private string $content = "";

  public function type(string $text): void {
    $this->content .= $text;
  }

  public function getContent(): string {
    return $this->content;
  }
}

// 利用例
$editor = new TextEditor();
$editor->type("Hello ");
$editor->type("World");

echo $editor->getContent(); // Hello World

// 取り消しができない！
