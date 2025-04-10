class Logger:
    def log(self, message: str):
        print(f"[LOG]: {message}")

class UserService:
    def __init__(self, logger: Logger):
        self.logger = logger

    def create_user(self, name: str):
        self.logger.log(f"ユーザー作成: {name}")

class UserServiceBuilder:
    def __init__(self):
        self._logger: Logger | None = None

    def set_logger(self, logger: Logger) -> "UserServiceBuilder":
        self._logger = logger
        return self

    def build(self) -> UserService:
        if not self._logger:
            raise ValueError("Logger is required")
        return UserService(self._logger)

# 利用例
builder = UserServiceBuilder()
service = builder.set_logger(Logger()).build()
service.create_user("Hiroshi")
