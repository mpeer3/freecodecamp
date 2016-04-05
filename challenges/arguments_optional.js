/* Solution by Michael Peer 2016*/	

function add() {
  console.log(arguments.length);
  if (arguments.length==0){       
   return undefined;
  }
  if (arguments.length==2){
    if (typeof arguments[0]!="number" || typeof arguments[1]!="number"){
      return undefined;
    }
    return arguments[0]+arguments[1];
  }
  if(arguments.length==1){
    if (typeof arguments[0]=="number") {
    var val=arguments[0];
    return f=function(inp){
      if (typeof inp=="number"){
        return val+inp;
      }else{
        return undefined;
      }
    }
  }}
  return undefined;
}


add(2,3);

