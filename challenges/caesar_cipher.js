function rot13(str) { // LBH QVQ VG!
  var res="";
  var alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
  var arr_alpha=alpha.split("");
  var arr_input=str.toUpperCase().split("");
  for (var ct=0;ct<arr_input.length;ct++){
     var pos=alpha.indexOf(arr_input[ct]);
     if (pos<0){
       res=res+arr_input[ct];
     } else{
       pos=pos+13;
       if (pos >=26){
         pos=pos-26;
       }
       res=res+alpha[pos];
     }
  }
  console.log(arr_input);

  console.log(arr_alpha.length);
  return res;
}


rot13("SERR PBQR PNZC");

