interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

class UserCollection implements IterableCollection<string> {
  private users: string[] = [];

  add(user: string) {
    this.users.push(user);
  }

  createIterator(): Iterator<string> {
    let index = 0;
    const users = this.users;

    return {
      hasNext() {
        return index < users.length;
      },
      next() {
        return users[index++];
      },
    } as Iterator<string>;
  }
}

// 利用例
const users = new UserCollection();
users.add("Hiroshi");
users.add("Satoshi");

const it = users.createIterator();
while (it.hasNext()) {
  console.log(it.next());
}
