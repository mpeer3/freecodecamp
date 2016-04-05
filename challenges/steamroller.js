/* Solution by Michael Peer 2016*/
function steamroller(arr) {
var flat=[];
  
 function flatten(inp){
  for (var ct=0;ct<inp.length;ct++){
   var curr=inp[ct];
   if (!Array.isArray(curr)){
     flat.push(curr);
   }else{
       flatten(curr);
    }
  }
 
   }

 flatten(arr);
  return flat;
}
steamroller([[['a']], [['b']]]);


