from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def update(self, event: str, data: dict) -> None:
        pass

class Mediator(ABC):
    @abstractmethod
    def notify(self, sender: str, event: str, data: dict) -> None:
        pass

class EventHub(Mediator):
    def __init__(self):
        self.observers: list[Observer] = []

    def add_observer(self, observer: Observer) -> None:
        self.observers.append(observer)

    def notify(self, sender: str, event: str, data: dict) -> None:
        for observer in self.observers:
            observer.update(event, data)

class UserService:
    def __init__(self, mediator: Mediator):
        self.mediator = mediator

    def register_user(self, name: str) -> None:
        print(f"Registering user: {name}")
        self.mediator.notify("UserService", "user_registered", {"name": name})

class Mailer(Observer):
    def update(self, event: str, data: dict) -> None:
        if event == "user_registered":
            print(f"[Mailer] Sending welcome email to {data['name']}")

class Logger(Observer):
    def update(self, event: str, data: dict) -> None:
        print(f"[Logger] Event: {event}, Data: {data}")

# 使用例
mediator = EventHub()
mailer = Mailer()
logger = Logger()

mediator.add_observer(mailer)
mediator.add_observer(logger)

user_service = UserService(mediator)
user_service.register_user("Taro")
