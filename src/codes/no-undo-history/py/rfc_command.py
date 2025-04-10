from abc import ABC, abstractmethod

class Command(ABC):
    @abstractmethod
    def execute(self): pass

    @abstractmethod
    def undo(self): pass

class TextEditor:
    def __init__(self):
        self.content = ""

    def add(self, text: str):
        self.content += text

    def remove(self, length: int):
        self.content = self.content[:-length]

    def get_content(self) -> str:
        return self.content

class TypeCommand(Command):
    def __init__(self, editor: TextEditor, text: str):
        self.editor = editor
        self.text = text

    def execute(self):
        self.editor.add(self.text)

    def undo(self):
        self.editor.remove(len(self.text))

# 利用例
editor = TextEditor()
history: list[Command] = []

cmd1 = TypeCommand(editor, "Hello ")
cmd1.execute()
history.append(cmd1)

cmd2 = TypeCommand(editor, "World")
cmd2.execute()
history.append(cmd2)

print(editor.get_content())  # Hello World

# Undo
last = history.pop()
last.undo()

print(editor.get_content())  # Hello 
