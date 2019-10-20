export default (objPoint, step = 30) => {
    const x = objPoint.x * step;
    const y = objPoint.y * step;
    return {x, y}
}