import {field} from './gameField';
import {shake} from './shake';
import {target} from './target';

field.getCanvasField();
target.renderTarget();
shake.runShake();

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