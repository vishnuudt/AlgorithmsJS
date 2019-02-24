const hanoi = require("./towerofHanoi.js");
const robot = require("./robotMove");
const subset = require("./subsets");

// robot.moveRobot(4,4);
// robot.printIt();
// hanoi.towerOfHanoi();


let subsetObj = new subset.SubsetGen([1,2,3]);
console.log(subsetObj.genSubset());

