const R = require('ramda');

class QuickSort{
    constructor(allitems){
        this.input = [...allitems];
        this.sort(0, this.input.length-1);
    }

    sort(lo, hi){
        if (lo <= hi){
            return ;
        }

        let j = this.partition(lo, hi);
        this.sort(lo, j-1);
        this.sort(j+1, hi);
    }

    partition(lo, hi){
        let i = lo;
        let j = hi + 1;
        let pivot = this.input[lo];

        while(true){
            while(this.input[i] < pivot){
                ++i;
            }
            if (i == hi) break;

            while(this.input[j] > pivot){
                --j;
            }
            if (j == lo) break;

            if (j < i) break;
            exchange(i, j);
        }

        exchange(lo, j);
        return k;
    }

    exchange(i, j){
        let temp = this.input[i];
        this.input[i] = this.input[j];
        this.input[j] = temp;
    }
}

exports.quickSort = QuickSort;