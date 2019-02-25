const R = require('ramda');


class ParansMatcher{

    genParanMatches(left, right, paransInStr, count){
        if (left < 0 || right < 0){
            return null;
        }

        if (left == 0 && right == 0){
            console.log(paransInStr);
        } else {

            if (left > 0){
                paransInStr[count] = '(';
                this.genParanMatches(left-1, right, paransInStr, count+1);
            }

            if (right > left){
                paransInStr[count] = ')';
                this.genParanMatches(left, right-1, paransInStr, count+1);
            }
        }
    }
}

exports.ParansMatcher = ParansMatcher;