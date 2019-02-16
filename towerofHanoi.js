const R = require('ramda'); 

class Tower{

     constructor(name){
         this.name = name;
         this.items = [];
     }

     add(i){
        this.items.push(i)
     }

     printAll(){
        R.map((item) => {console.log(item)}, this.items);
     }

     moveToTower(t){
         let item = this.items.pop();
         t.add(item);
     }

     MoveAll(n, dest, inter){
        if (n > 0){
         this.MoveAll(n-1, inter, dest);
         this.moveToTower(dest);
         inter.MoveAll(n-1, dest, this);
        }
     }

}

function towerOfHanoi(){
   const items = [1,2,3];
   let source = new Tower("source");
   let dest = new Tower("dest");
   let inter = new Tower("inter");
   R.map((item)=>{source.add(item)}, R.reverse(items));
   source.MoveAll(items.length, dest, inter);
   console.log("Source");
   source.printAll();
   console.log("destination");
   dest.printAll();
}

exports.towerOfHanoi = towerOfHanoi;

