<?php

interface Command {
  public function execute(): void;
  public function undo(): void;
}

class TextEditor {
  private string $content = "";

  public function add(string $text): void {
    $this->content .= $text;
  }

  public function remove(int $length): void {
    $this->content = substr($this->content, 0, -$length);
  }

  public function getContent(): string {
    return $this->content;
  }
}

class TypeCommand implements Command {
  public function __construct(private TextEditor $editor, private string $text) {}

  public function execute(): void {
    $this->editor->add($this->text);
  }

  public function undo(): void {
    $this->editor->remove(strlen($this->text));
  }
}

// 利用例
$editor = new TextEditor();
$history = [];

$cmd1 = new TypeCommand($editor, "Hello ");
$cmd1->execute();
$history[] = $cmd1;

$cmd2 = new TypeCommand($editor, "World");
$cmd2->execute();
$history[] = $cmd2;

echo $editor->getContent() . "\n"; // Hello World

// Undo
$last = array_pop($history);
$last->undo();

echo $editor->getContent() . "\n"; // Hello 
