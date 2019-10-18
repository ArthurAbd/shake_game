export default (ctx, action, coord) => {
    console.log(coord);
    const canvasAction = {
        "add": () => ctx.fillRect(coord.x, coord.y, 30, 30),
        "delete": () => ctx.clearRect(coord.x, coord.y, 30, 30)
    }
    canvasAction[action]();
}