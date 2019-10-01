/***/

/*** First Slider*/

$(".slider-one").not(".slick-intialized")
	.slick({
		autoplay:true,
		autoplaySpeed:3000,
		dots:true,

		prevArrow:".site-slider .slider-btn .prev",
		nextArrow:".site-slider .slider-btn .next",
});


/*** Second Slider*/

$(".slider-tow")
	.not(".slick-intialized")
 	.slick({
		prevArrow:".site-slider-tow .prev",
		nextArrow:".site-slider-tow .next",
		slidesToShow:5,
		slidesToScroll:1,
		autoplaySpeed:3000,

});