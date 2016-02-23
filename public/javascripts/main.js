$(document).ready(function() {

	$('.j-slider').owlCarousel({
		 items:1,
		 nav: true,
		 navText: ['', ''],
		 navRewind: false
	});

	$('.header__burger').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('header__burger--active')
		$('.menu-container').toggleClass('menu-container--active');
	})

});