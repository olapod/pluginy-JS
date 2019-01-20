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


	
