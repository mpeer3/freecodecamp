/* Solution by Michael Peer 2015*/

function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum=0;
  for (var ct=min;ct<=max;ct++){
    sum+=ct;
  }
  return sum;
}

sumAll([1, 4]);
