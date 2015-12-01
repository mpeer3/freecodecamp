/* Solution by Michael Peer 2015*/
/* http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes */
/* Convert to lowercase and remove any special characters; reverse and compare
   with itself */

function palindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/ /g,"");
  str=str.replace(/\,/g,"");
  str=str.replace(/\./g,"");
  str=str.replace(/\(/g,"");
  str=str.replace(/\)/g,"");
  str=str.replace(/\//g,"");
  str=str.replace(/\\/g,"");
  str=str.replace(/\_/g,"");
  str=str.replace(/\-/g,"");
  var str2=str.split("").reverse().join("");
  return str===str2;
}
palindrome("eye");
