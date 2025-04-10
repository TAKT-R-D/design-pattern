from abc import ABC, abstractmethod

class DiscountState(ABC):
    @abstractmethod
    def calculate(self, base_price: float) -> float:
        pass

class StudentState(DiscountState):
    def calculate(self, base_price: float) -> float:
        return base_price * 0.8

class MemberState(DiscountState):
    def calculate(self, base_price: float) -> float:
        return base_price * 0.9

class VIPState(DiscountState):
    def calculate(self, base_price: float) -> float:
        return base_price * 0.7

class DefaultState(DiscountState):
    def calculate(self, base_price: float) -> float:
        return base_price

class DiscountContext:
    def __init__(self, state: DiscountState):
        self._state = state

    def set_state(self, state: DiscountState):
        self._state = state

    def calculate(self, base_price: float) -> float:
        return self._state.calculate(base_price)

# 利用例
context = DiscountContext(StudentState())
print(context.calculate(1000))  # 800
