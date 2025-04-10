class EditorMemento:
    def __init__(self, state: str):
        self._state = state

    def get_state(self) -> str:
        return self._state

class TextEditor:
    def __init__(self):
        self._content = ""

    def type(self, text: str):
        self._content += text

    def get_content(self) -> str:
        return self._content

    def create_memento(self) -> EditorMemento:
        return EditorMemento(self._content)

    def restore(self, memento: EditorMemento):
        self._content = memento.get_state()

# 利用例
editor = TextEditor()
history: list[EditorMemento] = []

editor.type("Hello ")
history.append(editor.create_memento())

editor.type("World")
history.append(editor.create_memento())

print(editor.get_content())  # Hello World

# Undo
history.pop()  # 最新の状態を破棄
last = history[-1]
editor.restore(last)

print(editor.get_content())  # Hello 
