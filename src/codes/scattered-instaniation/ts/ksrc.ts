class Mailer {
  send(to: string, message: string) {
    console.log(`メール送信: ${to} => ${message}`);
  }
}

class Notifier {
  notify(userId: string, content: string) {
    const mailer = new Mailer();
    const formatted = `[通知] ${content}`;
    mailer.send(`${userId}@example.com`, formatted);
  }
}
