/*Simple Wiki Viewer by Michael Peer 2016
  michael@michael-peer.net
  http://michael-peer.net
  ===================================
  This is a brief example of the Wikipedia API. It supports a search function with optional autocomplete
  and a random search. Due to the Cross-origin resource sharing (CORS) policies of Wikipedia, I am using
  the Angular factory "Wikicaller".
*/


(function() {

  var app = angular.module("wikisearch", []);
  var dat = [{
    id: "test",
    name: "test2"
  }];
  app.factory('wikicaller', function($http) {

    var wikicaller = {
      get: function(srch, randmod) {
        if (randmod) {
          return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnlimit=5&callback=JSON_CALLBACK&rawcontinue=true');

        } else {
          return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=' + srch + '&callback=JSON_CALLBACK&rawcontinue=true&explaintext');
        }
      }
    };

    return wikicaller;
  });
  app.controller("contr_wikisearch", function($scope, wikicaller) {
    $scope.res = dat;
    $scope.res2 = "";
    $scope.srch = "";
    $scope.autosrch = false;
    var parsehtml = function(randmod) {
      var ct = 0;
      for (var ct = 0; ct < $scope.res2.length; ct++) {
        if (!randmod) {
          var r = $scope.res2[ct].snippet.replace(/\<\/span\>/g, "");
          r = r.replace(/\<span class\=\"searchmatch\"\>/g, "");
        };

        var r2 = $scope.res2[ct].title.split(" ");
        $scope.res2[ct].link = "https://en.wikipedia.org/wiki/" + r2.join("_");
        $scope.res2[ct].snippet = r;
      };

    };
    var runquery = function(quer, randmod) {
      wikicaller.get(quer, randmod).then(function(data) {

        $scope.res = data.data;
        if (randmod) {
          $scope.res2 = $scope.res["query"]["random"];
        } else {
          $scope.res2 = $scope.res["query"]["search"];
        }
        parsehtml(randmod);
      });

    };
    $scope.keyup = function() {
      if ($scope.autosrch) {
        $scope.do_search();
      };
    }
    $scope.do_rand_search = function() {

      runquery("", true);

    }
    $scope.do_search = function() {

      if ($scope.srch.length == 0) {
        //  alert("Error: no input");
      } else {
        runquery($scope.srch, false);
      }
    };

  });

})();
