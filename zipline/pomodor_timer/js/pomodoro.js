/*Pomodor-Timer by Michael Peer 2015 
  michael@michael-peer.net
  http://michael-peer.net
  ===================================
  Basic idea behind this Timer: setInterval is used to trigger the timer. Every second
  the display is updated. If the end of the session or break interval is reached, trigger_break is used
  to switch between session and break, respectively.
  If the timer is activated, all buttons except for the Stop-button are disabled.
  Clicking the Stop-button clears the timer via clearInterval.
*/
var minwork=25;
var minbreak=5;
var secwork=0;
var secbreak=0;
var curr=0;
var currmax=0;
var isbreak=false;
var perc=100;
var timerid;

function inc_min(){
 
  if (minwork<25) {
    minwork++;
    $("#min_work").text(minwork);
  }else {
    alert("Value must be <=25");
  }
}
function dec_min(){
  if (minwork>1) {
    minwork--;
    $("#min_work").text(minwork);
  }else {
    alert("Value must be >=1");
  }
}
function break_inc_min(){
  if (minbreak<5) {
    minbreak++;
    $("#min_break").text(minbreak);
  }else {
    alert("Value must be <=5");
  }
}
function break_dec_min(){
  if (minbreak>1) {
    minbreak--;
    $("#min_break").text(minbreak);
  }else {
    alert("Value must be >=1");
  }
}
function disp_build(){
  
  if (isbreak==false){
    curr=secwork;
    currmax=minwork;
  }else{
    curr=secbreak;
    currmax=minbreak;
  }
  var min=Math.floor(curr/60);
  var sec=curr-(min*60);
  perc=(curr/(currmax*60))*100;
  str_min=String(min);
  str_sec=String(sec);
  if (str_min.length==1){
    str_min="0"+str_min;
  }
  if (str_sec.length==1){
     str_sec="0"+ str_sec;
  }
  dispstr=str_min+":"+str_sec;
  return dispstr;
  
}
function update_disp(){
 if(isbreak==false)
 {secwork--;}
else{
  secbreak--;
}
  $("#timer_disp").text(disp_build());
  var perc_out=perc+"%";
  $(".progress-bar").width(perc_out);
  if (curr==0){
    trigger_break();
  }
}
function update_all(){
  secwork=minwork*60;
  secbreak=minbreak*60;
    $("#timer_disp").text(disp_build());
}
function trigger_break(){
  if (isbreak==false){
    isbreak=true;
    update_all();
    $("#round_type").text("Break");
  }else{
    isbreak=false;
   update_all(); $("#round_type").text("Session");
  }
}
function start_timer(){
   if (minwork<=minbreak){
     alert("Session must be longer than break");
   }else {
      $(".ctr").attr("disabled",true);
      update_all();
      timerid = setInterval(update_disp, 1000);
   }	
}
function stop_timer(){
  $(".ctr").attr("disabled",false);
  clearInterval(timerid);
  timerid=null;
  
  isbreak=true;
  trigger_break();
  $(".progress-bar").width("100%");
  
}