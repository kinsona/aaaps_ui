// COLLECT DATA BASED ON BEHAVIOR AND INTERACTION
// goal is to be able to predict activities such as yoga.


// Lets use initialstate for some visualization help
// admin will just go to their platform for now to view data
// expected UI: 
// DEV:
// https://app.initialstate.com/#/
// Admin Bucket
// endpoint:https://groker.initialstate.com/api/ events?accessKey=hQ7dT9fyPrTcbgu5pzTjcROozeuuRnnc&bucketKey=9BARX6QRUQRA
// bucket key:9BARX6QRUQRA
// access key:hQ7dT9fyPrTcbgu5pzTjcROozeuuRnnc
// http://docs.initialstateeventsapi.apiary.io/#reference/event-data/events-json/send-events


// location
function store_user_location() {

    var x=document.getElementById("demo");

    function getLocation() {
    	if (navigator.geolocation) {

        	navigator.geolocation.getCurrentPosition(showPosition);

        } else {
        	console.log("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {

    	console.log(position.coords.latitude, position.coords.longitude);
    	// console.log(position);
    	// return position;
    	// location = position.coords.latitude;

    	// send lat and long to initialstate in a map mode
		$.get(
		    "https://groker.initialstate.com/api/events?accessKey=hQ7dT9fyPrTcbgu5pzTjcROozeuuRnnc&bucketKey=9BARX6QRUQRA",
		    {Map:position.coords.latitude+','+position.coords.longitude},
		    function(data) {
		       // alert('page content: ' + data);
		       console.log('data posted to initialstate');
		    }
		);


    	// improve position data
    	// send data to be stored to initialstate
    	// get address details
    	// here api details
    	// app name
    	// app id:zYjdD0b3RFFAXaT3KHli
    	// app code:h1Z171XeOPO7eQIMtyXNZg
    	function getAddress(latitude, longitude) {

			// Instantiate a map and platform object:
			var platform = new H.service.Platform({
			  'app_id': 'zYjdD0b3RFFAXaT3KHli',
			  'app_code': 'h1Z171XeOPO7eQIMtyXNZg'
			});



			// Create the parameters for the reverse geocoding request:
			var reverseGeocodingParameters = {
			    prox: latitude+','+longitude,
			    mode: 'retrieveAddresses',
			    maxresults: 1
			  };

			// Define a callback function to process the response:
			function onSuccess(result) {
			  var location = result.Response.View[0].Result[0];

			  // for now lets just reduce to close address
			  // console.log(location.Location.Address.Label)
				// send location to initialstate for visulizer
				// location
				$.get(
					"https://groker.initialstate.com/api/events?accessKey=hQ7dT9fyPrTcbgu5pzTjcROozeuuRnnc&bucketKey=9BARX6QRUQRA",
					{LastAddress:location.Location.Address.Label},
					function(data) {
					   // alert('page content: ' + data);
					   console.log('data posted to initialstate');
					}
				);

			};

			// Get an instance of the geocoding service:
			var geocoder = platform.getGeocodingService();

			// Call the geocode method with the geocoding parameters,
			// the callback and an error callback function (called if a
			// communication error occurs):
			geocoder.reverseGeocode(
			  reverseGeocodingParameters,
			  onSuccess,
			  function(e) { alert(e); 
			  });
    	}
    	// DEV MODE: temp comment, uncomment soon below
    	getAddress(position.coords.latitude, position.coords.longitude);    	


    	// try to find the 'place'
    	// even more imporvement with geo data using here api
    	// TODO:
    	// code...


    	// TODO: mock the data for now.  This will have to be a native app
    	// work with accelormeter data
    	// goal is to determine how or what activity they are doing.
    	function getMovement() {
    		// pick a random activity to do
    		// options: sitting, yoga, running
    		var activities = ['sitting','yoga', 'running', 'dancing'];
			var randomNumber = Math.floor(Math.random()*activities.length);

    		return activities[randomNumber];
    	}
    	var currentActivity = getMovement();
    	

    	// send to initialstate the activity
		$.get(
			"https://groker.initialstate.com/api/events?accessKey=hQ7dT9fyPrTcbgu5pzTjcROozeuuRnnc&bucketKey=9BARX6QRUQRA",
			{CurrentActivity:currentActivity},
			function(data) {
			   // alert('page content: ' + data);
			   console.log('data posted to initialstate');
			}
		);

    }
    getLocation();
}
// lets keep getting freash location data
setInterval(function() {
  store_user_location();
}, 10000);


