//using significant earthquakes of the month
const quakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"
//create my map, center over west coast NA
var mymap = L.map('map').setView([40, -120], 4);
//create tilelayer, add to mymap
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(mymap);
//use d3 to create markers from earthquakes

function markerSize(mag) {
    return Math.sqrt(mag) * 10;
  }

function markerColor(color){
    return color
}

d3.json(quakeUrl).then(function(data){
    // console.log(data.features[0].geometry.coordinates)
    console.log(data)
    depthslist = [];
    // console.log(data.features.length)
        for (var i = 0; i < data.features.length; i++) {
            //create a list to get an understanding of depth levels
            // depthslist.push(data.features[i].geometry.coordinates[2]);
            // console.log("working")
            var color = "";
            if (data.features[i].geometry.coordinates[2] <= 0) {
                color = "blue";
              }
              else if (data.features[i].geometry.coordinates[2] >= 1 && data.features[i].geometry.coordinates[2] <= 15) {
                color = "green";
              }
              else if (data.features[i].geometry.coordinates[2] >= 16 && data.features[i].geometry.coordinates[2] <= 20) {
                color = "yellow";
              }
              else {
                color = "red";
              }
            var lat = data.features[i].geometry.coordinates[0]
            // console.log(lat)
            var lng = data.features[i].geometry.coordinates[1]
            // console.log(lng)
            coord = [lng, lat]
            L.circleMarker(coord, {
              fillOpacity: 0.75,
              color: "white",
              fillColor: color,
              // Setting our circle's radius equal to the output of our markerSize function
              // This will make our marker's size proportionate to its population
              radius: markerSize(data.features[i].properties.mag)
            }).bindPopup("<h1>" + data.features[i].properties.place + "</h1><hr> <h3>Magnitude: " + data.features[i].properties.mag + "</h3> <hr> <h3> Depth (km):" +data.features[i].geometry.coordinates[2] + "</h3>" ).addTo(mymap);
    }
    console.log(depthslist)
});
