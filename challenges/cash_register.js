//Incomplete...in progress

function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  //alert(cid[8][1])
  let diff=cash-price
  let register=[
    {name: "ONE HUNDRED",val:100,ct:cid[8][1]/100},
    {name: "TWENTY",val:20,ct:cid[7][1]/20},
    {name: "TEN",val:10,ct:cid[6][1]/10},
    {name: "FIVE",val:5,ct:cid[5][1]/5},
    {name: "ONE",val:1,ct:cid[4][1]/1},
    {name: "QUARTER",val:0.25,ct:cid[3][1]/0.25},
    {name: "DIME",val:0.1,ct:cid[2][1]/0.1},
    {name: "NICKEL",val:0.05,ct:cid[1][1]/0.05},
    {name: "PENNY",val:0.01,ct:cid[0][1]/0.01},
    ]
  //alert(register[0].ct)
  let ct_hundred=cid[8][1]/100
  let ct_twenty=cid[7][1]/20

  let ret_hundred=0
  let ret_twenty=0
  /*if (diff>100 && ct_hundred>0){
     let max=parseInt(diff/100)
     if (max>=ct_hundred){
       ret_hundred=ct_hundred;
       ct_hundred=0;
     } else {
       ret_hundred=max;
       ct_hundred=ct_hundred-max;
     }
     diff=diff-ret_hundred*100;
  }*/
  //alert(diff)
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

checkCashRegister(19.5, 2000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
