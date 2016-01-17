/*Simple JS Calc by Michael Peer 2015
  michael@michael-peer.net
  http://michael-peer.net
  ===================================
  Short and simple - build a string using AngularJS and do the calculation 
  using the eval -function.
*/

(function() {
  var app = angular.module("campcalc", []);
  app.controller("contr_calc", function($scope) {
    $scope.calc_res = "0";
    $scope.calc_inp = "";
    $scope.getval = function(inp) {
      $scope.calc_inp += inp;
    };
    $scope.doclr = function() {
      $scope.calc_res = "0";
      $scope.calc_inp = "";
    };
    $scope.docalc = function() {
      $scope.calc_res = eval($scope.calc_inp);
      $scope.calc_inp = $scope.calc_res;
      //
    };

  });
})();