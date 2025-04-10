from abc import ABC, abstractmethod

class Mediator(ABC):
    @abstractmethod
    def notify(self, sender: str, data: any):
        pass

class Mailer:
    def send_welcome(self, email: str):
        print(f"送信しました: {email} → ようこそ！")

class AppMediator(Mediator):
    def __init__(self, mailer: Mailer):
        self.mailer = mailer

    def notify(self, sender: str, data: any):
        if sender == "UserService":
            self.mailer.send_welcome(data)

class UserService:
    def __init__(self, mediator: Mediator):
        self.mediator = mediator

    def register_user(self, email: str):
        print(f"ユーザー登録: {email}")
        self.mediator.notify("UserService", email)

# 利用例
mailer = Mailer()
mediator = AppMediator(mailer)
user_service = UserService(mediator)
user_service.register_user("user@example.com")
