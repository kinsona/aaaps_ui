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
// $('#side-menu').append('<li><a href="guider.html"><i class="fa fa-dashboard fa-fw"></i>Guider</a></li>'); // guider

// $('#side-menu').append('<li><a href="product_recommender.html"><i class="fa fa-dashboard fa-fw"></i>Product Recommender</a></li>'); // product recommender

// TODO: calender, purchaser
// $('#side-menu').append('<li><a href="index.html"><i class="fa fa-dashboard fa-fw"></i>Calender</a></li>'); // calender
// $('#side-menu').append('<li><a href="index.html"><i class="fa fa-dashboard fa-fw"></i>Purchaser</a></li>'); // purchaser
// code...
