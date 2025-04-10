class TextEditor {
  private content: string = "";

  type(text: string) {
    this.content += text;
  }

  getContent() {
    return this.content;
  }
}

const editor = new TextEditor();
editor.type("Hello ");
editor.type("World");

console.log(editor.getContent()); // Hello World

// 取り消しができない！
