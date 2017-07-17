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

var autoSwitch = new TimelineMax({repeat: -1})
  .add(jump, 1.0);
function creativeHover(event) {
    if (event.type === 'mouseenter') {
        autoSwitch.pause();
        logProgress();
    } else {
        autoSwitch.play(0);
        logProgress();
    }
}

function jump() {
  new TimelineMax()
    .to('#btn', 0.3, {y: -15, ease: Power2.easeOut})
    .to('#btn', 0.6, {y: 0, ease: Bounce.easeOut})
}

function logProgress(){
  console.log('progress: ' + Math.round(autoSwitch.progress() * 100) / 100);
}



$('#btn').hover(creativeHover);
