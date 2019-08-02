//By Michael Peer 2019

const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ" //26
const shiftLetter=(letter)=>{
  let pos=alpha.indexOf(letter);
  if (alpha.indexOf(letter)>=0){
    pos=pos+13;
    if (pos >=26){
      pos=pos-26;
    }
    return alpha[pos];
   } else {
     return letter;
   }
}


const rot13=(str) =>{ // LBH QVQ VG!
  
 
  return str.split("").map(shiftLetter).join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
