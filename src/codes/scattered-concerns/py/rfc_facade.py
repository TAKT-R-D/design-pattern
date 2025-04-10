import os

class Config:
    @staticmethod
    def is_debug() -> bool:
        return os.environ.get("DEBUG_MODE") == "true"

class LoggerFacade:
    @staticmethod
    def log(message: str):
        print(f"[LOG] {message}")

    @staticmethod
    def debug(message: str):
        if Config.is_debug():
            print(f"[DEBUG] {message}")

class OrderService:
    def create_order(self, order_id: str):
        LoggerFacade.log(f"注文作成: {order_id}")
        LoggerFacade.debug(f"注文詳細: {order_id}")
