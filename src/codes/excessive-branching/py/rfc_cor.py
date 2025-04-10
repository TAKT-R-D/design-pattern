from abc import ABC, abstractmethod

class DiscountHandler(ABC):
    @abstractmethod
    def set_next(self, handler: "DiscountHandler") -> "DiscountHandler":
        pass

    @abstractmethod
    def handle(self, user_type: str, base_price: float) -> float:
        pass

class BaseDiscountHandler(DiscountHandler):
    def __init__(self):
        self._next_handler: DiscountHandler | None = None

    def set_next(self, handler: DiscountHandler) -> DiscountHandler:
        self._next_handler = handler
        return handler

    def handle(self, user_type: str, base_price: float) -> float:
        if self._next_handler:
            return self._next_handler.handle(user_type, base_price)
        return base_price

class StudentHandler(BaseDiscountHandler):
    def handle(self, user_type: str, base_price: float) -> float:
        if user_type == "student":
            return base_price * 0.8
        return super().handle(user_type, base_price)

class MemberHandler(BaseDiscountHandler):
    def handle(self, user_type: str, base_price: float) -> float:
        if user_type == "member":
            return base_price * 0.9
        return super().handle(user_type, base_price)

class VIPHandler(BaseDiscountHandler):
    def handle(self, user_type: str, base_price: float) -> float:
        if user_type == "vip":
            return base_price * 0.7
        return super().handle(user_type, base_price)

# 利用例
student = StudentHandler()
member = MemberHandler()
vip = VIPHandler()

student.set_next(member).set_next(vip)

print(student.handle("vip", 1000))      # 700
print(student.handle("student", 1000))  # 800
print(student.handle("guest", 1000))    # 1000
