var map = L.map('map').setView([47.3846028, 8.61174], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


///////////////////
/// set markers ///
///////////////////

function setMarker(loc){
    if (loc.pic !== null){
        let desc = "<h1>" + loc.description + "</h1><img src='assets/" + loc.pic + "'>" 
        L.marker(loc.latlon).addTo(map).bindPopup(desc);
    } else {
        let desc = "<h1>" + loc.description + "</h1>"
        L.marker(loc.latlon).addTo(map).bindPopup(desc);
    }
    
}

locations.forEach(loc => setMarker(loc));

///////////////////////////////////////
/// Gegenwärtigen Standort anzeigen ///
///////////////////////////////////////

const option = {
    position: 'topright',
    strings: {
        title: "Zeigt dein Standort",
        popup: "Du bist jetzt hier"
    },
    locateOptions: {
      maxZoom: 16
    }
  }

let lc = L.control.locate(option).addTo(map);
