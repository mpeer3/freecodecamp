/* Solution by Michael Peer 2015*/

function to_upper(inp){
  return inp.charAt(0).toUpperCase() + inp.slice(1).toLowerCase();
}
function titleCase(str) {
  var tmp=str.split(" ");
  for (var ct=0;ct<tmp.length;ct++){
    tmp[ct]=to_upper(tmp[ct]);
  }
  return tmp.join(" ");
}

titleCase("I'm a little tea pot");
