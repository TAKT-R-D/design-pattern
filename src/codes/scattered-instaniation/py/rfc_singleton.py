class Logger:
    _instance: "Logger" | None = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def log(self, message: str):
        print(f"[LOG]: {message}")

class UserService:
    def __init__(self):
        self.logger = Logger()  # 常に Singleton が返る

    def create_user(self, name: str):
        self.logger.log(f"ユーザー作成: {name}")

# 利用例
service = UserService()
service.create_user("Hiroshi")
