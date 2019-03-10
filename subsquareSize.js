const R = require('ramda');

class Square {

    constructor(){
        this.matrix = [[0,0,0],[0,0,0],[0,0,0]]
        this.size = 0
        this.finalRow = 0;
        this.finalColumn = 0;
    }

    maxSize(){
        let N = this.matrix.length;
        let col = 0
        let maxSize = 0
        while (N - col > maxSize){
            for (let row = 0; row < this.matrix.length; ++row){
                let curSize = N - Math.max(row, col)
                while (curSize > maxSize){
                    if (this.isSquare(row, col, curSize)){
                        this.finalRow = row;
                        this.finalColumn = col;
                    }
                }
                maxSize--;
            }
            col++
        }


    }

    isSquare(row, col, size){
        for (let i = 0; i < this.matrix.length; ++i){
            if (this.matrix[row][col+i] !== 1){

            }
            if (this.matrix[row+size-1][col+i] !== 1){

            }
        }

        for (let i = 1; i < this.matrix.length; ++i){
            if (this.matrix[row+i][col] !== 1){

            }
            if (this.matrix[row+size-1][col+i] !== 1){

            }
        }

    }


}