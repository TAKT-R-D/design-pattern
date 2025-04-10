from abc import ABC, abstractmethod

class PublishCommand(ABC):
    @abstractmethod
    def execute(self):
        pass

class DraftPublishCommand(PublishCommand):
    def execute(self):
        print("レビュー依頼を送信")

class ReviewPublishCommand(PublishCommand):
    def execute(self):
        print("公開しました")

class PublishedPublishCommand(PublishCommand):
    def execute(self):
        print("すでに公開済みです")

class Document:
    def __init__(self, command: PublishCommand):
        self._command = command

    def set_command(self, command: PublishCommand):
        self._command = command

    def publish(self):
        self._command.execute()

# 利用例
doc = Document(DraftPublishCommand())
doc.publish()

doc.set_command(ReviewPublishCommand())
doc.publish()

doc.set_command(PublishedPublishCommand())
doc.publish()
