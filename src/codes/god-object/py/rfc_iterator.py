from abc import ABC, abstractmethod

class IteratorInterface(ABC):
    @abstractmethod
    def has_next(self) -> bool:
        pass

    @abstractmethod
    def next(self) -> str:
        pass

class IterableCollection(ABC):
    @abstractmethod
    def create_iterator(self) -> IteratorInterface:
        pass

class UserCollection(IterableCollection):
    def __init__(self):
        self.users: list[str] = []

    def add(self, user: str):
        self.users.append(user)

    def create_iterator(self) -> IteratorInterface:
        return UserIterator(self.users)

class UserIterator(IteratorInterface):
    def __init__(self, users: list[str]):
        self.users = users
        self.index = 0

    def has_next(self) -> bool:
        return self.index < len(self.users)

    def next(self) -> str:
        user = self.users[self.index]
        self.index += 1
        return user

# 利用例
users = UserCollection()
users.add("Hiroshi")
users.add("Satoshi")

it = users.create_iterator()
while it.has_next():
    print(it.next())
