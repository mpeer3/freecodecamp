/* Solution by Michael Peer 2016*/

function check_array(newArr,arr1,arr2){
   for (var ct=0;ct<arr1.length;ct++){
    if (arr2.indexOf(arr1[ct])<0){
      newArr.push(arr1[ct]);
    }
  }
  return newArr;
}
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
 
  newArr=check_array(newArr,arr1,arr2);
  newArr=check_array(newArr,arr2,arr1);
 
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
