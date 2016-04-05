/* Solution by Michael Peer 2016*/

function unite(arr1, arr2, arr3) {
  var arr=[];
  for (var ct=0;ct<arguments.length;ct++){
    var curr_arg=arguments[ct];
    for (var ctt=0;ctt<curr_arg.length;ctt++){
       if (arr.indexOf(curr_arg[ctt])<0){
         arr.push(curr_arg[ctt]);
      }
     }
  }
  return arr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);


