class Logger:
    def log(self, message: str):
        print(f"[LOG]: {message}")

class UserService:
    def __init__(self):
        self.logger = Logger()  # 毎回 new!!

    def create_user(self, name: str):
        self.logger.log(f"ユーザー作成: {name}")
