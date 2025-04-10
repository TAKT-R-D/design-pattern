def generate_notification(user_type: str, message: str) -> str:
    if user_type == "guest":
        return f"Hello Guest! {message}"
    elif user_type == "member":
        return f"Hi Member! {message}"
    elif user_type == "admin":
        return f"Dear Admin,\n{message}"
    elif user_type == "moderator":
        return f"Moderator Notice: {message}"
    else:
        return f"Hello User! {message}"
