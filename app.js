function initMap() {

    var pos = {};

    // geocoder created for looking up information connect to lat long
    var geocoder = new google.maps.Geocoder;
    // google maps object created
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 47.6397,
            lng: -122.3644
        },
        zoom: 14
    });
    // checks if geolocation is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            var marker = new google.maps.Marker({
                position: {lat: pos.lat, lng: pos.lng},
                map: map
            });

            geocoder.geocode({'location': {lat: pos.lat, lng: pos.lng}}, function(results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        map.data.loadGeoJson('./neighborhoods.geojson');
                        console.log(results[3].address_components[0].long_name);
                        console.log(results)
                        console.log(results[3].geometry.bounds.b.b + 'nw long')
                        console.log(results[3].geometry.bounds.f.b + 'nw lat')
                        console.log(results[3].geometry.bounds.b.f + 'se long')
                        console.log(results[3].geometry.bounds.f.f + 'se lat')
                        nwlong = results[3].geometry.bounds.b.b
                        nwlat = results[3].geometry.bounds.f.b;
                        selong = results[3].geometry.bounds.b.f;
                        selat = results[3].geometry.bounds.f.f;
                    } else {
                        window.alert('No results found');
                    }
                } else {
                  window.alert('Geocoder failed due to: ' + status);
                };

                document.getElementById('getcrimes').addEventListener("click", function(){
                    $.ajax({
                        url: "https://data.seattle.gov/resource/y7pv-r3kh.json?offense_type=ROBBERY-BUSINESS-GUN",
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
            });
        });
    };
};



// line 19 and 20 position.coords.latitude
// position.coords.longtitude
// http://zetashapes.com/editor/53033