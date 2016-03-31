/* Solution by Michael Peer 2016*/

function get_base(base){
 switch(base) {
  case "A":
   return "T";
   break;
  case "T":
   return "A";
   break;
  case "G":
   return "C";
   break;
  case "C":
   return "G";
   break;

 }
}
function pair(str) {
 var out_arr=[];
 var inp_arr=str.split("");
 for (var ct=0;ct<inp_arr.length;ct++){
  var pair=[];
  var curr_base=inp_arr[ct];
  pair.push(curr_base);
  pair.push(get_base(curr_base));
  out_arr.push(pair);
 }
 return out_arr;
}

pair("GCG");

//for local testing
//console.log(pair("GCG"));
