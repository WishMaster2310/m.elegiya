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

	$('.cat-filter__unit-title').on('click', function() {
		var parent = $(this).closest('.cat-filter__unit');
		var content = $(parent).find('.cat-filter__unit-content');
		$(content).slideToggle(300);
		$(parent).toggleClass('cat-filter__unit--active')
	});

	$('.cat-filter__toggler').on('click', function() {
		var parent = $(this).closest('.cat-filter');
		var content = $(parent).find('.cat-filter__content');
		$(content).slideToggle(500);
		$(parent).toggleClass('cat-filter--active')
	});

	$('.j-newsopen').on('click', function(e) {
		e.preventDefault();
		var parent = $(this).closest('.news');
		var hiddenText = $(parent).find('.news__content')
		$(this).hide();
		$(hiddenText).slideDown();
	});

	$('.j-calbackform').on('click', function(e) {
		e.preventDefault();
		$('#calbackForm').arcticmodal({})
	});

});