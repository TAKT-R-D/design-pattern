from abc import ABC, abstractmethod

class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: int) -> None:
        pass

class CreditCardPayment(PaymentStrategy):
    def pay(self, amount: int) -> None:
        print(f"[CreditCard] Paid {amount}")

class PayPalPayment(PaymentStrategy):
    def pay(self, amount: int) -> None:
        print(f"[PayPal] Paid {amount}")

class PaymentState(ABC):
    @abstractmethod
    def handle(self, amount: int) -> None:
        pass

    @abstractmethod
    def set_strategy(self, strategy: PaymentStrategy) -> None:
        pass

class ReadyState(PaymentState):
    def __init__(self, strategy: PaymentStrategy):
        self.strategy = strategy

    def handle(self, amount: int) -> None:
        print("Ready to process payment")
        self.strategy.pay(amount)

    def set_strategy(self, strategy: PaymentStrategy) -> None:
        self.strategy = strategy

class DisabledState(PaymentState):
    def handle(self, amount: int) -> None:
        print("Payment is currently disabled")

    def set_strategy(self, strategy: PaymentStrategy) -> None:
        print("Cannot set strategy while disabled")

class PaymentContext:
    def __init__(self, state: PaymentState):
        self.state = state

    def set_state(self, state: PaymentState) -> None:
        self.state = state

    def set_strategy(self, strategy: PaymentStrategy) -> None:
        self.state.set_strategy(strategy)

    def pay(self, amount: int) -> None:
        self.state.handle(amount)

# Usage
context = PaymentContext(ReadyState(CreditCardPayment()))
context.pay(100)

context.set_strategy(PayPalPayment())
context.pay(200)

context.set_state(DisabledState())
context.pay(300)
