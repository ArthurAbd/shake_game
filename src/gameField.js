const shakeCanvas = document.getElementById('game');

export const field = {
    step: 30,
    stepField: {x: 0, y: 0},
    ctx: shakeCanvas.getContext('2d'),
    getCanvasField() {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        this.stepField.x = Math.floor(width / this.step);
        this.stepField.y = Math.floor(height / this.step);
        document.getElementById('game').setAttribute("width", this.step * this.stepField.x);
        document.getElementById('game').setAttribute("height", this.step * this.stepField.y);
        console.log(width, this.stepField.x);
        console.log(height, this.stepField.y);
    },
    getStepField() {
        return this.stepField;
    },
    getCtx() {
        return this.ctx;
    },
}