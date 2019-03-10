const R = require('ramda');
const fs = require('fs');
const rl = require('readline');

const filename = "/usr/share/dict/words";
const WORDS = [];

class CountEditDistance{

    constructor(givenWord, givenCost){
        this.words = WORDS;
        this.cost = []
        
        var lineReader = rl.createInterface({
            input: fs.createReadStream(filename)
        });
          
        let self = this;
        lineReader.on('line', function (line) {
            WORDS.push(line);
            let cost = self.buildLevenchstein(givenWord, line);
            if (cost <= givenCost){
                console.log(line);
            }
        });    
    }

    buildLevenchstein(word1 = "", word2 = ""){
        let columns = word1.length;
        let rows = word2.length;

        let currentRow = [0];
        for (let i of R.range(1, columns)){
            currentRow[i] = currentRow[i-1] + 1;
        }

        for (let i of R.range(1, rows)){
            let previousRow = currentRow;
            currentRow = [previousRow[0]+1];

            for (let j of R.range(1, columns)){
                let insertCost = currentRow[j-1] + 1;
                let removalCost = previousRow[j] + 1;

                let subsCost = 0;
                if (word1[j] === word2[i]){
                    subsCost = previousRow[j-1];
                }else{
                    subsCost = previousRow[j-1] + 1;
                }

                currentRow.push(Math.min(insertCost, removalCost, subsCost));
            }
        }
        
        return R.last(currentRow);
    }



}

exports.editDistance = CountEditDistance;

/**
 * def levenshtein( word1, word2 ):
    columns = len(word1) + 1
    rows = len(word2) + 1

    # build first row
    currentRow = [0]
    for column in xrange( 1, columns ):
        currentRow.append( currentRow[column - 1] + 1 )

    for row in xrange( 1, rows ):
        previousRow = currentRow
        currentRow = [ previousRow[0] + 1 ]

        for column in xrange( 1, columns ):

            insertCost = currentRow[column - 1] + 1
            deleteCost = previousRow[column] + 1

            if word1[column - 1] != word2[row - 1]:
                replaceCost = previousRow[ column - 1 ] + 1
            else:                
                replaceCost = previousRow[ column - 1 ]

            currentRow.append( min( insertCost, deleteCost, replaceCost ) )

    return currentRow[-1]

def search( word, maxCost ):
    results = []
    for word in words:
        cost = levenshtein( TARGET, word )

        if cost <= maxCost:
            results.append( (word, cost) )

    return results

start = time.time()
results = search( TARGET, MAX_COST )
end = time.time()

for result in results: print result        

print "Search took %g s" % (end - start)



# The Trie data structure keeps a set of words, organized with one node for
# each letter. Each node has a branch for each letter that may follow it in the
# set of words.
class TrieNode:
    def __init__(self):
        self.word = None
        self.children = {}

        global NodeCount
        NodeCount += 1

    def insert( self, word ):
        node = self
        for letter in word:
            if letter not in node.children: 
                node.children[letter] = TrieNode()

            node = node.children[letter]

        node.word = word

# read dictionary file into a trie
trie = TrieNode()
for word in open(DICTIONARY, "rt").read().split():
    WordCount += 1
    trie.insert( word )

print "Read %d words into %d nodes" % (WordCount, NodeCount)

# The search function returns a list of all words that are less than the given
# maximum distance from the target word
def search( word, maxCost ):

    # build first row
    currentRow = range( len(word) + 1 )

    results = []

    # recursively search each branch of the trie
    for letter in trie.children:
        searchRecursive( trie.children[letter], letter, word, currentRow, 
            results, maxCost )

    return results

# This recursive helper is used by the search function above. It assumes that
# the previousRow has been filled in already.
def searchRecursive( node, letter, word, previousRow, results, maxCost ):

    columns = len( word ) + 1
    currentRow = [ previousRow[0] + 1 ]

    # Build one row for the letter, with a column for each letter in the target
    # word, plus one for the empty string at column 0
    for column in xrange( 1, columns ):

        insertCost = currentRow[column - 1] + 1
        deleteCost = previousRow[column] + 1

        if word[column - 1] != letter:
            replaceCost = previousRow[ column - 1 ] + 1
        else:                
            replaceCost = previousRow[ column - 1 ]

        currentRow.append( min( insertCost, deleteCost, replaceCost ) )

    # if the last entry in the row indicates the optimal cost is less than the
    # maximum cost, and there is a word in this trie node, then add it.
    if currentRow[-1] <= maxCost and node.word != None:
        results.append( (node.word, currentRow[-1] ) )

    # if any entries in the row are less than the maximum cost, then 
    # recursively search each branch of the trie
    if min( currentRow ) <= maxCost:
        for letter in node.children:
            searchRecursive( node.children[letter], letter, word, currentRow, 
                results, maxCost )

start = time.time()
results = search( TARGET, MAX_COST )
end = time.time()

for result in results: print result        

print "Search took %g s" % (end - start)



 * 
 * 
 * 
 * 
 */





