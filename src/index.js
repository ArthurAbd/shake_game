import {field} from './gameField';
import {shake} from './shake';
import drawing from './drawing';
import coordGenerator from './coordGenerator';

const xStepField = 20;
const yStepField = 15;
field.getCanvasField(xStepField, yStepField);

const shakeCanvas = document.getElementById('game');
const ctx = shakeCanvas.getContext('2d');


const runShake = () => {
    const firstPoint = Object.assign({}, shake.getFirstPoint());
    const newPoint = nextStepPointGenerator(firstPoint, xStepField, yStepField, shake.movDirection);
    const coordAdd = coordGenerator(newPoint);
    drawing(ctx, 'add', coordAdd);
    shake.setNewPoint(firstPoint);
    
    const endShakePoint = shake.getEndPoint();
    const coordRemove = coordGenerator(endShakePoint);
    drawing(ctx, 'delete', coordRemove);
}
setInterval(runShake, 50);

const nextStepPointGenerator = (lastStepPoint, xStepField, yStepField, movDirection) => {
    const directions = {
        "ArrowRight": () => {
            lastStepPoint.x = (lastStepPoint.x + 1 < xStepField) ? lastStepPoint.x + 1 : 0;
            return lastStepPoint;
        },
        "ArrowLeft": () => {
            lastStepPoint.x = (lastStepPoint.x > 0) ? lastStepPoint.x - 1 : xStepField - 1;
            return lastStepPoint;
        },
        "ArrowDown": () => {
            lastStepPoint.y = (lastStepPoint.y + 1 < yStepField) ? lastStepPoint.y + 1 : 0;
            return lastStepPoint;
        },
        "ArrowUp": () => {
            lastStepPoint.y = (lastStepPoint.y > 0) ? lastStepPoint.y - 1 : yStepField - 1;
            return lastStepPoint;
        },
    }
    const nextPoint = directions[movDirection]();
    return nextPoint;
}

document.addEventListener('keydown', (event) => {
    const accessKeyX = ["ArrowRight", "ArrowLeft"];
    const accessKeyY = ["ArrowUp", "ArrowDown"];
    if (accessKeyX.includes(shake.movDirection) && accessKeyY.includes(event.code)) {
        shake.movDirection = event.code;
    }
    if (accessKeyY.includes(shake.movDirection) && accessKeyX.includes(event.code)) {
        shake.movDirection = event.code;
    }
});


