/* Solution by Michael Peer 2016*/
//noprotect
function is_prim(num){
var is_prime=true; 
  for (var ct=1;ct<=num;ct++){
     if (num % ct === 0 && ct>1 && ct<num){
        is_prime=false;
      }
  }
  if (is_prime){
  return true;
  } else{
  return false;
}
}

function sumPrimes(inp) {
  var total=0;
  for (var ctt=2;ctt<=inp;ctt++){
     if (is_prim(ctt)){
  total+=ctt;
}
  }
return total;
}

sumPrimes(10);


