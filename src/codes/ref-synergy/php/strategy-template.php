<?php

interface NotificationStrategy {
    public function sendMessage(string $to, string $content): void;
}

class EmailStrategy implements NotificationStrategy {
    public function sendMessage(string $to, string $content): void {
        echo "[Email] To: {$to}, Message: {$content}\n";
    }
}

class SlackStrategy implements NotificationStrategy {
    public function sendMessage(string $to, string $content): void {
        echo "[Slack] To: {$to}, Message: {$content}\n";
    }
}

abstract class Notifier {
    protected NotificationStrategy $strategy;

    public function __construct(NotificationStrategy $strategy) {
        $this->strategy = $strategy;
    }

    public function send(string $user, string $message): void {
        echo "--- Sending Start ---\n";
        $content = $this->formatMessage($user, $message);
        $this->strategy->sendMessage($user, $content);
        echo "--- Sending End ---\n";
    }

    abstract protected function formatMessage(string $user, string $message): string;
}

class AlertNotifier extends Notifier {
    protected function formatMessage(string $user, string $message): string {
        return "[ALERT] {$user}: {$message}";
    }
}

// 使用例
$notifier = new AlertNotifier(new EmailStrategy());
$notifier->send("taro@example.com", "サーバー障害が発生しました");
