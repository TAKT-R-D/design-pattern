class Document {
  private state: string = "draft"; // 状態: 'draft', 'review', 'published'

  publish() {
    if (this.state === "draft") {
      console.log("レビュー依頼を送信");
      this.state = "review";
    } else if (this.state === "review") {
      console.log("公開しました");
      this.state = "published";
    } else if (this.state === "published") {
      console.log("すでに公開済みです");
    }
  }
}
