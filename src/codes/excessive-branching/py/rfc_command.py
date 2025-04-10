from abc import ABC, abstractmethod

class DiscountCommand(ABC):
    @abstractmethod
    def execute(self, base_price: float) -> float:
        pass

class StudentDiscountCommand(DiscountCommand):
    def execute(self, base_price: float) -> float:
        return base_price * 0.8

class MemberDiscountCommand(DiscountCommand):
    def execute(self, base_price: float) -> float:
        return base_price * 0.9

class VIPDiscountCommand(DiscountCommand):
    def execute(self, base_price: float) -> float:
        return base_price * 0.7

class NoDiscountCommand(DiscountCommand):
    def execute(self, base_price: float) -> float:
        return base_price

class DiscountExecutor:
    def __init__(self, command: DiscountCommand):
        self.command = command

    def set_command(self, command: DiscountCommand):
        self.command = command

    def run(self, base_price: float) -> float:
        return self.command.execute(base_price)

# 利用例
user_type = "member"

if user_type == "student":
    command = StudentDiscountCommand()
elif user_type == "member":
    command = MemberDiscountCommand()
elif user_type == "vip":
    command = VIPDiscountCommand()
else:
    command = NoDiscountCommand()

executor = DiscountExecutor(command)
print(executor.run(1000))  # 900
