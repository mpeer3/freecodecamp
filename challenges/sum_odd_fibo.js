/* Solution by Michael Peer 2016*/
 
function sumFibs(max){
 var res=[];
 var compl=false
 var ct=0;
 var total=0;
 while(!compl){
  fib=1;
  if (ct > 1){
    fib=(res[ct-2])+(res[ct-1]);
  }
  res.push(fib);
  ct++;
  if (fib==max){
   if (fib % 2 !=0){
   total+=fib;
  }
   compl=true;
  }
  if (fib > max){
   compl=true;
  }
   if (fib % 2 != 0 && !compl){
   total+=fib;
   }
 }
return total;
}

sumFibs(4);



