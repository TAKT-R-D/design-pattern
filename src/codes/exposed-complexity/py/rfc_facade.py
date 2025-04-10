class AuthService:
    def authenticate(self, user_id: str) -> bool:
        print(f"ユーザー認証: {user_id}")
        return True

class UserProfileService:
    def load(self, user_id: str) -> dict:
        print(f"プロフィール取得: {user_id}")
        return {"name": "Hiroshi", "id": user_id}

class AuditService:
    def log(self, action: str):
        print(f"[監査ログ] {action}")

# Facade
class UserProfileFacade:
    def __init__(self):
        self.auth = AuthService()
        self.profile = UserProfileService()
        self.audit = AuditService()

    def show(self, user_id: str):
        if self.auth.authenticate(user_id):
            profile = self.profile.load(user_id)
            print(profile)
            self.audit.log("プロフィール表示")

# 利用例
facade = UserProfileFacade()
facade.show("user-123")
