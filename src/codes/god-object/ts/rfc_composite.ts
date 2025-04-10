// Component（共通インターフェース）
interface OrganizationUnit {
  getName(): string;
  print(indent?: string): void;
}

// Leaf（個々の要素）
class Employee implements OrganizationUnit {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  print(indent: string = ""): void {
    console.log(`${indent}- ${this.name}`);
  }
}

// Composite（集合）
class Department implements OrganizationUnit {
  private members: OrganizationUnit[] = [];

  constructor(private name: string) {}

  add(unit: OrganizationUnit) {
    this.members.push(unit);
  }

  getName(): string {
    return this.name;
  }

  print(indent: string = ""): void {
    console.log(`${indent}+ ${this.name}`);
    this.members.forEach((member) => member.print(indent + "  "));
  }
}

// 利用例
const devTeam = new Department("開発部");
devTeam.add(new Employee("Hiroshi"));
devTeam.add(new Employee("Satoshi"));

const qaTeam = new Department("QA部");
qaTeam.add(new Employee("Yuki"));

const company = new Department("MyCompany");
company.add(devTeam);
company.add(qaTeam);

company.print();
