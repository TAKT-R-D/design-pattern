class SupportTicket:
    def __init__(self):
        self.status = "open"  # 状態: open, in_progress, resolved, closed

    def handle(self):
        if self.status == "open":
            print("チケットを処理中に設定します")
            self.status = "in_progress"
        elif self.status == "in_progress":
            print("チケットを解決済みに設定します")
            self.status = "resolved"
        elif self.status == "resolved":
            print("チケットをクローズします")
            self.status = "closed"
        elif self.status == "closed":
            print("このチケットはすでに終了しています")
