// コマンドインターフェース
interface DiscountCommand {
  execute(basePrice: number): number;
}

// 各コマンド（ConcreteCommand）
class StudentDiscountCommand implements DiscountCommand {
  execute(basePrice: number): number {
    return basePrice * 0.8;
  }
}

class MemberDiscountCommand implements DiscountCommand {
  execute(basePrice: number): number {
    return basePrice * 0.9;
  }
}

class VIPDiscountCommand implements DiscountCommand {
  execute(basePrice: number): number {
    return basePrice * 0.7;
  }
}

class NoDiscountCommand implements DiscountCommand {
  execute(basePrice: number): number {
    return basePrice;
  }
}

// Invoker
class DiscountExecutor {
  constructor(private command: DiscountCommand) {}

  setCommand(command: DiscountCommand) {
    this.command = command;
  }

  run(basePrice: number): number {
    return this.command.execute(basePrice);
  }
}

// 利用例
const userType = "member";
let command: DiscountCommand;

switch (userType) {
  case "student":
    command = new StudentDiscountCommand();
    break;
  case "member":
    command = new MemberDiscountCommand();
    break;
  case "vip":
    command = new VIPDiscountCommand();
    break;
  default:
    command = new NoDiscountCommand();
}

const executor = new DiscountExecutor(command);
console.log(executor.run(1000)); // 900
