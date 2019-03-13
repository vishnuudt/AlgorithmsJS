const R = require('ramda');

class MergeSort{

    constructor(inputList){
        this.inputList = [...inputList];
        this.sort();
    }

    sort(){
        this.helpSort(this.inputList, [], 0, this.inputList.length-1);
        console.log(this.inputList);
    }

    helpSort(listItems, auxillaryList, lo, hi){
        if (hi < lo) return;
        let mid = lo + (hi - lo) / 2;
        this.helpSort(listItems, auxillaryList, lo, mid);
        this.helpSort(listItems, auxillaryList, mid+1, hi);
        this.helpMerge(listItems, auxillaryList, lo, mid, hi);
    }

    helpMerge(listItems, auxillaryList, lo, mid, hi){

        // copy over the items
        for (let k = lo; k < hi ; k++){
            auxillaryList[k] = listItems[k];
        }
        
        // merge the items
        let i = lo;
        let j = mid + 1;
        for (let k = lo; k <= hi ; k++){
            if (i > mid) listItems[k] = auxillaryList[j++];
            else if (j > hi) listItems[k] = auxillaryList[i++];
            else if (auxillaryList[i++] > auxillaryList[j++]) listItems[k] = auxillaryList[j++];
            else listItems[k] = auxillaryList[i++];
        }
    }

}

exports.MergeSort = MergeSort;