function main() {
    (function () {
        'use strict';

        $(document).ready(function(){
        $('#bxslider').bxSlider({
              auto: true,
              autoHover: true,
              adaptiveHeight: true,
              speed: 500,
              pause: 8000,
              infiniteLoop: true,
              preloadImages: 'visible',
              touchEnabled: true,
              swipeThreshold: 200,
              controls: true,
              onSliderLoad: function(){
                $("#carousel").css("visibility", "visible");
              }
           });
        });

        /* Show Menu on Book */
        $(window).bind('scroll', function () {
            var navHeight = $(window).height() - 600;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        /* Collapsing Navigation Bar */
        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

         
		       	/**
		 * Creates a new marker and adds it to a group
		 * @param {H.map.Group} group       The group holding the new marker
		 * @param {H.geo.Point} coordinate  The location of the marker
		 * @param {String} html             Data associated with the marker
		 */
		function addMarkerToGroup(group, coordinate, html) {
		  var marker = new H.map.Marker(coordinate);
		  // add custom data to the marker
		  marker.setData(html);
		  group.addObject(marker);
		}

		var ncr = {
		        lat: 14.598707, 
		        lng: 121.004751
		      };

		      var car = {
		        lat: 17.697409, 
		        lng: 121.36322
		      };
		      var regionOne = {
		        lat: 17.45128, 
		        lng: 120.566711
		      };
		      var regionTwo = {
		        lat: 17.294003, 
		        lng: 122.110291
		      };
		      var regionThree = {
		        lat: 16.062706, 
		        lng: 120.907288
		      };
		      var regionFourA = {
		        lat: 14.201553, 
		        lng: 121.593933
		      };
		      var regionFourB = {
		        lat: 11.966247, 
		        lng: 120.140991
		      };
		      var regionFive = {
		        lat: 13.616092, 
		        lng: 123.19519
		      };
		      var regionSix = {
		        lat: 11.266767, 
		        lng: 122.382202
		      };
		      var regionSeven = {
		        lat: 10.381927, 
		        lng: 123.920288
		      };
		      var regionEight = {
		        lat: 11.352951, 
		        lng: 124.93103
		      };
		      var regionNine = {
		        lat: 7.941732, 
		        lng: 123.074341
		      };
		      var regionTen = {
		        lat: 8.050527, 
		        lng: 124.172974
		      };
		      var regionEleven = {
		        lat: 7.451803, 
		        lng: 125.678101
		      };
		      var regionTwelve = {
		        lat: 6.786808, 
		        lng: 124.3927
		      };
		      var regionThirteen = {
		        lat: 8.984919, 
		        lng: 125.864868
		      };
		      var armm = {
		        lat: 6.033495, 
		        lng: 121.173706
		      };

		      var nir = {
		        lat: 9.88444,
		        lng: 122.942505
		      };
		/**
		 * Add two markers showing the position of Liverpool and Manchester City football clubs.
		 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
		 * @param  {H.Map} map      A HERE Map instance within the application
		 */
		function addInfoBubble(map) {
		  var group = new H.map.Group();

		  map.addObject(group);

		  // add 'tap' event listener, that opens info bubble, to the group
		  group.addEventListener('tap', function (evt) {
		    // event target is the marker itself, group is a parent event target
		    // for all objects that it contains
		    var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
		      // read custom data
		      content: evt.target.getData()
		    });
		    // show info bubble
		    ui.addBubble(bubble);
		  }, false);

		  addMarkerToGroup(group, ncr,
		    '<div><a href=\'http://www.mcfc.co.uk\' >Manchester City</a>' +
		    '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');

		  addMarkerToGroup(group, car,
		    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		    '</div><div >Anfield<br>Capacity: 45,362</div>');

		  addMarkerToGroup(group, regionOne,
		    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		    '</div><div >Anfield<br>Capacity: 45,362</div>');

		  addMarkerToGroup(group, regionTwo,
		    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		    '</div><div >Anfield<br>Capacity: 45,362</div>');

		  addMarkerToGroup(group, regionThree,
		    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		    '</div><div >Anfield<br>Capacity: 45,362</div>');

		  addMarkerToGroup(group, regionFourA,
		    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		    '</div><div >Anfield<br>Capacity: 45,362</div>');

		  addMarkerToGroup(group, regionFourB,
		    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		    '</div><div >Anfield<br>Capacity: 45,362</div>');

		  addMarkerToGroup(group, regionFive,
		    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		    '</div><div >Anfield<br>Capacity: 45,362</div>');

		  addMarkerToGroup(group, regionSix,
		    '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		    '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, regionSeven,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, regionEight,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, regionNine,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, regionTen,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, regionEleven,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, regionTwelve,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, regionThirteen,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, armm,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		  // addMarkerToGroup(group, nir,
		  //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
		  //   '</div><div >Anfield<br>Capacity: 45,362</div>');

		}

		function moveMapToNCR(map){
		  map.setCenter(ncr);
		  map.setZoom(14);
		}



		/**
		 * Boilerplate map initialization code starts below:
		 */

		// initialize communication with the platform
		var platform = new H.service.Platform({
		  'app_id': 'WZpWFIxuldegBsK3LCv1',
		  'app_code' : 'voZ7B4yaZnJmFqMFzbIWUw',
		  useCIT: true,
		  useHTTPS: true
		});
		var defaultLayers = platform.createDefaultLayers();

		// initialize a map - this map is centered over Europe
		var map = new H.Map(document.getElementById('map'),
		  defaultLayers.normal.map,{
		  center: {lat: 12.391513, lng: 122.497559},
		  zoom: 6
		});

		// MapEvents enables the event system
		// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
		var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

		// create default UI with layers provided by the platform
		var ui = H.ui.UI.createDefault(map, defaultLayers);

		// Now use the map as required...
		addInfoBubble(map);
		 
    }());
}

main();