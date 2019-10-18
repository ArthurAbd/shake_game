import {field} from './gameField';
import drawing from './drawing';
import coordGenerator from './coordGenerator';

const xStepField = 50;
const yStepField = 25;
field.getCanvasField(xStepField, yStepField);

const shakeCanvas = document.getElementById('game');
const ctx = shakeCanvas.getContext('2d');

drawing(ctx, 'add', 60, 60);
setTimeout(() => {
    drawing(ctx, 'delete', 60, 60);
}, 2000, ctx);
drawing(ctx, 'add', 120, 60);

const shakePoints = [
    {x: 6, y: 6},
    {x: 5, y: 5}
];

const runShake = () => {
    const firstShakePoint = shakePoints[0];
    // const newPoint = {x: firstShakePoint.x + 1, y: firstShakePoint.y + 0};
    const newPoint = nextStepPoint(firstShakePoint, xStepField, yStepField);
    const coordAdd = coordGenerator(newPoint);
    drawing(ctx, 'add', coordAdd);
    shakePoints.unshift(newPoint);
    
    const endShakePoint = shakePoints.pop();
    const coordRemove = coordGenerator(endShakePoint);
    drawing(ctx, 'delete', coordRemove);
}
setInterval(runShake, 50);

const nextStepPoint = (lastStepPoint, xStepField, yStepField) => {
    const nextX = (lastStepPoint.x + 1 < xStepField) ? lastStepPoint.x + 1: 0;
    const nextY = (lastStepPoint.y + 0 < yStepField) ? lastStepPoint.y + 0: 0;
    return {x: nextX, y: nextY};
}

const movDirection = "down";
    document.addEventListener('keydown', (event, movDirection) => {
        const keyFunc = {
            "ArrowRight": () => (movDirection === "down") ? console.log('right') : null,
            "ArrowLeft": () => console.log('ArrowLeft'),
            "ArrowUp": () => console.log('ArrowUp'),
            "ArrowDown": () => console.log('ArrowDown'),
        }
        keyFunc[event.code]();
    });


