class Mailer:
    def send(self, to: str, message: str):
        print(f"メール送信: {to} => {message}")

class Notifier:
    def notify(self, user_id: str, content: str):
        mailer = Mailer()
        formatted = f"[通知] {content}"
        mailer.send(f"{user_id}@example.com", formatted)
