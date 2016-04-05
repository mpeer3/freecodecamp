(function () {
    var app = angular.module("simonapp", []);
    app.controller("contr_calc", function ($scope, $timeout) {
        $scope.led_green_on = false;
        $scope.led_green_img = "led_green_off.png";
        $scope.led_red_on = false;
        $scope.led_red_img = "led_red_off.png";
        $scope.led_yellow_on = false;
        $scope.led_yellow_img = "led_yello_off.png";
        $scope.led_blue_on = false;
        $scope.led_blue_img = "led_blue_off.png";
        $scope.led_white_on = false;
        $scope.led_white_img = "led_white_off.png";
        $scope.round = 1;
        $scope.sequ = [];
        $scope.sequ_sim = [];
        $scope.user_inp = [];
        $scope.step = 0;
        $scope.repeat=false;
        $scope.user_round = false;
        $scope.winner=false;
        $scope.strict=false;
        $scope.trigger_strict=function(){
            if ($scope.strict){
                $scope.strict=false;
            }else{
                $scope.strict=true;
            }
        }
        $scope.init = function () {
            $scope.led_green_on = false;
            $scope.led_green_img = "led_green_off.png";
            $scope.led_red_on = false;
            $scope.led_red_img = "led_red_off.png";
            $scope.led_yellow_on = false;
            $scope.led_yellow_img = "led_yello_off.png";
            $scope.led_blue_on = false;
            $scope.led_blue_img = "led_blue_off.png";
            $scope.led_white_on = false;
            $scope.led_white_img = "led_white_off.png";
            $scope.leds = ["green", "red", "yellow", "blue", "white"];
            $scope.round = 1;
            $scope.sequ = [];
            $scope.sequ_sim = [];
            $scope.user_inp = [];
            $scope.step = 0;
            $scope.user_round = false;
            $scope.winner=false;
        }
        $scope.trigger_all = function () {
            $scope.trigger(0);
            $scope.trigger(1);
            $scope.trigger(2);
            $scope.trigger(3);
            $scope.trigger(4);
            $scope.trigger(5);
        }
        $scope.trigger = function (ind) {
            if (ind == 0) {
                if (!$scope.led_green_on) {
                    $scope.led_green_on = true;
                    $scope.led_green_img = "led_green_on.png";
                    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
                    audio.play();
                } else {
                    $scope.led_green_on = false;
                    $scope.led_green_img = "led_green_off.png";
                }
            }
            if (ind == 1) {
                if (!$scope.led_red_on) {
                    $scope.led_red_on = true;
                    $scope.led_red_img = "led_red_on.png";
                    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
                    audio.play();
                } else {
                    $scope.led_red_on = false;
                    $scope.led_red_img = "led_red_off.png";
                }
            }
            if (ind == 2) {
                if (!$scope.led_yellow_on) {
                    $scope.led_yellow_on = true;
                    $scope.led_yellow_img = "led_yello_on.png";
                    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
                    audio.play();
                } else {
                    $scope.led_yellow_on = false;
                    $scope.led_yellow_img = "led_yello_off.png";
                }
            }
            if (ind == 3) {
                if (!$scope.led_blue_on) {
                    $scope.led_blue_on = true;
                    $scope.led_blue_img = "led_blue_on.png";
                    var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
                    audio.play();
                } else {
                    $scope.led_blue_on = false;
                    $scope.led_blue_img = "led_blue_off.png";
                }
            }
            if (ind == 4) {
                if (!$scope.led_white_on) {
                    $scope.led_white_on = true;
                    $scope.led_white_img = "led_white_on.png";
                    // var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
                    //   audio.play();
                } else {
                    $scope.led_white_on = false;
                    $scope.led_white_img = "led_white_off.png";
                }
            }
        }
       
        $scope.do_trigger = function () {

            $scope.trigger_all();
            $timeout(function () {
                $scope.trigger_all();
            }, 1000);
        }
        $scope.eval = function () {
            // alert($scope.user_inp);
            if ($scope.sequ_sim.toString() === $scope.user_inp.toString()) {

                $scope.user_round = false;
                $scope.user_inp = [];
               
             //   $scope.sequ = [];

              //  $scope.sequ_sim = [];
                if ($scope.round == 10) {
                    $scope.trigger_all();
                    alert("WINNER!!!");
                    $scope.winner=true;
                  
                }else{
                     $scope.round++;
                }
                //   $scope.gensequ($scope.round);
            } else {
                //alert("you loose");
                $scope.user_round = false;
                $scope.user_inp = [];
                 alert("Wrong! Try again!");
                 $scope.repeat=true;
                 if ($scope.strict){
                     $scope.init();
                 }
            }
        }
        $scope.blink = function (ind, ms) {
            if ($scope.user_round) {
                if ($scope.user_inp.length < $scope.sequ_sim.length) {
                    $scope.user_inp.push(ind);
                    $scope.trigger(ind);
                    $timeout(function () {
                        $scope.trigger(ind);
                        if ($scope.user_inp.length === $scope.sequ_sim.length) {
                            $scope.eval();

                        }
                    }, 200);


                }

            }
        }
        
        $scope.gensequ = function (round) {
            var rand = 0;
            var tim = 0;
            //for (var ct = 1; ct <= round; ct++) {
            if (!$scope.repeat){
                rand = Math.floor(Math.random() * 4);
                $scope.sequ.push(rand);
                $scope.sequ.push(rand);
                $scope.sequ_sim.push(rand);
            }
            $scope.repeat=false;
           // }
            //;
            $scope.blink_looper();
            $scope.user_round = true;
        }

        $scope.blink_looper = function () {

            $scope.trigger($scope.sequ[$scope.step]);
            if ($scope.step < $scope.sequ.length) {
                $scope.step++;
                $scope.to = $timeout(function () {
                    $scope.blink_looper();
                }, 500);
            }

        }
        $scope.start = function () {

            if ($scope.winner){
                $scope.init();
            }
            $scope.step = 0;
           // $scope.sequ = [];
          //  $scope.sequ_sim = [];
            $scope.gensequ($scope.round);
            // alert($scope.getms());


        }
    });
})();