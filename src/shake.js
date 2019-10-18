export const shake = {
    shakePoints: [
        {x: 7, y: 6},
        {x: 6, y: 6},
        {x: 5, y: 6},
        {x: 4, y: 6},
        {x: 3, y: 6},
        {x: 2, y: 6},
        {x: 7, y: 6},
        {x: 6, y: 6},
        {x: 5, y: 6},
        {x: 4, y: 6},
        {x: 3, y: 6},
        {x: 2, y: 6},
    ],
    movDirection: "ArrowRight",
    getFirstPoint() {
        return this.shakePoints[0];
    },
    setNewPoint(newPoint) {
        this.shakePoints.unshift({x: newPoint.x, y: newPoint.y});
    },
    getEndPoint() {
        return this.shakePoints.pop();
    },
}
