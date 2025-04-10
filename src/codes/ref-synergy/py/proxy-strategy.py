from abc import ABC, abstractmethod

class NotificationStrategy(ABC):
    @abstractmethod
    def send(self, user: str, message: str) -> None:
        pass

class EmailStrategy(NotificationStrategy):
    def send(self, user: str, message: str) -> None:
        print(f"[Email] To: {user}, Message: {message}")

class SlackStrategy(NotificationStrategy):
    def send(self, user: str, message: str) -> None:
        print(f"[Slack] To: {user}, Message: {message}")

class Notifier(ABC):
    @abstractmethod
    def notify(self, user: str, message: str) -> None:
        pass

class RealNotifier(Notifier):
    def __init__(self, strategy: NotificationStrategy):
        self.strategy = strategy

    def notify(self, user: str, message: str) -> None:
        self.strategy.send(user, message)

class NotifierProxy(Notifier):
    def __init__(self, real: Notifier):
        self.real = real

    def notify(self, user: str, message: str) -> None:
        if "@" not in user:
            print("Invalid user. Notification aborted.")
            return
        print("Proxy: Access check passed.")
        self.real.notify(user, message)
        print("Proxy: Notification sent.")

# Usage
real_notifier = RealNotifier(EmailStrategy())
proxy = NotifierProxy(real_notifier)
proxy.notify("taro@example.com", "Disk space warning")
