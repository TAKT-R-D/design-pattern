import copy

class Notification:
    def __init__(self, header: str, footer: str, user: str = "", message: str = ""):
        self.header = header
        self.footer = footer
        self.user = user
        self.message = message

    def clone(self) -> 'Notification':
        return copy.deepcopy(self)

    def send(self):
        print(f"{self.header}\n宛先: {self.user}\n本文: {self.message}\n{self.footer}")

# プロトタイプ生成
prototype = Notification("件名: お知らせ", "-- 通知システム")

# 利用例
n1 = prototype.clone()
n1.user = "hiroshi"
n1.message = "こんにちは"
n1.send()

n2 = prototype.clone()
n2.user = "satoshi"
n2.message = "お知らせがあります"
n2.send()
