class TextEditor:
    def __init__(self):
        self.content = ""

    def type(self, text: str):
        self.content += text

    def get_content(self) -> str:
        return self.content

# 利用例
editor = TextEditor()
editor.type("Hello ")
editor.type("World")

print(editor.get_content())  # Hello World

# 取り消しができない！
