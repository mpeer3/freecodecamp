/* Solution by Michael Peer 2016*/

function splitter(match){
  return "-"+match.toLowerCase();
}
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
str=str.replace(/[A-Z]/g,splitter);
  str=str.toLowerCase();
str=str.replace(/ /g,"-");
str=str.replace(/_/g,"-");
str=str.replace(/--/g,"-");
if (str.indexOf("-")==0){
str=str.substring(1,str.length);
}
  return str;
}

spinalCase('This Is Spinal Tap');


