// Receiver
class TextEditor {
  private content: string = "";

  append(text: string) {
    this.content += text;
  }

  deleteLast(n: number) {
    this.content = this.content.slice(0, -n);
  }

  getContent() {
    return this.content;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento) {
    this.content = memento.getState();
  }
}

// Memento
class EditorMemento {
  constructor(private readonly state: string) {}

  getState(): string {
    return this.state;
  }
}

// Command インターフェース
interface Command {
  execute(): void;
  undo(): void;
}

// Concrete Command
class TypeCommand implements Command {
  private backup: EditorMemento;

  constructor(private editor: TextEditor, private text: string) {}

  execute(): void {
    this.backup = this.editor.save();
    this.editor.append(this.text);
  }

  undo(): void {
    this.editor.restore(this.backup);
  }
}

// Invoker
class CommandHistory {
  private history: Command[] = [];

  executeCommand(command: Command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command) command.undo();
  }
}

// 使用例
const editor = new TextEditor();
const history = new CommandHistory();

history.executeCommand(new TypeCommand(editor, "Hello, "));
history.executeCommand(new TypeCommand(editor, "world!"));

console.log(editor.getContent()); // Hello, world!

history.undo();
console.log(editor.getContent()); // Hello,
