const R = require('ramda'); 

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getId(){
        return this.x + ":" + this.y;
    }
}

let points = []
let visited = {}


function isFree(x, y){
    let p = new Point(x, y);
    return visited[p.getId()] !== true;
}

function moveRobot(x, y){
    let point = new Point(x, y);
    points.push(point);
    visited[point.getId()] = true;

    if ( x === 0 && y === 0){
        printIt();
        return true;
    }

    success = false;
    if (x >= 1 && isFree(x-1, y)){
        success = moveRobot(x-1, y);
    }

    if (!success && y >= 1 && isFree(x, y-1)){
        success = moveRobot(x, y-1);
    }

    if (!success){
        R.remove(points.length-1, 1, points);
        visited[point.getId()] = false;
    }
    return success;
}

function printIt(){
    R.map((p) => {console.log(p)}, points);
}

exports.moveRobot = moveRobot;
exports.printIt = printIt;