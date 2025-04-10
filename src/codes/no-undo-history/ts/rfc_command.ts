// コマンドインターフェース
interface Command {
  execute(): void;
  undo(): void;
}

// 受信者（対象クラス）
class TextEditor {
  private content = "";

  add(text: string) {
    this.content += text;
  }

  remove(length: number) {
    this.content = this.content.slice(0, -length);
  }

  getContent(): string {
    return this.content;
  }
}

// コマンド実装
class TypeCommand implements Command {
  constructor(private editor: TextEditor, private text: string) {}

  execute(): void {
    this.editor.add(this.text);
  }

  undo(): void {
    this.editor.remove(this.text.length);
  }
}

// 利用例
const editor = new TextEditor();
const history: Command[] = [];

const cmd1 = new TypeCommand(editor, "Hello ");
cmd1.execute();
history.push(cmd1);

const cmd2 = new TypeCommand(editor, "World");
cmd2.execute();
history.push(cmd2);

console.log(editor.getContent()); // Hello World

// Undo（巻き戻し）
const last = history.pop();
last?.undo();

console.log(editor.getContent()); // Hello
