from abc import ABC, abstractmethod

class MessageStrategy(ABC):
    @abstractmethod
    def compose(self, user: str, content: str) -> str:
        pass

class PlainMessageStrategy(MessageStrategy):
    def compose(self, user: str, content: str) -> str:
        return f"{user}: {content}"

class HtmlMessageStrategy(MessageStrategy):
    def compose(self, user: str, content: str) -> str:
        return f"<p><strong>{user}</strong>: {content}</p>"

class Notifier(ABC):
    def __init__(self, strategy: MessageStrategy):
        self.strategy = strategy

    @abstractmethod
    def notify(self, user: str, content: str) -> None:
        pass

class EmailNotifier(Notifier):
    def notify(self, user: str, content: str) -> None:
        message = self.strategy.compose(user, content)
        print(f"[Email] Sending: {message}")

class SlackNotifier(Notifier):
    def notify(self, user: str, content: str) -> None:
        message = self.strategy.compose(user, content)
        print(f"[Slack] Sending: {message}")

# 使用例
notifier = SlackNotifier(HtmlMessageStrategy())
notifier.notify("Taro", "Server restarted.")
