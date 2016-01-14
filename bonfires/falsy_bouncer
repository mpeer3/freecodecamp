/* Solution by Michael Peer 2016*/

function testval(val){
  if (typeof val == "number" && val >0){
    return true;
  }
  if (typeof val =="string" && val.length >0){
    return true;
  }
  return false;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr=arr.filter(testval);
  return arr;
}

bouncer([7, "ate", "", false, 9]);

