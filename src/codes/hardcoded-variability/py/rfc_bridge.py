from abc import ABC, abstractmethod

# 実装側（Bridge の下部）
class Notifier(ABC):
    @abstractmethod
    def send_message(self, to: str, content: str):
        pass

class EmailNotifier(Notifier):
    def send_message(self, to: str, content: str):
        print("件名: お知らせ")
        print(f"本文: {content}")
        print(f"宛先: {to}@example.com")

class SlackNotifier(Notifier):
    def send_message(self, to: str, content: str):
        print(f"Slack宛: {to}")
        print(f"内容: {content}")

# 抽象側（Bridge の上部）
class Notification(ABC):
    def __init__(self, notifier: Notifier):
        self.notifier = notifier

    @abstractmethod
    def notify(self, user: str, message: str):
        pass

class NormalNotification(Notification):
    def notify(self, user: str, message: str):
        self.notifier.send_message(user, message)

class UrgentNotification(Notification):
    def notify(self, user: str, message: str):
        self.notifier.send_message(user, f"[緊急] {message}")

# 利用例
email_urgent = UrgentNotification(EmailNotifier())
email_urgent.notify("hiroshi", "サーバーが落ちました")

slack_normal = NormalNotification(SlackNotifier())
slack_normal.notify("hiroshi", "定例ミーティングは15時です")
