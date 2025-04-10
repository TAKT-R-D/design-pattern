<?php

interface Observer {
    public function update(string $event, array $data): void;
}

interface Mediator {
    public function notify(string $sender, string $event, array $data): void;
}

class EventHub implements Mediator {
    private array $observers = [];

    public function addObserver(Observer $observer): void {
        $this->observers[] = $observer;
    }

    public function notify(string $sender, string $event, array $data): void {
        foreach ($this->observers as $observer) {
            $observer->update($event, $data);
        }
    }
}

class UserService {
    public function __construct(private Mediator $mediator) {}

    public function registerUser(string $name): void {
        echo "Registering user: {$name}\n";
        $this->mediator->notify("UserService", "user_registered", ['name' => $name]);
    }
}

class Mailer implements Observer {
    public function update(string $event, array $data): void {
        if ($event === "user_registered") {
            echo "[Mailer] Sending welcome email to {$data['name']}\n";
        }
    }
}

class Logger implements Observer {
    public function update(string $event, array $data): void {
        echo "[Logger] Event: {$event}, Data: " . json_encode($data) . "\n";
    }
}

// 使用例
$mediator = new EventHub();
$mailer = new Mailer();
$logger = new Logger();

$mediator->addObserver($mailer);
$mediator->addObserver($logger);

$userService = new UserService($mediator);
$userService->registerUser("Taro");
