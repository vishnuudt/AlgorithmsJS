const R = require('ramda'); 


class SubsetGen {

    constructor(set){
        this.set = set;
    }


    genSubset(){
        let itemOfItems = [];
        let max = 1 << this.set.length;
        for (let i =0; i < max; ++i){
            let subset = [];
            let k = i;
            let index = 0;
            while (k > 0){
                if ((k & 1) > 0){
                    subset.push(this.set[index]);
                }                
                k = k >> 1;
                index++;
            }
            itemOfItems.push(subset);
        }
        return itemOfItems;
    }

}

exports.SubsetGen = SubsetGen;