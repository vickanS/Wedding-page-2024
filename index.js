function initMap() {
  var mapElement = document.querySelector('.map');
  
  var map = new google.maps.Map(mapElement, {
    center: {lat: 56.62428, lng: 16.23311},
    zoom: 8
  });


}