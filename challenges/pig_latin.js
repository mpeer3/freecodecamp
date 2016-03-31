/* Solution by Michael Peer 2016*/

function translate(str) {
  var arr=str.split("");
  var ret_arr=arr;
  var vow=["a","e","i","o","u"];
  for (var ct=0;ct<str.length;ct++) {
    if (ct==0 && vow.indexOf(str[ct])>=0){
    console.log(arr[ct]);
    return str+"way";
    break;
   }
   if (ct>=0 && vow.indexOf(str[ct])>=0){
     break;
   }
   ret_arr.push(ret_arr.shift());
  }
 return ret_arr.join("")+"ay";
}


translate("consonant");

