function jsonerror() {
  alert("Unable to parse json.");
};

function jsonparse(j) {
  // alert(j);
  $("#city").text(j["name"]);
  var temp_k = j["main"]["temp"];
  var temp_c = Math.floor(temp_k - 273);
  var temp_f = Math.floor((temp_k - 273) * 1.8 + 32);

  $("#temp").text(temp_f + " F " + temp_c + " C");
  var descr = j["weather"];

  $("#desc").text(descr[0]["main"] + "..." + descr[0]["description"]);
  var tmp_icon = descr[0]["icon"];

  $("#tmpicon").attr("src", "http://openweathermap.org/img/w/" + tmp_icon + ".png");
  var windspeed = j["wind"]["speed"];
  $("#wind").text("Wind: " + windspeed + " m/s");
};

function json_parse_track(msg) {
  var lt = msg.lat;
  var ln = msg.lon;
  $("#coord_lat").val(lt);
  $("#coord_lon").val(ln);
};

function dotrack() {
  $.ajax({
    url: 'http://ip-api.com/json',
    type: "GET",
    dataType: "jsonp",
    async: false,
    success: function(msg) {
      json_parse_track(msg);
    },
    error: function() {
      jsonerror();
    }

  });
}

function queryweather(lat, lon) {
  var w_url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon+"&APPID=211534546eaf2e49e19885bf925fed3d";
  $.ajax({
    url: w_url,
    type: "GET",
    dataType: "jsonp",
    async: false,
    success: function(msg) {
      jsonparse(msg);
    },
    error: function() {
      jsonerror();
    }

  });
}

function getweather() {
  var lat = $("#coord_lat").val();
  var lon = $("#coord_lon").val();
  var chk = (lat >= -90) && (lat <= 90) && (lon >= -180) && (lon <= 180);
  if (chk == true) {
    queryweather(lat, lon);
  }else {
    alert ("Lat/Lon out of range!")
  }

};
$(document).ready(function() {

});
