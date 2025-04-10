// Memento
class EditorMemento {
  constructor(private readonly state: string) {}

  getState(): string {
    return this.state;
  }
}

// Originator（状態を持つ）
class TextEditor {
  private content = "";

  type(text: string): void {
    this.content += text;
  }

  getContent(): string {
    return this.content;
  }

  createMemento(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento): void {
    this.content = memento.getState();
  }
}

// Caretaker（履歴管理）
const editor = new TextEditor();
const history: EditorMemento[] = [];

editor.type("Hello ");
history.push(editor.createMemento());

editor.type("World");
history.push(editor.createMemento());

console.log(editor.getContent()); // Hello World

// Undo
history.pop(); // 現在の状態は捨てる
const last = history[history.length - 1];
editor.restore(last);

console.log(editor.getContent()); // Hello
