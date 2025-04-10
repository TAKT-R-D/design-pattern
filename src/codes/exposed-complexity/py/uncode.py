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

# 呼び出し元がすべて処理を組み立てている
def show_user_profile(user_id: str):
    auth = AuthService()
    profile_service = UserProfileService()
    audit = AuditService()

    if auth.authenticate(user_id):
        profile = profile_service.load(user_id)
        print(profile)
        audit.log("プロフィール表示")

# 実行
show_user_profile("user-123")
