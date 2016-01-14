/* Solution by Michael Peer 2016*/

function destroyer() {
  var arr= Array.prototype.slice.call(arguments);
  var src=arr[0];
  var trg=arr.slice(1);
  nw=[];
  for (var ct=0;ct<src.length;ct++){
	
        if (trg.indexOf(src[ct]) <0 ) {
		nw.push(src[ct]);
	}		
  }

	return nw;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

