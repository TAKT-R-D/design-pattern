class NotificationService {
  sendEmail(user: string, message: string) {
    console.log(`件名: お知らせ`);
    console.log(`本文: ${message}`);
    console.log(`宛先: ${user}@example.com`);
  }

  sendSlack(user: string, message: string) {
    console.log(`Slack宛: ${user}`);
    console.log(`内容: ${message}`);
  }
}
