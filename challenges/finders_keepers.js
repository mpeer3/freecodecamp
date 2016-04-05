/* Solution by Michael Peer 2016*/

function find(arr, func) {
   for (var ct=0;ct<arr.length;ct++){
    var curr=arr[ct];
    var cond=func(curr);
    if (cond){      
     return curr;
     }
   }

}


find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

