import {target} from './target';
import {field} from './gameField';
import coordGenerator from './coordGenerator';
import drawing from './drawing';

export const shake = {
    shakePoints: [
        {x: 7, y: 6},
        {x: 6, y: 6},
        {x: 5, y: 6},
    ],
    movDirection: "ArrowRight",
    getFirstPoint() {
        return this.shakePoints[0];
    },
    setNewPoint(newPoint) {
        if (target.isTarget(newPoint)) {
            const newTailPoint = this.shakePoints.slice().pop()
            this.shakePoints.push(newTailPoint);
            target.renderTarget();
        }
        this.shakePoints.unshift({x: newPoint.x, y: newPoint.y});
    },
    getEndPoint() {
        return this.shakePoints.pop();
    },
    isShake(targetPoint) {
        return this.shakePoints.reduce(
            (acc, point) => (point.x === targetPoint.x && point.y === targetPoint.y) ? acc += 1 : acc, 0)
    },
    runShake() {
        const timer = setTimeout(shake.runShake, 20);
        const firstPoint = Object.assign({}, shake.getFirstPoint());
        const newPoint = shake.nextStepPointGenerator(firstPoint, field.getStepField());
        if (shake.isShake(newPoint)) {
            clearTimeout(timer);
        }
        const coordAdd = coordGenerator(newPoint);
        drawing('add', coordAdd);
        shake.setNewPoint(firstPoint);
        
        const endShakePoint = shake.getEndPoint();
        const coordRemove = coordGenerator(endShakePoint);
        drawing('delete', coordRemove);
    },
    
    nextStepPointGenerator(lastStepPoint, stepField) {
        const directions = {
            "ArrowRight": () => {
                lastStepPoint.x = (lastStepPoint.x + 1 < stepField.x) ? lastStepPoint.x + 1 : 0;
                return lastStepPoint;
            },
            "ArrowLeft": () => {
                lastStepPoint.x = (lastStepPoint.x > 0) ? lastStepPoint.x - 1 : stepField.x - 1;
                return lastStepPoint;
            },
            "ArrowDown": () => {
                lastStepPoint.y = (lastStepPoint.y + 1 < stepField.y) ? lastStepPoint.y + 1 : 0;
                return lastStepPoint;
            },
            "ArrowUp": () => {
                lastStepPoint.y = (lastStepPoint.y > 0) ? lastStepPoint.y - 1 : stepField.y - 1;
                return lastStepPoint;
            },
        };
        const nextPoint = directions[this.movDirection]();
        return nextPoint;
    },
}
