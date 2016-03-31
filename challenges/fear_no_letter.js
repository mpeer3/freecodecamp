/* Solution by Michael Peer 2016*/

function fearNotLetter(str) {
  var letters="abcdefghikjlmnopqrstuvwxyz";
  var arr_str=str.split("");
  var start=letters.indexOf(arr_str[0]);
  console.log(start);

  var arr_letters=letters.split("");
  var res="";
  for (var ct=0;ct<str.length;ct++) {
  if (str.indexOf(arr_letters[start+ct])<0){
      res=res+arr_letters[start+ct];
    }
  }
  if (res.length==0){
    return undefined;
  }else {
  return res;
  }
}

fearNotLetter("abce");
