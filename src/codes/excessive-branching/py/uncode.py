def calculate_price(user_type: str, base_price: float) -> float:
    if user_type == "student":
        return base_price * 0.8
    elif user_type == "member":
        return base_price * 0.9
    elif user_type == "vip":
        return base_price * 0.7
    else:
        return base_price

# 利用例
print(calculate_price("student", 1000))  # 800
