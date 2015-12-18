/*Twitch TV by Michael Peer 2015 
  michael@michael-peer.net
  http://michael-peer.net
  ===================================
  A short demo of the Twitch API using a predefined array with some FreeCodeCamp users...
*/

(function() {
  var ct = 0;
  var app = angular.module("TwitchApp", []);
  app.controller("Userloader", function($scope, $http) {
    $scope.users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "medrybw", "brunofin","comster404"];

    $scope.userlist = [];

    $scope.adduser = function(usrname) {
      var newuser = {
        name: usrname,
        logo: "",
        online: false,
        channel: "#",
        usrlink:"#",
        stream: "not streaming"

      };
      $http.get("https://api.twitch.tv/kraken/users/" + usrname).success(function(data) {
        newuser["logo"] = data["logo"];

      });
      $http.get("https://api.twitch.tv/kraken/streams/" + usrname).success(function(data) {

    newuser["channel"] = data["_links"]["channel"];
newuser["usrlink"]="http://www.twitch.tv/"+usrname;
        newuser["stream"] = data["stream"]["channel"]["status"];

        if (newuser["stream"] != null) {
          newuser["online"] = true;
        }

      });

      $scope.userlist.push(newuser);
    }
    $scope.initapp = function() {
      $scope.userlist = [];

      usrs = $scope.users.sort();

      for (var ct = 0; ct < $scope.users.length; ct++) {
        $scope.adduser(usrs[ct]);
      }
    }
  });
 
})();