class Mailer:
    def send(self, email: str, content: str):
        print(f"送信しました: {email} → {content}")

class UserService:
    def __init__(self):
        self.mailer = Mailer()  # ← 密結合：直接生成

    def notify_user(self, email: str):
        content = "ようこそ！"
        self.mailer.send(email, content)  # ← Mailer に強く依存

# 利用例
service = UserService()
service.notify_user("user@example.com")
