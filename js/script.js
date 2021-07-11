// Добавляем класс active для burger-menu
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// Слайдер partners__slider
$(document).ready(function() {
	$('.partners__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		speed: 1000,
		easing: 'ease',
		autoplay: true,
		infinity: true
	});
});