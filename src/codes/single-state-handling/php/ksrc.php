<?php

class SupportTicket {
  private string $status = "open"; // 状態: open, in_progress, resolved, closed

  public function handle(): void {
    if ($this->status === "open") {
      echo "チケットを処理中に設定します\n";
      $this->status = "in_progress";
    } elseif ($this->status === "in_progress") {
      echo "チケットを解決済みに設定します\n";
      $this->status = "resolved";
    } elseif ($this->status === "resolved") {
      echo "チケットをクローズします\n";
      $this->status = "closed";
    } elseif ($this->status === "closed") {
      echo "このチケットはすでに終了しています\n";
    }
  }
}
