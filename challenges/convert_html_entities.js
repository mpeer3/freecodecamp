/* Solution by Michael Peer 2016*/

function convert(str) {
  // &colon;&rpar;
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");
 
  return str;
}

convert('Dolce & Gabbana');


