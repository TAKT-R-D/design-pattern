function calculatePrice(userType: string, basePrice: number): number {
  if (userType === "student") {
    return basePrice * 0.8;
  } else if (userType === "member") {
    return basePrice * 0.9;
  } else if (userType === "vip") {
    return basePrice * 0.7;
  } else {
    return basePrice;
  }
}
