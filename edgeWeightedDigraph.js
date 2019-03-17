const R = require('ramda');

class WeightedDirectedEdge{
    
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    
    from(){
        return from;
    }

    to(){
        return to;
    }

    weight(){
        
    }
}


class EdgeWeightedDigraph{

    constructor(){
        this.adjacency = {'':[new WeightedDirectedEdge()]}
    }
    
    adjacents(vertex){
        return this.adjacency[vertex];
    }

    vertices(){
        return R.keys(this.adjacency);
    }
}

exports.WeightedDirectedEdge = WeightedDirectedEdge;
exports.EdgeWeightedDigraph = EdgeWeightedDigraph;