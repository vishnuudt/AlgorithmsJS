const R = require('ramda');
const minPQ = require('./indexedMinPQ');

class DjikstraShortestPath{

    constructor(edgeWeightedDigraph, startVertex){
        this.distanceTo = [];
        this.edgeTo = [];
        this.indexedMinPQ = new minPQ.IndexedMinPQ();

        for(let vertex of edgeWeightedDigraph.vertices()){
            this.distanceTo[vertex] = Number.POSITIVE_INFINITY;
        }

        this.distanceTo[startVertex] = 0;
        this.indexedMinPQ.insert(startVertex, 0);

        while(!this.indexedMinPQ.isEmpty()){
            let minVertex = this.indexedMinPQ.delMin();
            for(let eachAdjacent of edgeWeightedDigraph.adjacents(minVertex)){
                this.relax(eachAdjacent);
            } 
        }
    }

    relax(directedEdge){
        let from = directedEdge.from();
        let to = directedEdge.to();

        if (this.distanceTo[to] > this.distanceTo[from] + directedEdge.weight()){
            this.distanceTo[to] = this.distanceTo[from] + directedEdge.weight();
            this.edgeTo[to] = directedEdge;

            if (this.indexedMinPQ.contains(to)){
                this.indexedMinPQ.decreaseKey(to, this.distanceTo[to]);
            }else{
                this.indexedMinPQ.insert(to, this.distanceTo[to]);
            }
        }
    }
}



