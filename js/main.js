$(document).ready(function() {
	
	$('.nav-select-item').bind('click', function(){
		$($(this).parent().find('.nav-select-item')).removeClass("active");
		$(this).addClass("active");
		
	});

	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 500
	});

	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset(150).top
		}, 1000);
		e.preventDefault();
	});
	return false;
});

$(window).scroll(function(){
	var height = $('.banner').outerHeight() + $('.nav-round').outerHeight() + $('.advantages').outerHeight() + $('.services h2').outerHeight() - $('.nav-middle').outerHeight();
	if ( $(window).scrollTop() > height ){
		$(".nav-middle-wrap").addClass("stickly");
	} else {
		$(".nav-middle-wrap").removeClass("stickly");
	}
});