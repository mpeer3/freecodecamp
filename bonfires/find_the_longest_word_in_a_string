/* Solution by Michael Peer 2015*/
/* http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string */
/* Implement sort function and return length of first array item */

function findLongestWord(str) {
  var tmp=str.split(" ");
  tmp.sort(function(a,b){
    return a.length < b.length;
  });
  return tmp[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
