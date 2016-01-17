/*By Michael Peer 2015*/

function chunk(arr, size) {
  // Break it up.
  var max=arr.length;
  var pos=-1;
  var res=[];
  var tmp=[];
  while (pos < max){
    for (var ct=1;ct<=size;ct++){
      pos++;
      if (pos<max){
       tmp.push(arr[pos]);
      }
    }
    if (tmp.length>0){
    res.push(tmp);
    }
    tmp=[];
  }
  return res;
}

chunk(["a", "b", "c", "d"], 2);