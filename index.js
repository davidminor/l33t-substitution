var numberSubs = [
['o', '0'],
['i', '1'],
['l', '1'],
['s', '5'],
['g', '9'],
['a', '4'],
['b', '8'],
['t', '7'],
['e', '3']
];
var symbolSubs = [
['a', '@'],
['s', '$'],
['c', '('],
['t', '+'],
['i', '!'],
['l', '|'],
['d', '|)'],
['m', '^^'],
['k', '|<'],
['w', '\^/'],
['v', '\/'],
['x', '><'],
['n', '/\/'],
['o', '()'],
['u', '|_|'],
['h', '|-|']
];
// substitute as many of the requested amount of letters with 
// numbers and symbols as is possible.
module.exports = function(word, numberOfSubstitutions) {
  var number = true,
    numIndex = 0,
    symIndex = 0,
    numLength = numberSubs.length,
    symLength = symbolSubs.length,
    origWord,
    letterIndex;
  if (!word) {
    throw new Error("No word given");
  }
  if (arguments.length === 1) {
    numberOfSubstitutions = 1;
  }
  while(numberOfSubstitutions > 0 && 
    (numIndex < numLength || 
    symIndex < symLength)) {
    if (number) {
      for(; numIndex < numLength; numIndex++) {
        origWord = word;
        word = trySub(word, numberSubs[numIndex]);
        if (word !== origWord) {
            numberOfSubstitutions--;
            break;
        }
      }
    } else {
      for(; symIndex < symLength; symIndex++) {
        origWord = word;
        word = trySub(word, symbolSubs[symIndex]);
        if (word !== origWord) {
            numberOfSubstitutions--;
            break;
        }
      }
    }
    number = !number;
  }
  return word;
}

function trySub(word, subst) {
  var letterIndex = word.indexOf(subst[0]);
  if (letterIndex >= 0) {
    word = word.substr(0,letterIndex) + subst[1] + 
        word.substr(letterIndex+1,word.length);
    if (word.indexOf(subst[0]) == letterIndex + 1) {
      word = word.substr(0,letterIndex+1) + subst[1] +
        word.substr(letterIndex+2,word.length);
    }
  }
  return word;
}
