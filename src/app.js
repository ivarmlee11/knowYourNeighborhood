function initMap() {

var pos = {};

// google maps object created
var map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 47.6397,
        lng: -122.3644
    },
    zoom: 14
});

if (navigator.geolocation) {
    console.log('works');
} else {
   console.log('don\'t work');
}
var pos = {
    lat: 47.6397,
    lng: -122.3644
};

var marker = new google.maps.Marker({
    position: {lat: pos.lat, lng: pos.lng},
    map: map
});

map.data.loadGeoJson('../neighborhoods.geojson');


document.getElementById('getrobbery').addEventListener("click", function(){
    $.ajax({
        url: "https://data.seattle.gov/resource/y7pv-r3kh.json?offense_type=ROBBERY-BUSINESS-GUN&$limit=500",
        type: "get",
        success: function(response) {
            for(var i = 0; i < response.length; i++) {
                console.log(response[i].latitude + '   lat')
                console.log(response[i].longitude + '   long')
                console.log(response[i].offense_type)
                // console.log(map);
                new google.maps.Marker({
                    position: {lat: parseFloat(response[i].latitude), lng: parseFloat(response[i].longitude)},
                    map: map
                });
            }
        },
        error: function(xhr) {
            console.log(xhr)
        }
    }); 
});
document.getElementById('getassault').addEventListener("click", function(){
    $.ajax({
        url: "https://data.seattle.gov/resource/y7pv-r3kh.json?summarized_offense_description=ASSAULT&$limit=500",
        type: "get",
        success: function(response) {
            for(var i = 0; i < response.length; i++) {
                // console.log(map);
                new google.maps.Marker({
                    position: {lat: parseFloat(response[i].latitude), lng: parseFloat(response[i].longitude)},
                    map: map
                });
            }
        },
        error: function(xhr) {
            console.log(xhr)
        }
    }); 
});
document.getElementById('getnarcotics').addEventListener("click", function(){
    $.ajax({
        url: "https://data.seattle.gov/resource/y7pv-r3kh.json?summarized_offense_description=NARCOTICS&$limit=500",
        type: "get",
        success: function(response) {
            for(var i = 0; i < response.length; i++) {
                // console.log(map);
                new google.maps.Marker({
                    position: {lat: parseFloat(response[i].latitude), lng: parseFloat(response[i].longitude)},
                    map: map
                });
            }
        },
        error: function(xhr) {
            console.log(xhr)
        }
    }); 
});
document.getElementById('getdui').addEventListener("click", function(){
    $.ajax({
        url: "https://data.seattle.gov/resource/y7pv-r3kh.json?summarized_offense_description=DUI&$limit=500",
        type: "get",
        success: function(response) {
            for(var i = 0; i < response.length; i++) {
                console.log(response[i].latitude + '   lat')
                console.log(response[i].longitude + '   long')
                console.log(response[i].offense_type)
                // console.log(map);
                new google.maps.Marker({
                    position: {lat: parseFloat(response[i].latitude), lng: parseFloat(response[i].longitude)},
                    map: map
                });
            }
        },
        error: function(xhr) {
            console.log(xhr)
        }
    }); 
});
document.getElementById('getcarprowl').addEventListener("click", function(){
    $.ajax({
        url: "https://data.seattle.gov/resource/y7pv-r3kh.json?summarized_offense_description=CAR PROWL&$limit=500",
        type: "get",
        success: function(response) {
            console.log(response)
            for(var i = 0; i < response.length; i++) {
                console.log(response[i].latitude + '   lat')
                console.log(response[i].longitude + '   long')
                console.log(response[i].offense_type)
                // console.log(map);
                new google.maps.Marker({
                    position: {lat: parseFloat(response[i].latitude), lng: parseFloat(response[i].longitude)},
                    map: map
                });
            }
        },
        error: function(xhr) {
            console.log(xhr)
        }
    }); 
});

};

$(document).ready(function() {
    console.log('ready');   
    $('#show').click(function() {
        $('#map').show();
        $('.graph').hide();
    });
    $('#hide').click(function() {
        $('#map').hide();
        $('.graph').show();
    });

});

