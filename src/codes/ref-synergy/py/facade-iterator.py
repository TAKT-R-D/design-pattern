from abc import ABC, abstractmethod

class Task(ABC):
    @abstractmethod
    def execute(self, context: dict) -> None:
        pass

class LogTask(Task):
    def execute(self, context: dict) -> None:
        print(f"[LOG] Registering user: {context['user']}")

class NotifyTask(Task):
    def execute(self, context: dict) -> None:
        print(f"[NOTIFY] Welcome message sent to: {context['user']}")

class TaskExecutor:
    def __init__(self):
        self.tasks: list[Task] = []

    def add_task(self, task: Task) -> None:
        self.tasks.append(task)

    def execute_all(self, context: dict) -> None:
        for task in self.tasks:
            task.execute(context)

class UserRegistrationFacade:
    def __init__(self):
        self.executor = TaskExecutor()
        self.executor.add_task(LogTask())
        self.executor.add_task(NotifyTask())

    def register_user(self, user: str) -> None:
        context = {"user": user}
        self.executor.execute_all(context)

# 使用例
facade = UserRegistrationFacade()
facade.register_user("taro@example.com")
