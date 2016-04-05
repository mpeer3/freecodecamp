/* Solution by Michael Peer 2016*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var sorted=arr.sort(function(a, b){return a-b;});
  var pos=0;
  var arr_ind=[];
  var found=false;
  for (var ct=0;ct<sorted.length;ct++){
    if (num<=sorted[ct] && !found){
      pos=ct;
      found=true;
    }
   
    
  }
  if (!found){
    pos=arr.length;
  }
  return  pos;
}


getIndexToIns([5,3,20,3],5);
