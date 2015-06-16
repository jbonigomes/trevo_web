function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatlng = new google.maps.LatLng(-30.190061, -52.372276);
  var mapOptions = {
    center: myLatlng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Trevo Materiais de Construção'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {

  $('.btn-contact').click(function() {
    $('#target').focus();
    $('html, body').animate({ scrollTop: $(document).height() }, 1000);
  });

});
