from abc import ABC, abstractmethod

# Component
class OrganizationUnit(ABC):
    @abstractmethod
    def get_name(self) -> str:
        pass

    @abstractmethod
    def print(self, indent: str = ""):
        pass

# Leaf
class Employee(OrganizationUnit):
    def __init__(self, name: str):
        self.name = name

    def get_name(self) -> str:
        return self.name

    def print(self, indent: str = ""):
        print(f"{indent}- {self.name}")

# Composite
class Department(OrganizationUnit):
    def __init__(self, name: str):
        self.name = name
        self.members: list[OrganizationUnit] = []

    def add(self, unit: OrganizationUnit):
        self.members.append(unit)

    def get_name(self) -> str:
        return self.name

    def print(self, indent: str = ""):
        print(f"{indent}+ {self.name}")
        for member in self.members:
            member.print(indent + "  ")

# 利用例
dev_team = Department("開発部")
dev_team.add(Employee("Hiroshi"))
dev_team.add(Employee("Satoshi"))

qa_team = Department("QA部")
qa_team.add(Employee("Yuki"))

company = Department("MyCompany")
company.add(dev_team)
company.add(qa_team)

company.print()
