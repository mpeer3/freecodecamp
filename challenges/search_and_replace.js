/* Solution by Michael Peer 2016*/

function myReplace(str, before, after) {
  var arr=str.split(" ");
  for (var ct=0;ct<arr.length;ct++){
    var islower=false;
    if (arr[ct]==arr[ct].toLowerCase()){
      islower=true;
    }
    if (arr[ct].toLowerCase()==before.toLowerCase()){
      arr[ct]=after;
      if (!islower){
        arr[ct]=arr[ct][0].toUpperCase()+arr[ct].slice(1);
      }
    }
    
  }
  
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
