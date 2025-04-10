<?php

interface IteratorInterface {
  public function hasNext(): bool;
  public function next(): string;
}

interface IterableCollection {
  public function createIterator(): IteratorInterface;
}

class UserCollection implements IterableCollection {
  private array $users = [];

  public function add(string $user): void {
    $this->users[] = $user;
  }

  public function createIterator(): IteratorInterface {
    return new UserIterator($this->users);
  }
}

class UserIterator implements IteratorInterface {
  private int $index = 0;

  public function __construct(private array $users) {}

  public function hasNext(): bool {
    return $this->index < count($this->users);
  }

  public function next(): string {
    return $this->users[$this->index++];
  }
}

// 利用例
$users = new UserCollection();
$users->add("Hiroshi");
$users->add("Satoshi");

$it = $users->createIterator();
while ($it->hasNext()) {
  echo $it->next() . PHP_EOL;
}
