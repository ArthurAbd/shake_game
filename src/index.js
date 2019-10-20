import {field} from './gameField';
import {shake} from './shake';
import {target} from './target';

const btnStart = document.querySelector('.btn');
const result = document.querySelector('.result');
const game = document.querySelector('#game');

const startGame = () => {
    btnStart.hidden = true;
    result.hidden = true;
    field.getCanvasField();
    target.renderTarget();
    shake.runShake();
}

export const endGame = (total) => {
    game.hidden = true;
    result.hidden = false;
    result.textContent = `Игра окончена! Ваш результат: ${total}`;
};

window.onload = function() {
    btnStart.hidden = false;
    btnStart.onclick = startGame;
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