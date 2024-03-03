function initMap() {
  var mapElement = document.querySelector('.map');
  
  var map = new google.maps.Map(mapElement, {
    center: {lat: 56.64241, lng: 16.23861},
    zoom: 8
  });

  var marker = new google.maps.Marker({
    position: {lat: 56.64165, lng: 16.22625},
    map: map
  });
}