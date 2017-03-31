 function initMap() {
        var Woodley = {lat: 53.6387042, lng: -1.7704527};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: Woodley
        });
        var marker = new google.maps.Marker({
          position: Woodley,
          map: map
        });
      }
      
