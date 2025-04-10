class NotificationService:
    def send_email(self, user: str, message: str):
        print("件名: お知らせ")
        print(f"本文: {message}")
        print(f"宛先: {user}@example.com")

    def send_slack(self, user: str, message: str):
        print(f"Slack宛: {user}")
        print(f"内容: {message}")

# 利用例
notifier = NotificationService()
notifier.send_email("hiroshi", "メッセージ1")
notifier.send_slack("hiroshi", "メッセージ2")
