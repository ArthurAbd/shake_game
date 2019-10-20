import {field} from './gameField';

export default (action, coord, color = 'green') => {
    const ctx = field.getCtx();
    ctx.fillStyle = color;
    const canvasAction = {
        "add": () => ctx.fillRect(coord.x, coord.y, 14, 14),
        "delete": () => ctx.clearRect(coord.x, coord.y, 14, 14)
    }
    canvasAction[action]();
}