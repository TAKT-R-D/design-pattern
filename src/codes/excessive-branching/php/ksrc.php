<?php

function generateNotification(string $userType, string $message): string {
  if ($userType === "guest") {
    return "Hello Guest! {$message}";
  } elseif ($userType === "member") {
    return "Hi Member! {$message}";
  } elseif ($userType === "admin") {
    return "Dear Admin,\n{$message}";
  } elseif ($userType === "moderator") {
    return "Moderator Notice: {$message}";
  } else {
    return "Hello User! {$message}";
  }
}
