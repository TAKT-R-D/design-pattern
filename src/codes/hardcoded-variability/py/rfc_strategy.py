from abc import ABC, abstractmethod

class NotificationStrategy(ABC):
    @abstractmethod
    def send(self, user: str, message: str):
        pass

class EmailStrategy(NotificationStrategy):
    def send(self, user: str, message: str):
        print("件名: お知らせ")
        print(f"本文: {message}")
        print(f"宛先: {user}@example.com")

class SlackStrategy(NotificationStrategy):
    def send(self, user: str, message: str):
        print(f"Slack宛: {user}")
        print(f"内容: {message}")

class NotificationService:
    def __init__(self, strategy: NotificationStrategy):
        self.strategy = strategy

    def notify(self, user: str, message: str):
        self.strategy.send(user, message)

# 利用例
NotificationService(EmailStrategy()).notify("hiroshi", "メールメッセージ")
NotificationService(SlackStrategy()).notify("hiroshi", "Slackメッセージ")
