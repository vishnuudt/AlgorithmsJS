const hanoi = require("./towerofHanoi.js");
const robot = require("./robotMove");
const subset = require("./subsets");
const permute = require("./permutations");
const parans = require("./parans");
const edit = require("./editDistance");

// robot.moveRobot(4,4);
// robot.printIt();
// hanoi.towerOfHanoi();
// let subsetObj = new subset.SubsetGen([1,2,3]);
// console.log(subsetObj.genSubset());
// let obj = new permute.Permute();
// console.log(obj.genPermute("abc"));
// let paranObj = new parans.ParansMatcher();
// paranObj.genParanMatches(3, 3, "      ".split(''), 0);
let editItem = new edit.editDistance("cat", 1);