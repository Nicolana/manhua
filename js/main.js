$(function(){
	// var screenWidth = window.screen.width;
	$(".bxslider").bxSlider({
		mode: 'horizontal',
		// captions: true,
		// slideWidth: screenWidth,
		infiniteLoop: true,
		controls: true,
		shrinkItems: true,
		slideWidth: 200,
		slideMargin: 20,
		moveSlides: 2,
		minSlides: 2,
		maxSlides: 5,
		pager: false,
	})
});

var certifySwiper = new Swiper('#certify .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,autoplay:true,
	loopedSlides: 5,
	autoplay: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		//clickable :true,
	},
	on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 260 + 'px';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}

})

$(".chat-like").on("click", function(){
	var _this = $(this);
	_this.find('i').css('color', '#D6563F');
	var number = _this.find(".chat-number").text();
	var addOne = parseInt(number.match(/\d/g).join("")) + 1;
	_this.find(".chat-number").text('(' + addOne + ')');
})

// $(".chat-like").on("click", function(){
// 	var _this = $(this);
// 	_this.find('i').css('color', '#D6563F');
// 	var number = _this.find(".chat-number").text();
// 	var addOne = parseInt(number.match(/\d/g).join("")) + 1;
// 	_this.find(".chat-number").text('(' + addOne + ')');
// })
