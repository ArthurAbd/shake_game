export const field = {
    step: 30,
    getCanvasField(xStep = 40, yStep = 20) {
        document.getElementById('game').setAttribute("width", this.step * xStep);
        document.getElementById('game').setAttribute("height", this.step * yStep);
    }
}

