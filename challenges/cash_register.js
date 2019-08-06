function checkCashRegister(price, cash, cid) {
  var change=[];
  // Here is your change, ma'am.
  //alert(cid[8][1])
  let diff=cash*100-price*100
  let cidTotal=(cid[8][1]+cid[7][1]+cid[6][1]+cid[5][1]+cid[4][1]+cid[3][1]+cid[2][1]+cid[1][1]+cid[0][1])*100
  console.log(cidTotal)
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
 
for (let c=0;c <= 8;c++){
 if (diff>=register[c].val && register[c].ct>0){
     let max=parseInt(diff/register[c].val)
     console.log("Needed # "+ max)
     if (max>=register[c].ct){
       register[c].ret=register[c].ct;
       register[c].ct=0;
     } else {
       register[c].ret=max;
       register[c].ct=register[c].ct-max;
     }
     diff=diff-register[c].ret*register[c].val;
      let res=[]
     res.push(register[c].name);
     res.push((register[c].ret*register[c].val)/100)
     console.log("Remaining diff: "+diff)
     change.push(res)    
 }/*console.log(register[c].name+ " "+register[c].ret+" "+register[c].ct)*/
   
   
  }  //alert(diff)
  //console.log(change)
  let status="OPEN"
  if (diff===cidTotal){
    status="CLOSED"
  }
  let resObj={
    status: status,
    change: change
  }
  return resObj;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05], 5
// ["DIME", 3.1], 10
// ["QUARTER", 4.25], 25
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

let res=checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(res)
