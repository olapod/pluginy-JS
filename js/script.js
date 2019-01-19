'use strict';


var templateOneSlide = document.getElementById('template-one-slide').innerHTML;

 Mustache.parse(templateOneSlide);
	
	// Teraz stworzymy zmienną, w której chcemy mieć kod HTML wszystkich produktów. 
	
	var listSlides = '';
	
	/* Czas napisać pętlę, która dla każdego elementu z listy:
	1. wygeneruje kod HTML dla danego produktu, oraz
	2. doda ten wygenrowany kod HTML do zmiennej listItems. 
	
	Uwaga - zmienna slidesData, której używamy poniżej, została zdefiniowana w kodzie HTML!
	*/
	
	for(var i = 0; i < slidesData.length; i++){
		
    listSlides += Mustache.render(templateOneSlide, slidesData[i]);
    
	}
	
	// Po wykonaniu pętli, zmienna listSlides zawiera już kod HTML dla wszystkich produktów. Teraz wykorzystamy szablon templateList, aby wstawić produkty do wrappera listy. 
	
	var fullSlidesList = Mustache.render(templateSlideList, {slides: listSlides});
	
	// I w pełni wyrenderowaną listę wyświetlimy na stronie: 
	
	results.insertAdjacentHTML('beforeend', fullSlidesList);

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


	
