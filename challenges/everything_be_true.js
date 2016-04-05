/* Solution by Michael Peer 2016*/	

function every(collection, pre) {
  // Does everyone have one of these?
  var compl=true;
  for (var ct=0;ct<collection.length;ct++){
   var curr=collection[ct];
   if (!curr.hasOwnProperty(pre)){
     compl=false;
   } else {
     if (curr[pre]===0 || curr[pre]===undefined|| curr[pre]===null || curr[pre].length===0 ){
       compl=false;
     }
     if (typeof curr[pre]==="number" && isNaN(curr[pre])){
       compl=false;
     }
   }
  }
  return compl;
}




every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');


