var listOfSpecies = ['Silver birch','Oak','Red oak','Douglas fir','Eucalyptus','European Ash','Aspen','Corsican pine','Maritime pine','Black pine','Black locust','Silver fir','Willow','Cypress'];
var listOfSpecies = ['Bouleau','Chêne','Chêne rouge','Sapin douglas','Eucalyptus','Frêne','Peuplier','Pin laricio','Pin maritime','Pin noir','Robinier','Sapin blanc','Saule','Cyprès'];
var colorOfSpecies = ["#d7d79e", "#267300", "#ff0000","#00a9e6","#d3ffbe","#4ce600","#e6e600","#a900e6","#e600a9","#005ce6","#784c0b","#00c5ff","#d1ff73","#1f7174"];
var newOrder = [0,1,2,6,5,10,12,4,7,8,9,11,3,13];
let map = L.map('map',{tap: !L.Browser.mobile}).setView([43.45,1.2],12);
var marker;

/* Dark basemap */
let url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
var OSM = L.tileLayer(url, {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd'
}).addTo(map);
/**

**/

plotty.addColorScale("speciesMap", colorOfSpecies, [0,1/13,2/13,3/13,4/13,5/13,6/13,7/13,8/13,9/13,10/13,11/13,12/13,1]);

var windSpeed = L.leafletGeotiff(
        url='2018_map.tif',
        options={band: 0,
            displayMin: 1,
            displayMax: 14,
            name: 'tree species map',
            colorScale: "speciesMap",
            clampLow: false,
            clampHigh: false,
            //vector:true,
        }
    ).addTo(map);

map.on('click', function(e) {
var ROI = windSpeed.getValueAtLatLng(e.latlng.lat,e.latlng.lng);

console.log(ROI)

if(ROI > 0)
{  console.log(listOfSpecies[ROI-1])
  var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent(`Espèce : ${listOfSpecies[ROI-1]}`)
    .openOn(map);
}
});


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0,1,2,6,5,10,12,4,7,8,9,11,3,13]   ;
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < newOrder.length; i++) {
        div.innerHTML +=
            '<i style="background-color:' + colorOfSpecies[newOrder[i]] + '"></i> ' + listOfSpecies[newOrder[i]] + '<br>';
    }

    return div;
};

legend.addTo(map);
/** map.scrollWheelZoom.disable(); **/

/** L.control.sideBySide(osmLayer,stamenLayer).addTo(map); **/
