from abc import ABC, abstractmethod

class PublishStrategy(ABC):
    @abstractmethod
    def publish(self):
        pass

class DraftStrategy(PublishStrategy):
    def publish(self):
        print("レビュー依頼を送信")

class ReviewStrategy(PublishStrategy):
    def publish(self):
        print("公開しました")

class PublishedStrategy(PublishStrategy):
    def publish(self):
        print("すでに公開済みです")

class Document:
    def __init__(self, strategy: PublishStrategy):
        self._strategy = strategy

    def set_strategy(self, strategy: PublishStrategy):
        self._strategy = strategy

    def publish(self):
        self._strategy.publish()

# 利用例
doc = Document(DraftStrategy())
doc.publish()  # → レビュー依頼

doc.set_strategy(ReviewStrategy())
doc.publish()  # → 公開

doc.set_strategy(PublishedStrategy())
doc.publish()  # → すでに公開済み
