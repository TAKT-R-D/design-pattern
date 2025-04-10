from abc import ABC, abstractmethod

class Step(ABC):
    @abstractmethod
    def execute(self, context: dict):
        pass

class AuthStep(Step):
    def execute(self, context: dict):
        print(f"ユーザー認証: {context['user_id']}")
        context['authenticated'] = True

class LoadProfileStep(Step):
    def execute(self, context: dict):
        if not context.get('authenticated'):
            raise Exception("未認証")
        print(f"プロフィール取得: {context['user_id']}")
        context['profile'] = {"name": "Hiroshi", "id": context['user_id']}

class AuditStep(Step):
    def execute(self, context: dict):
        print("[監査ログ] プロフィール表示")

class UserProfileFlow:
    def __init__(self):
        self.steps: list[Step] = [AuthStep(), LoadProfileStep(), AuditStep()]

    def execute(self, user_id: str):
        context = {"user_id": user_id}
        for step in self.steps:
            step.execute(context)
        print(context["profile"])

# 利用例
flow = UserProfileFlow()
flow.execute("user-123")
