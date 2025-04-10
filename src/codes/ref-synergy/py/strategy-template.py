from abc import ABC, abstractmethod

class NotificationStrategy(ABC):
    @abstractmethod
    def send_message(self, to: str, content: str) -> None:
        pass

class EmailStrategy(NotificationStrategy):
    def send_message(self, to: str, content: str) -> None:
        print(f"[Email] To: {to}, Message: {content}")

class SlackStrategy(NotificationStrategy):
    def send_message(self, to: str, content: str) -> None:
        print(f"[Slack] To: {to}, Message: {content}")

class Notifier(ABC):
    def __init__(self, strategy: NotificationStrategy) -> None:
        self.strategy = strategy

    def send(self, user: str, message: str) -> None:
        print("--- Sending Start ---")
        content = self.format_message(user, message)
        self.strategy.send_message(user, content)
        print("--- Sending End ---")

    @abstractmethod
    def format_message(self, user: str, message: str) -> str:
        pass

class AlertNotifier(Notifier):
    def format_message(self, user: str, message: str) -> str:
        return f"[ALERT] {user}: {message}"

# 使用例
notifier = AlertNotifier(EmailStrategy())
notifier.send("taro@example.com", "サーバー障害が発生しました")
