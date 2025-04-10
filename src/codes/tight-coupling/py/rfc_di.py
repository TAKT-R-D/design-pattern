from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, email: str, message: str):
        pass

class Mailer(Notifier):
    def send(self, email: str, message: str):
        print(f"送信しました: {email} → {message}")

class UserService:
    def __init__(self, notifier: Notifier):
        self.notifier = notifier

    def register_user(self, email: str):
        print(f"ユーザー登録: {email}")
        self.notifier.send(email, "ようこそ！")

# 利用例
mailer = Mailer()
service = UserService(mailer)
service.register_user("user@example.com")
