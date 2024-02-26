function initMap() {
    var location = {lat: 56.62612362203652, lng: 16.2359255381287};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: location
    });
  
    var marker = new google.maps.marker.AdvancedMarkerElement({
      position: location,
      map: map
    });
  
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({
      map: map
    });
  
    document.getElementById('directions-form').addEventListener('submit', function(e) {
      e.preventDefault();

      var start = document.getElementById('start').value;
  
      directionsService.route({
        origin: start,
        destination: location,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    });
  }