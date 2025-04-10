<?php

interface PublishCommand {
  public function execute(): void;
}

class DraftPublishCommand implements PublishCommand {
  public function execute(): void {
    echo "レビュー依頼を送信\n";
  }
}

class ReviewPublishCommand implements PublishCommand {
  public function execute(): void {
    echo "公開しました\n";
  }
}

class PublishedPublishCommand implements PublishCommand {
  public function execute(): void {
    echo "すでに公開済みです\n";
  }
}

class Document {
  private PublishCommand $command;

  public function __construct(PublishCommand $command) {
    $this->command = $command;
  }

  public function setCommand(PublishCommand $command): void {
    $this->command = $command;
  }

  public function publish(): void {
    $this->command->execute();
  }
}

// 利用例
$doc = new Document(new DraftPublishCommand());
$doc->publish();

$doc->setCommand(new ReviewPublishCommand());
$doc->publish();

$doc->setCommand(new PublishedPublishCommand());
$doc->publish();
