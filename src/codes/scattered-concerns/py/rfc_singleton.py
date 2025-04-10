import os

class Config:
    _instance = None

    def __init__(self):
        self.debug_mode = os.environ.get("DEBUG_MODE") == "true"

    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = Config()
        return cls._instance

    def is_debug(self):
        return self.debug_mode

class Logger:
    _instance = None

    def __init__(self):
        pass

    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = Logger()
        return cls._instance

    def log(self, message: str):
        print(f"[LOG] {message}")

    def debug(self, message: str):
        if Config.get_instance().is_debug():
            print(f"[DEBUG] {message}")

class OrderService:
    def create_order(self, order_id: str):
        logger = Logger.get_instance()
        logger.log(f"注文作成: {order_id}")
        logger.debug(f"注文詳細: {order_id}")
