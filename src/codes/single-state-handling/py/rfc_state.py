from abc import ABC, abstractmethod

class DocumentState(ABC):
    @abstractmethod
    def publish(self, context: "DocumentContext"):
        pass

class DraftState(DocumentState):
    def publish(self, context: "DocumentContext"):
        print("レビュー依頼を送信")
        context.set_state(ReviewState())

class ReviewState(DocumentState):
    def publish(self, context: "DocumentContext"):
        print("公開しました")
        context.set_state(PublishedState())

class PublishedState(DocumentState):
    def publish(self, context: "DocumentContext"):
        print("すでに公開済みです")

class DocumentContext:
    def __init__(self):
        self._state: DocumentState = DraftState()

    def set_state(self, state: DocumentState):
        self._state = state

    def publish(self):
        self._state.publish(self)

# 利用例
doc = DocumentContext()
doc.publish()  # → レビュー依頼
doc.publish()  # → 公開
doc.publish()  # → すでに公開済み
