/* Solution by Michael Peer 2016*/
//noprotect
function smallestCommons(arr) {
   var start;
   var stop;
   if (arr[0]<arr[1]){
    start=arr[0];
    stop=arr[1];
   }else{
    start=arr[1];
    stop=arr[0];
  }
  found=false;
  ct=stop;
  res=0;
  while (!found){
   var sum=0;
   for (var ctt=start;ctt<=stop;ctt++){
      sum+=ct % ctt;
   }
   if (sum === 0){
    found=true;
    res=ct;
   }else{
   ct++;
    }
  }
 return res;
}


smallestCommons([1,5]);


