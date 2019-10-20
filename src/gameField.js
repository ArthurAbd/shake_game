const shakeCanvas = document.getElementById('game');

export const field = {
    step: 15,
    stepField: {x: 80, y: 40},
    ctx: shakeCanvas.getContext('2d'),
    getCanvasField() {
        document.getElementById('game').setAttribute("width", this.step * this.stepField.x);
        document.getElementById('game').setAttribute("height", this.step * this.stepField.y);
    },
    getStepField() {
        return this.stepField;
    },
    getCtx() {
        return this.ctx;
    },
}