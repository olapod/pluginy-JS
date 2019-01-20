'use strict';

//AIzaSyD9mCYzSUj8KNc4qSX6l_ulinviEwPnLnc

//łączę zmienną z szablonem oraz zaznaczam miejsce, gdzie szablon ma zostać wklejony

var templateOneSlide = document.getElementById('template-one-slide').innerHTML;
var carouselPlace = document.getElementById('carousel');

 Mustache.parse(templateOneSlide);
	
// tworzę zmienną, w której będę przechowywać dane wszystkich slajdów 
	
var listSlides = '';
//Tworzę pętle łądującą dane wszystkich slajdów do listy powstałej z szablonu
	
for(var i = 0; i < slidesData.length; i++){
	
listSlides += Mustache.render(templateOneSlide, slidesData[i]);
    
	}
		
// I w pełni wyrenderowaną listę z danymi slajdów wyświetam na stronie: 
	
carouselPlace.insertAdjacentHTML('beforeend', listSlides);

//Konfiguruję plugin karuzeli

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true,
});


//przycisk restart
var restartButton = document.querySelector('.button')
restartButton.addEventListener( 'click', function( event ) {
  
  flkty.select(0);
})

//scroll

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

//Mapa google
var infos = document.getElementById('infos');

window.initMap = function() {
	// The location of Uluru
	var uluru = {lat: 49.821674, lng: 19.050735};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 9, 
			center: uluru
		});
	var markers = [];
	var infoWindows = [];
	
	for (var i = 0; i < slidesData.length; i++) {  
	var marker = new google.maps.Marker({
		position: (slidesData[i].coords),
		map: map	
		});
	
	markers.push (slidesData[i].coords);
	infoWindows.push (slidesData[i].place);
	
	

	marker.addListener('click', function(){
		flkty.select(i);;
		});	
	}
// google.maps.event.addListener(markers[key], 'click', function(innerKey) {
// 		return function() {
// 			infoWindows[innerKey].open(map, markers[innerKey]);
// 		}
// 	  }(key));	
}


flkty.on( 'change', function( index ) {
	
	
});