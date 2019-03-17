const R = require('ramda');

class IndexedMinPQ{
    constructor(maxItems){
        this.maxItems = maxItems;
        this.queue = []
        this.index = []
        this.keys = []
        this.totalItems = 0;
    }

    decreaseKey(item, weight){
        this.keys[item] = weight;
        this._swim(this.index[item]);
    }

    isEmpty(){
        return this.totalItems === 0;
    }

    delMin(){
        let min = this.queue[1];
        this._exchange(1, this.totalItems--);
        this._sink(1);
        this.index[min] = undefined;
        this.keys[min] = undefined;
        this.queue[this.totalItems+1] = undefined;
        return min;

    }

    insert(item, weight){
        this.totalItems++;
        this.index[item] = this.totalItems;
        this.queue[this.totalItems] = item;
        this.keys[item] = weight;
        this._swim(this.totalItems);
    }

    contains(item){
        this.index[item] !== null;
    }

    _swim(k){
        while (k > 1 && this._greater(Math.floor(k/2), k)){
            this._exchange(k, Math.floor(k/2));
            k = Math.floor(k/2);
        }
    }

    _sink(k){
        while(2*k <= this.totalItems){
            let j = 2*k;
            if (j < this.totalItems && this._greater(j, j+1)){
                ++j;
            }
            if (!this._greater(k, j)) break;
            this._exchange(k, j);
            k = j;
        }
    }

    _greater(i, j){
        let lhs = this.keys[this.queue[i]];
        let rhs = this.keys[this.queue[j]];
        return lhs > rhs;
    }

    _exchange(i, j){
        let swap = this.queue[i];
        this.queue[i] = this.queue[j];
        this.queue[j] = swap;
        this.index[this.queue[i]] = i;
        this.index[this.queue[j]] = j;
    }

}

exports.IndexedMinPQ = IndexedMinPQ;