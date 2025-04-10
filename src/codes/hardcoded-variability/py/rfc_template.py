from abc import ABC, abstractmethod

class Notifier(ABC):
    def send(self, user: str, message: str):
        print(self.header())
        print(self.format_message(message))
        print(self.destination(user))

    @abstractmethod
    def header(self) -> str: pass

    @abstractmethod
    def destination(self, user: str) -> str: pass

    @abstractmethod
    def format_message(self, message: str) -> str: pass

class EmailNotifier(Notifier):
    def header(self) -> str:
        return "件名: お知らせ"

    def destination(self, user: str) -> str:
        return f"宛先: {user}@example.com"

    def format_message(self, message: str) -> str:
        return f"本文: {message}"

class SlackNotifier(Notifier):
    def header(self) -> str:
        return "Slack 通知"

    def destination(self, user: str) -> str:
        return f"Slack宛: {user}"

    def format_message(self, message: str) -> str:
        return f"内容: {message}"

# 利用例
EmailNotifier().send("hiroshi", "メールメッセージ")
SlackNotifier().send("hiroshi", "Slackメッセージ")
