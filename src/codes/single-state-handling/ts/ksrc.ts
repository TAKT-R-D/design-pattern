class SupportTicket {
  private status: string = "open"; // 状態: open, in_progress, resolved, closed

  handle() {
    if (this.status === "open") {
      console.log("チケットを処理中に設定します");
      this.status = "in_progress";
    } else if (this.status === "in_progress") {
      console.log("チケットを解決済みに設定します");
      this.status = "resolved";
    } else if (this.status === "resolved") {
      console.log("チケットをクローズします");
      this.status = "closed";
    } else if (this.status === "closed") {
      console.log("このチケットはすでに終了しています");
    }
  }
}
