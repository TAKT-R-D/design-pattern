from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def update(self, email: str):
        pass

class Mailer(Observer):
    def update(self, email: str):
        print(f"送信しました: {email} → ようこそ！")

class UserService:
    def __init__(self):
        self._observers: list[Observer] = []

    def add_observer(self, observer: Observer):
        self._observers.append(observer)

    def _notify_observers(self, email: str):
        for observer in self._observers:
            observer.update(email)

    def register_user(self, email: str):
        print(f"ユーザー登録: {email}")
        self._notify_observers(email)

# 利用例
service = UserService()
service.add_observer(Mailer())
service.register_user("user@example.com")
