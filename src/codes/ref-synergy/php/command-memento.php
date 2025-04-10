<?php

// Receiver
class TextEditor {
    private string $content = "";

    public function append(string $text): void {
        $this->content .= $text;
    }

    public function deleteLast(int $n): void {
        $this->content = substr($this->content, 0, -$n);
    }

    public function getContent(): string {
        return $this->content;
    }

    public function save(): EditorMemento {
        return new EditorMemento($this->content);
    }

    public function restore(EditorMemento $memento): void {
        $this->content = $memento->getState();
    }
}

// Memento
class EditorMemento {
    public function __construct(private string $state) {}

    public function getState(): string {
        return $this->state;
    }
}

// Command Interface
interface Command {
    public function execute(): void;
    public function undo(): void;
}

// Concrete Command
class TypeCommand implements Command {
    private EditorMemento $backup;

    public function __construct(
        private TextEditor $editor,
        private string $text
    ) {}

    public function execute(): void {
        $this->backup = $this->editor->save();
        $this->editor->append($this->text);
    }

    public function undo(): void {
        $this->editor->restore($this->backup);
    }
}

// Invoker
class CommandHistory {
    private array $history = [];

    public function executeCommand(Command $command): void {
        $command->execute();
        $this->history[] = $command;
    }

    public function undo(): void {
        $command = array_pop($this->history);
        if ($command) {
            $command->undo();
        }
    }
}

// 使用例
$editor = new TextEditor();
$history = new CommandHistory();

$history->executeCommand(new TypeCommand($editor, "Hello, "));
$history->executeCommand(new TypeCommand($editor, "world!"));

echo $editor->getContent(); // Hello, world!
$history->undo();
echo $editor->getContent(); // Hello,
