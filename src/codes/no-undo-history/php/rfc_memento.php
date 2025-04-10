<?php

class EditorMemento {
  public function __construct(private string $state) {}

  public function getState(): string {
    return $this->state;
  }
}

class TextEditor {
  private string $content = "";

  public function type(string $text): void {
    $this->content .= $text;
  }

  public function getContent(): string {
    return $this->content;
  }

  public function createMemento(): EditorMemento {
    return new EditorMemento($this->content);
  }

  public function restore(EditorMemento $memento): void {
    $this->content = $memento->getState();
  }
}

// 利用例
$editor = new TextEditor();
$history = [];

$editor->type("Hello ");
$history[] = $editor->createMemento();

$editor->type("World");
$history[] = $editor->createMemento();

echo $editor->getContent() . "\n"; // Hello World

// Undo
array_pop($history); // 現在の状態を削除
$last = end($history);
$editor->restore($last);

echo $editor->getContent() . "\n"; // Hello 
