import {shake} from './shake';
import {field} from './gameField';
import coordGenerator from './coordGenerator';
import drawing from './drawing';

export const target = {
    targetPoint: {x: null, y: null},
    getRandomTargetPoint() {
        const stepField = field.getStepField();
        const targetPointX = Math.floor(Math.random() * stepField.x);
        const targetPointY = Math.floor(Math.random() * stepField.y);
        const newTargerPoint = {x: targetPointX, y: targetPointY};
        if (!shake.isShake(newTargerPoint)) {
            this.targetPoint = newTargerPoint;
            return this.targetPoint;
        }
        return this.getRandomTargetPoint();
    },
    getTargetPoint() {
        return this.targetPoint;
    },
    isTarget(newPoint) {
        return (this.targetPoint.x === newPoint.x && this.targetPoint.y === newPoint.y) ? true : false;
    },
    renderTarget() {
        const randomTargetPoint = this.getRandomTargetPoint();
        const coordAdd = coordGenerator(randomTargetPoint);
        drawing('add', coordAdd);
    }
}
