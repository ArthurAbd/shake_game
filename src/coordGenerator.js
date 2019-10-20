export default (objPoint, step = 15) => {
    const x = objPoint.x * step;
    const y = objPoint.y * step;
    return {x, y}
}