/*By Michael Peer */

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if (howMany===0){
    return arr;
  }
  if (howMany >=arr.length){
    return [];
  }
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);