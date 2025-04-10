<?php

// Component インターフェース
interface OrganizationUnit {
  public function getName(): string;
  public function print(string $indent = ""): void;
}

// Leaf
class Employee implements OrganizationUnit {
  private string $name;

  public function __construct(string $name) {
    $this->name = $name;
  }

  public function getName(): string {
    return $this->name;
  }

  public function print(string $indent = ""): void {
    echo "{$indent}- {$this->name}\\n";
  }
}

// Composite
class Department implements OrganizationUnit {
  private string $name;
  private array $members = [];

  public function __construct(string $name) {
    $this->name = $name;
  }

  public function add(OrganizationUnit $unit): void {
    $this->members[] = $unit;
  }

  public function getName(): string {
    return $this->name;
  }

  public function print(string $indent = ""): void {
    echo "{$indent}+ {$this->name}\\n";
    foreach ($this->members as $member) {
      $member->print($indent . "  ");
    }
  }
}

// 利用例
$devTeam = new Department("開発部");
$devTeam->add(new Employee("Hiroshi"));
$devTeam->add(new Employee("Satoshi"));

$qaTeam = new Department("QA部");
$qaTeam->add(new Employee("Yuki"));

$company = new Department("MyCompany");
$company->add($devTeam);
$company->add($qaTeam);

$company->print();
