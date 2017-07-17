$(function(){
	var container = $(".header__shuffletitle")

	container.shuffleLetters();
	setTimeout(function(){
		// Shuffle the container with custom text
		container.shuffleLetters({
			"text": "Neiza Nuñez \n UI Developer"
		});
	},500);
});

var slide = $('.aboutme__slide');

slide.owlCarousel({
 loop:true,
 margin: 7,
 dots: false,
 nav: true,
 navText: ['<img src="assets/img/flecha1.png">','<img src="assets/img/flecha2.png">'],
 responsive:{
		 0:{
				 items:4
		 },
		 600:{
				 items:4
		 },
		 1000:{
				 items:4
		 }
 }
})
