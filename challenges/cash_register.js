function checkCashRegister(price, cash, cid) {
  var change=[];
  //Multiply all values with 100 to avoid rounding errors
  let diff=cash*100-price*100
  const getVal=(item)=>{
	  return item[1]*100
  }
  const getSum=(acc,curr)=>acc+curr;
  //Calculate total cash in register 
  let cidTotal=cid.map(getVal).reduce(getSum);
  //Status of register	
  let register=[
    {name: "ONE HUNDRED",val:100*100,ct:cid[8][1]/100,ret:0},
    {name: "TWENTY",val:20*100,ct:cid[7][1]/20,ret:0},
    {name: "TEN",val:10*100,ct:cid[6][1]/10,ret:0},
    {name: "FIVE",val:5*100,ct:cid[5][1]/5,ret:0},
    {name: "ONE",val:100,ct:cid[4][1]/1,ret:0},
    {name: "QUARTER",val:0.25*100,ct:cid[3][1]/0.25,ret:0},
    {name: "DIME",val:0.1*100,ct:cid[2][1]/0.1,ret:0,ret:0},
    {name: "NICKEL",val:0.05*100,ct:cid[1][1]/0.05,ret:0},
    {name: "PENNY",val:0.01*100,ct:cid[0][1]/0.01,ret:0},
    ]
 //Loop through register and calculate change; update status of register
for (let c=0;c <= 8;c++){
 if (diff>=register[c].val && register[c].ct>0){
     let max=parseInt(diff/register[c].val)
     if (max>=register[c].ct){
       register[c].ret=register[c].ct;
       register[c].ct=0;
     } else {
       register[c].ret=max;
       register[c].ct=register[c].ct-max;
     }
     diff=diff-register[c].ret*register[c].val;
     
 }
    
   
  } 

  
  //Calculate updated total sum in register
  const getVal2=(item)=>{
	  return item.ct*100
  }
  cidTotal=register.map(getVal2).reduce(getSum);

  //Build output array (if register is empty, include 0 values)
  for (let c=8;c >= 0;c--){
	   var res=[]
	   if (register[c].ret*register[c].val > 0){
		   
	   res.push(register[c].name);
           res.push((register[c].ret*register[c].val)/100)
	   change.push(res)    
		   
	   } else if (cidTotal===0){
		res.push(register[c].name);
		res.push((register[c].ret*register[c].val)/100)
		change.push(res)    
	   }
    
    
  }
  
//Sort output array
change.sort(function(a,b) {
    return b[1]-a[1]
});
let status="OPEN"
//register empty, diff=0 => CLOSED
//diff > 0 => INSUFFICIEN_FUNDS
if ((cidTotal===0) && (diff===0)){
    status="CLOSED"
  } else if (diff>0){
	      status="INSUFFICIENT_FUNDS"
	      change=[]
  }
  let resObj={
    status: status,
    change: change
  }
  return resObj;
}



let res=checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(res)
