'use strict';


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

var markers = [];
var infoWindows = [];

//Inicjowanie mamy Google

window.initMap = function() {
	
	var uluru = {lat: 49.821674, lng: 19.050735};
	
	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 9, 
			center: uluru
		});
//Oznaczenie markerów z użyciem pętli

	for (var i = 0; i < slidesData.length; i++) { 
		
		var marker = new google.maps.Marker({
			position: (slidesData[i].coords),
			map: map	
		});
			
		markers.push (slidesData[i].coords);
		infoWindows.push (slidesData[i].place);

//Podłączenie informacji o markerach na mapie oraz połączenie markerów ze slajdami

		var placeInfo = slidesData[i].place;
				
		var infowindow = new google.maps.InfoWindow();

		google.maps.event.addListener(marker,'click', (function(marker,placeInfo,infowindow,i){ 
			return function() {
				infowindow.setContent(placeInfo);
				infowindow.open(map,marker);
				flkty.select(i);
			};

		})(marker,placeInfo,infowindow,i)); 
	
	};
		 
//Centrowanie mapy w zależności od wybranego slajdu

	flkty.on( 'change', function( index ) {
		
		if (index == 0) {
			map.panTo(markers[0]);
		};
		if (index == 1) {
			map.panTo(markers[1]);
		};
		if (index == 2) {
			map.panTo(markers[2]);
		};
		if (index == 3) {
			map.panTo(markers[3]);
		};
		if (index == 4) {
			map.panTo(markers[4]);
		};
	});

}



