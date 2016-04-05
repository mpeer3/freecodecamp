function drop(arr, func) {
  
  // Drop them elements.
  var found=-1;
  for (var ct=0;ct<arr.length;ct++){
    if (func(arr[ct]) && found === -1){
      found=ct;
    }
    
  }
  if (found >=0){
      return arr.slice(found);
    } else {
      return [];
    }
}

drop([1, 2, 3], function(n) {return n < 3; });

