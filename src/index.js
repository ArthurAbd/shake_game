import {field} from './gameField';
import {shake} from './shake';
import {target} from './target';


// document.getElementById('text').hidden = true;

window.onload = function() {
    field.getCanvasField();
    target.renderTarget();
    shake.runShake();
};



document.addEventListener('keydown', (event) => {
    if (shake.keyIsActive) {
        shake.keyIsActive = false;
        const accessKeyX = ["ArrowRight", "ArrowLeft"];
        const accessKeyY = ["ArrowUp", "ArrowDown"];
        if (accessKeyX.includes(shake.movDirection) && accessKeyY.includes(event.code)) {
            shake.movDirection = event.code;
        }
        if (accessKeyY.includes(shake.movDirection) && accessKeyX.includes(event.code)) {
            shake.movDirection = event.code;
        }
    }
});