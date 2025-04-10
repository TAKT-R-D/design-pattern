from abc import ABC, abstractmethod

# 製品インターフェース
class Logger(ABC):
    @abstractmethod
    def log(self, message: str): pass

# 製品の具体クラス
class ConsoleLogger(Logger):
    def log(self, message: str):
        print(f"[LOG]: {message}")

# 抽象ファクトリ
class ServiceFactory(ABC):
    @abstractmethod
    def create_logger(self) -> Logger: pass

# 具体ファクトリ
class DefaultServiceFactory(ServiceFactory):
    def create_logger(self) -> Logger:
        return ConsoleLogger()

# クライアント
class UserService:
    def __init__(self, factory: ServiceFactory):
        self.logger = factory.create_logger()

    def create_user(self, name: str):
        self.logger.log(f"ユーザー作成: {name}")

# 利用例
factory = DefaultServiceFactory()
service = UserService(factory)
service.create_user("Hiroshi")
