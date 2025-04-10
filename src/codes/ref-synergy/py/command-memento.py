# Receiver
class TextEditor:
    def __init__(self):
        self._content = ""

    def append(self, text: str):
        self._content += text

    def delete_last(self, n: int):
        self._content = self._content[:-n]

    def get_content(self) -> str:
        return self._content

    def save(self):
        return EditorMemento(self._content)

    def restore(self, memento):
        self._content = memento.get_state()


# Memento
class EditorMemento:
    def __init__(self, state: str):
        self._state = state

    def get_state(self) -> str:
        return self._state


# Command Interface
class Command:
    def execute(self):
        pass

    def undo(self):
        pass


# Concrete Command
class TypeCommand(Command):
    def __init__(self, editor: TextEditor, text: str):
        self.editor = editor
        self.text = text
        self.backup = None

    def execute(self):
        self.backup = self.editor.save()
        self.editor.append(self.text)

    def undo(self):
        if self.backup:
            self.editor.restore(self.backup)


# Invoker
class CommandHistory:
    def __init__(self):
        self.history = []

    def execute_command(self, command: Command):
        command.execute()
        self.history.append(command)

    def undo(self):
        if self.history:
            command = self.history.pop()
            command.undo()


# 使用例
editor = TextEditor()
history = CommandHistory()

history.execute_command(TypeCommand(editor, "Hello, "))
history.execute_command(TypeCommand(editor, "world!"))

print(editor.get_content())  # Hello, world!
history.undo()
print(editor.get_content())  # Hello,
