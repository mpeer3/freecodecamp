/* Solution by Michael Peer 2016*/

function where(collection, source) {
   var arr = [];
  var keys_src=Object.keys(source);

	for (var ct=0;ct<collection.length;ct++){
		
		keys=Object.keys(collection[ct]);
		found=0;
		for (var ctt=0;ctt<keys_src.length;ctt++){
			
			if (collection[ct][keys_src[ctt]]==source[keys_src[ctt]]){
				found+=1;
			}
		}
		if (found==keys_src.length){
			arr.push(collection[ct]);
		}
		
	}
  return arr;
}
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


