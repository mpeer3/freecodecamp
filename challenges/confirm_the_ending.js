/* Solution by Michael Peer 2015*/

function end(str, target) {
  var pos=str.length-target.length;
  var sub_str=str.substr(pos,target.length);
  return target===sub_str;
}

end("Bastian", "n");

