function generateNotification(userType: string, message: string): string {
  if (userType === "guest") {
    return `Hello Guest! ${message}`;
  } else if (userType === "member") {
    return `Hi Member! ${message}`;
  } else if (userType === "admin") {
    return `Dear Admin,\n${message}`;
  } else if (userType === "moderator") {
    return `Moderator Notice: ${message}`;
  } else {
    return `Hello User! ${message}`;
  }
}
