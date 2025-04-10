// PostManager クラスが責務過多
class PostManager {
  private posts: { title: string; content: string }[] = [];
  private authorEmail: string = "";

  setAuthor(email: string) {
    this.authorEmail = email;
  }

  createPost(title: string, content: string) {
    this.posts.push({ title, content });
  }

  publishAll() {
    for (const post of this.posts) {
      // 1. データベース保存（仮）
      console.log(`保存: ${post.title}`);

      // 2. 通知送信
      console.log(`通知を ${this.authorEmail} に送信`);

      // 3. ログ出力
      console.log(`ログ: ${post.title} を公開`);
    }
  }
}
