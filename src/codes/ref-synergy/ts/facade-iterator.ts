interface Task {
  execute(): void;
}

class LogTask implements Task {
  constructor(private message: string) {}

  execute(): void {
    console.log(`[Log]: ${this.message}`);
  }
}

class EmailTask implements Task {
  constructor(private recipient: string, private content: string) {}

  execute(): void {
    console.log(`[Email]: To ${this.recipient} - ${this.content}`);
  }
}

class TaskExecutor {
  constructor(private tasks: Task[]) {}

  runAll(): void {
    for (const task of this.tasks) {
      task.execute();
    }
  }
}

class UserRegistrationFacade {
  registerUser(user: string): void {
    const tasks: Task[] = [
      new LogTask(`Registering user: ${user}`),
      new EmailTask(user, "Welcome to our service!"),
      new LogTask(`User registered successfully: ${user}`),
    ];

    const executor = new TaskExecutor(tasks);
    executor.runAll();
  }
}

// 使用例
const facade = new UserRegistrationFacade();
facade.registerUser("taro@example.com");
