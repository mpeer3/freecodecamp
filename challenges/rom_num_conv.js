/* Solution by Michael Peer 2019*/

function convertToRoman(num) {
 let res=[]
 //Convert input number to string
 let tmp=num.toString();
 //Create array with all roman numerals
 const romNum=[["I","II","III","IV","V","VI", "VII","VIII","IX"],["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],["M","MM","MMM","MMMM","MMMMM","MMMMMM"]]
//Loop through input string and "unshift" corresponding numeral into array
for (let c=1; c<=tmp.length;c++){
    let dig=parseInt(tmp[tmp.length-c])
    res.unshift(romNum[c-1][dig-1])
}
 //Create final output string
 return res.join("");
}

convertToRoman(36);
