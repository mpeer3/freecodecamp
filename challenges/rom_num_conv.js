/* Solution by Michael Peer 2016*/

function convert(inp) {
var firstpos=["I","II","III","IV","V","VI","VII","VIII","IX"];
var secpos=["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
var thirdpos=["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
var forpos=["M","MM","MMM","MMMM"];
var arr=inp.toString().split("");
var rom=[];
for (var ct=0;ct<arr.length;ct++){
 pos=(arr.length-ct)-1;
 if (ct===0 && arr[pos]!="0"){
  rom.push(firstpos[parseInt(arr[pos])-1]);
 }
 if (ct===1 && arr[pos]!="0"){
  rom.unshift(secpos[parseInt(arr[pos])-1]);
 }
 if (ct===2 && arr[pos]!="0"){
  rom.unshift(thirdpos[parseInt(arr[pos])-1]);

 }
 if (ct===3 && arr[pos]!="0"){
  rom.unshift(forpos[parseInt(arr[pos])-1]);
 }
console.log(arr[pos]);
}
return rom.join("");
}

console.log(convert(2014));