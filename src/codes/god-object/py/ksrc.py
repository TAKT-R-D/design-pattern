class PostManager:
    def __init__(self):
        self.posts = []
        self.author_email = ""

    def set_author(self, email: str):
        self.author_email = email

    def create_post(self, title: str, content: str):
        self.posts.append({"title": title, "content": content})

    def publish_all(self):
        for post in self.posts:
            # 1. データ保存
            print(f"保存: {post['title']}")

            # 2. 通知送信
            print(f"通知を {self.author_email} に送信")

            # 3. ログ出力
            print(f"ログ: {post['title']} を公開")
