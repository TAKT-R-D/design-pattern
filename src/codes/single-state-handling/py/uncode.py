class Document:
    def __init__(self):
        self.state = "draft"  # 状態: 'draft', 'review', 'published'

    def publish(self):
        if self.state == "draft":
            print("レビュー依頼を送信")
            self.state = "review"
        elif self.state == "review":
            print("公開しました")
            self.state = "published"
        elif self.state == "published":
            print("すでに公開済みです")
