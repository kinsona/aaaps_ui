// HIDE ALL NOT NEEDED NAVBAR ELEMENTS


// TODO:
// navbar by default is left open
// change default to start closed
// code...

// get rid of extra second nav bar
$('.nav.navbar-top-links.navbar-right').hide();


// TODO: rewrite with a foreach loop
// TODO: re-phrase nav links user friendly
// reduce to only required enu items/features
$('#side-menu > .sidebar-search').hide();
$('#side-menu > li:nth-child(-n+8)').hide(); // kill dashboard plus everything else

// add all feature links
// $('#side-menu').append('<li><a href="congratulations.html"><i class="fa fa-female" aria-hidden="true"></i>Congratulations!</a></li>');
$('#side-menu').append('<li><a href="guider.html"><i class="fa fa-dashboard fa-fw"></i>Guide</a></li>'); // guider
$('#side-menu').append('<li><a href="product_recommender.html"><i class="fa fa-dashboard fa-fw"></i>Discover Products</a></li>'); // product recommender
$('#side-menu').append('<li><a href="calendar.html"><i class="fa fa-dashboard fa-fw"></i>Calendar</a></li>'); // calendar
$('#side-menu').append('<li><a href="purchaser.html"><i class="fa fa-dashboard fa-fw"></i>Samples</a></li>'); // purchaser


// change the name of the project logo
var logoTitle = "Monarch";

// make root page 'guide' and change logo
// .navbar-brand
$('.navbar-brand').html('<a class="navbar-brand" href="index.html">' + logoTitle + '</a>'); // brand
// $('.navbar-brand').html('<a class="navbar-brand" href="index.html"><img src="../logo_1.png" ></a>');
// code...




// HIDE ALL NOT NEEDED NAVBAR ELEMENTS

// get rid of extra second nav bar
$('.nav.navbar-top-links.navbar-right').hide();
// TODO: rewrite with a foreach loop
// TODO: re-phrase nav links user friendly
// reduce to only required enu items/features
$('#side-menu > .sidebar-search').hide();
$('#side-menu > li:nth-child(-n+8)').hide(); // kill dashboard plus everything else




