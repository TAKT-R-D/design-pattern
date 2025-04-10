class DrawService {
  private canvas: string[] = [];

  draw(shape: string) {
    this.canvas.push(shape);
    console.log(`描画: ${shape}`);
  }

  showCanvas() {
    console.log("現在のキャンバス:", this.canvas.join(", "));
  }
}

// 利用例
const drawer = new DrawService();
drawer.draw("circle");
drawer.draw("square");
drawer.showCanvas(); // circle, square
