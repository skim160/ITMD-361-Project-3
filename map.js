    function initMap() {
      var myLatlng = {lat: 37.551, lng: 126.988};
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: myLatlng
      });
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Click to zoom'
      });
      map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
      });
      marker.addListener('click', function() {
          map.setZoom(15);
          map.setCenter(marker.getPosition());
      });
    }