class NotificationTemplate:
    def __init__(self, header: str, footer: str):
        self.header = header
        self.footer = footer

    def format(self, user: str, body: str) -> str:
        return f"{self.header}\n宛先: {user}\n本文: {body}\n{self.footer}"

class Notification:
    def __init__(self, user: str, message: str, template: NotificationTemplate):
        self.user = user
        self.message = message
        self.template = template

    def send(self):
        print(self.template.format(self.user, self.message))

# 利用例
shared_template = NotificationTemplate("件名: お知らせ", "-- 通知システム")
Notification("hiroshi", "メッセージ1", shared_template).send()
Notification("satoshi", "メッセージ2", shared_template).send()
