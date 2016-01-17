/* Solution by Michael Peer 2015*/

function truncate(str, num) {
  // Clear out that junk in your trunk
  var res="";
  var end=0;
  if (num>3){
    end=num-3;
  }else if(num >0){
    end=num;
  }else{
    return str;
  }
  if (str.length==num || num>str.length){
    return str;
  }
  res=str.slice(0,end);
  res=res+"...";
  return res;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
