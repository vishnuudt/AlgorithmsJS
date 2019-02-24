const R = require('ramda'); 


class Permute{

    genPermute(permuteWith){
        if (permuteWith === null){
            return null;
        }
        let permutations = [];
        if (permuteWith.trim().length == 0){
            permutations.push("");
            return permutations;
        }

        let first = permuteWith.charAt(0);
        let rest = permuteWith.substring(1);
        let words = this.genPermute(rest);
        R.map((word) => {
            for (let i = 0; i <= word.length; ++i){
                permutations.push(this.genWordWith(word, i, first));
            }
        }, words);
        return permutations;
    }

    genWordWith(word, index, charItem){
        let before = word.substring(0, index);
        let after = word.substring(index);
        return before + charItem + after;
    }

}

exports.Permute = Permute;