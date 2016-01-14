(function() {
  var app = angular.module("newsreader", []);
  var dat = [{
    id: "test",
    name: "test2"
  }];
  app.controller("contr_newsreader", function($scope, $http) {
    $scope.news = dat;
    var build_url = function(inp) {
      var rep_inp = inp.replace(/ /g, "-");
      rep_inp = "http://www.freecodecamp.com/news/" + rep_inp;
      return rep_inp;
    };
    $http.get("http://www.freecodecamp.com/news/hot").success(function(data) {
      $scope.news = data;
      for (var ct = 0; ct < $scope.news.length; ct++) {
        $scope.news[ct]["storyLink"] = build_url($scope.news[ct]["storyLink"]);
      }
    });

  });

})();