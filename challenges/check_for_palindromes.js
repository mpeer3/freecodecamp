/* Solution by Michael Peer 2019*/

function palindrome(str) {
  // Good luck!
  str=str.replace(/\W/g,'').toLowerCase()
  str=str.replace(/\_/g,'').toLowerCase()
  var str2=str.split('').reverse().join('')
  return str==str2;
}



palindrome("eye");
