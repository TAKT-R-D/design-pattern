from abc import ABC, abstractmethod

class UserProfile(ABC):
    @abstractmethod
    def load(self, user_id: str) -> dict:
        pass

class UserProfileService(UserProfile):
    def load(self, user_id: str) -> dict:
        print(f"プロフィール取得: {user_id}")
        return {"name": "Hiroshi", "id": user_id}

class UserProfileProxy(UserProfile):
    def __init__(self):
        self._real = UserProfileService()
        self._auth = AuthService()
        self._audit = AuditService()

    def load(self, user_id: str) -> dict:
        if not self._auth.authenticate(user_id):
            raise Exception("認証失敗")
        profile = self._real.load(user_id)
        self._audit.log("プロフィール表示")
        return profile

# 利用例
proxy = UserProfileProxy()
profile = proxy.load("user-123")
print(profile)
