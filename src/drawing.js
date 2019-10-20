import {field} from './gameField';

export default (action, coord, color = 'green') => {
    const ctx = field.getCtx();
    ctx.fillStyle = color;
    const canvasAction = {
        "add": () => ctx.fillRect(coord.x, coord.y, 28, 28),
        "delete": () => ctx.clearRect(coord.x, coord.y, 28, 28)
    }
    canvasAction[action]();
}