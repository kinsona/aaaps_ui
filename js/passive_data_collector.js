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
		    {Map : position.coords.latitude+','+position.coords.longitude},
		    function(data) {
		       // alert('page content: ' + data);
		       console.log('data posted to initialstate');
		    }
		);



		// var request = new XMLHttpRequest();

		// request.open('POST', 'https://groker.initialstate.com/api/events');

		// request.setRequestHeader('Content-Type', 'application/json');
		// request.setRequestHeader('X-IS-AccessKey', 'hQ7dT9fyPrTcbgu5pzTjcROozeuuRnnc');
		// request.setRequestHeader('X-IS-BucketKey', '9BARX6QRUQRA');
		// request.setRequestHeader('Accept-Version', '~0');

		// request.onreadystatechange = function () {
		//   if (this.readyState === 4) {
		//     console.log('Status:', this.status);
		//     console.log('Headers:', this.getAllResponseHeaders());
		//     console.log('Body:', this.responseText);
		//   }
		// };

		// var body = [
		//   {
		//     'key': 'temperature',
		//     'value': '1',
		//     'epoch': 1419876021.778477
		//   }
		// ];

		// request.send(JSON.stringify(body));






    	// code...


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

			  // send location to server
			  // location
			  // code...

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
			console.log(address);
    	}
    	// DEV MODE: temp comment, uncomment soon
    	// getAddress(position.coords.latitude, position.coords.longitude);    	


    	// object 'position'
    	// even more imporvement with geo data using here api
    	// TODO:
    	// code...

    }
    getLocation();
}
// lets keep getting freash location data
setInterval(function() {
  store_user_location();
}, 10000);


// accelerometer
// code...

console.log('hi from passive data collector');



//////////

// var request = new XMLHttpRequest();

// request.open('POST', 'https://groker.initialstate.com/api/events');

// request.setRequestHeader('Content-Type', 'application/json');
// request.setRequestHeader('X-IS-AccessKey', 'hQ7dT9fyPrTcbgu5pzTjcROozeuuRnnc');
// request.setRequestHeader('X-IS-BucketKey', '9BARX6QRUQRA');
// request.setRequestHeader('Accept-Version', '~0');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// var body = [
//   {
//     'key': 'temperature',
//     'value': '1',
//     'epoch': 1419876021.778477
//   }
// ];

// request.send(JSON.stringify(body));