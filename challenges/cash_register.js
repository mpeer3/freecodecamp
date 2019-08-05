function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  //alert(cid[8][1])
  let diff=cash-price
  let register=[
    {name: "ONE HUNDRED",val:100,ct:cid[8][1]/100,ret:0},
    {name: "TWENTY",val:20,ct:cid[7][1]/20,ret:0},
    {name: "TEN",val:10,ct:cid[6][1]/10,ret:0},
    {name: "FIVE",val:5,ct:cid[5][1]/5,ret:0},
    {name: "ONE",val:1,ct:cid[4][1]/1,ret:0},
    {name: "QUARTER",val:0.25,ct:cid[3][1]/0.25,ret:0},
    {name: "DIME",val:0.1,ct:cid[2][1]/0.1,ret:0,ret:0},
    {name: "NICKEL",val:0.05,ct:cid[1][1]/0.05,ret:0},
    {name: "PENNY",val:0.01,ct:cid[0][1]/0.01,ret:0},
    ]
 
for (let c=0;c <= 8;c++){
 if (diff>=register[c].val && register[c].ct>0){
     let max=parseInt(diff/register[c].val)
     //console.log(max)
     if (max>=register[c].ct){
       register[c].ret=register[c].ct;
       register[c].ct=0;
     } else {
       register[c].ret=max;
       register[c].ct=register[c].ct-max;
     }
     diff=diff-register[c].ret*register[c].val;
     
  }console.log(register[c].name+ " "+register[c].ret+" "+register[c].ct)
    console.log(diff)
  }  //alert(diff)
  return change;
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

checkCashRegister(80, 200, [["PENNY", 1.01], 
["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90],
 ["FIVE", 55], ["TEN", 20],
  ["TWENTY", 60], ["ONE HUNDRED", 0]]);
