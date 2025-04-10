<?php

interface Task {
    public function execute(array &$context): void;
}

class LogTask implements Task {
    public function execute(array &$context): void {
        echo "[LOG] Registering user: " . $context['user'] . PHP_EOL;
    }
}

class NotifyTask implements Task {
    public function execute(array &$context): void {
        echo "[NOTIFY] Welcome message sent to: " . $context['user'] . PHP_EOL;
    }
}

class TaskExecutor {
    /** @var Task[] */
    private array $tasks = [];

    public function addTask(Task $task): void {
        $this->tasks[] = $task;
    }

    public function executeAll(array &$context): void {
        foreach ($this->tasks as $task) {
            $task->execute($context);
        }
    }
}

class UserRegistrationFacade {
    private TaskExecutor $executor;

    public function __construct() {
        $this->executor = new TaskExecutor();
        $this->executor->addTask(new LogTask());
        $this->executor->addTask(new NotifyTask());
    }

    public function registerUser(string $user): void {
        $context = ['user' => $user];
        $this->executor->executeAll($context);
    }
}

// 使用例
$facade = new UserRegistrationFacade();
$facade->registerUser("taro@example.com");
