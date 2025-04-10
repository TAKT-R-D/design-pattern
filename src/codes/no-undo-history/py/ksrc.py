class DrawService:
    def __init__(self):
        self.canvas = []

    def draw(self, shape: str):
        self.canvas.append(shape)
        print(f"描画: {shape}")

    def show_canvas(self):
        print("現在のキャンバス:", ", ".join(self.canvas))


# 利用例
drawer = DrawService()
drawer.draw("circle")
drawer.draw("square")
drawer.show_canvas()  # circle, square
