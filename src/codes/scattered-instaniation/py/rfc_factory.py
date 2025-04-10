from abc import ABC, abstractmethod

class Logger:
    def log(self, message: str):
        print(f"[LOG]: {message}")

# Creator（抽象クラス）
class UserService(ABC):
    def __init__(self):
        self.logger = self.create_logger()

    @abstractmethod
    def create_logger(self) -> Logger:
        pass

    def create_user(self, name: str):
        self.logger.log(f"ユーザー作成: {name}")

# ConcreteCreator
class DefaultUserService(UserService):
    def create_logger(self) -> Logger:
        return Logger()

# 利用例
service = DefaultUserService()
service.create_user("Hiroshi")
