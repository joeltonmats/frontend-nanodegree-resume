/* BANNER */
var HTMLheaderName = '<h1 class="responsive-headline">Hey, I\'m %data%.</h1>';
var HTMLheaderRole = '<h3>I\'m a <span>%dataRole%</span> <span id="welcome-message">%dataWelcome%</span></h3>';

var HTMLFacebook = '<li><a href="%urlValue%" target="_blank"><i class="fa fa-facebook"></i></a></li>';
var HTMLTwitter = '<li><a href="%urlValue%" target="_blank"><i class="fa fa-twitter"></i></a></li>';
var HTMLGooglePlus = '<li><a href="%urlValue%" target="_blank"><i class="fa fa-google-plus"></i></a></li>';
var HTMLLinkedin = '<li><a href="%urlValue%" target="_blank"><i class="fa fa-linkedin"></i></a></li>';
var HTMLInstagram = '<li><a href="%urlValue%" target="_blank"><i class="fa fa-instagram"></i></a></li>';
var HTMLSkype = '<li><a href="#" title="%urlValue%"><i class="fa fa-skype"></i></a></li>';
var HTMLgithub = '<li><a href="%urlValue%" target="_blank"><i class="fa fa-github"></i></a></li>';

/* ABOUT */
var HTMLbioPic = '<img src="%data%" class="profile-pic" alt="profile picture">';
var HTMLaboutMsg = '<p>%data%</span>';
var HTMLAddress = '<p class="address"><span>%dataName%</span><br><span>%dataDistrict%<br>%dataCity%</span><br><span>%dataPhoneNumber%</span><br><span>%dataEmail%</span></p>';

/* RESUME */

//Education
var HTMLschoolStart = '<div class="row item education-entry"><div class="twelve columns"></div></div>';
var HTMLschoolName = ' <h3><a href="%dataUrl%" target="_blank">%data%</a></h3>';
var HTMLschoolDegree = '<p class="info">%data% <span>&bull;</span> <em class="date">%dataDate%</em></p>';
var HTMLschoolDetails = '<p>%data%</p>'

//Work
var HTMLworkStart = '<div class="row item work-entry"><div class="twelve columns"></div></div>';
var HTMLworkEmployer = '<h3>%data%</h3>';
var HTMLworkTitle = '<p class="info">%data% <span>&bull;</span> <em class="date">%dataDate%</em></p>';
//var HTMLworkDates = '<div class="date-text">%data%</div>';
//var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

//Skills
var HTMLskillsStart = '<p>%data%</p>';
var HTMLskills = ' <li><span class="bar-expand %dataSkillClass%"></span><em>%dataSkill%</em></li>';


//Project
var HTMLprojectStart = '<div class="columns portfolio-item"><div class="item-wrap" ><a href="#%dataLink%" title="" id="%dataLinkId%"><img alt="" src="images/portfolio/coffee.jpg"></a></div></div>';
var HTMLprojectContent = '<div class="overlay"><div class="portfolio-item-meta"><h5>%dataTitle%</h5><p>%dataDescription%</p></div></div><div class="link-icon"><i class="icon-plus"></i></div>';
var HTMLprojectModalStart = '<div id="%dataId%" class="popup-modal mfp-hide"><img class="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt=""/></div>'
var HTMLprojectModalDescriptionBox = '<div class="description-box"><h4>Coffee Cup</h4><p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequatipsum, nec sagittis sem nibh id elit.</p><span class="categories"><i class="fa fa-tag"></i>Branding, Webdesign</span></div>';
var HTMLprojectModalLinkBox = '<div class="link-box"><a href="http://www.behance.net" target="_blank">Details</a><a class="popup-modal-dismiss">Close</a></div>';




//var HTMLprojectTitle = '<a href="#">%data%</a>';
//var HTMLprojectDates = '<div class="date-text">%data%</div>';
//var HTMLprojectDescription = '<p><br>%data%</p>';
//var HTMLprojectImage = '<img src="%data%" class="col-md-3 projectpic">';













var HTMLonlineClassesStart = '<div class="online-education-entry"></div>';
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var HTMLGraphSkills = '<div class="col-md-10"><canvas id="myChart" width="50" height="14"></canvas></div>';
var HTMLButtonOthersSkills = '<div class="col-md-2"><button class="btn btn-sm btn-primary" id="btnOtherSkill">Outras Habilidades</button></div>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function () {
  $('button').click(function () {
    var $name = $('#name');
    var iName = inName($name.text()) || function () { };
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x, y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function (loc) {
  logClicks(loc.pageX, loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function (school) {
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function (job) {
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function () {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function (place) {
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
//});
