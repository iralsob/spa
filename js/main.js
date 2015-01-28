$(document).ready(function() {
	
	$('.nav-select-item').bind('click', function(){
		$('.nav-select-item').removeClass("active");
		$(this).addClass("active");
	});

	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
	return false;
});

$(window).scroll(function(){
	var height = $('.banner').outerHeight() + $('.nav-round').outerHeight() + $('.advantages').outerHeight() + $('.services h2').outerHeight() - $('.nav-middle').outerHeight();
	if ( $(window).scrollTop() > height ){
		$(".nav-middle").addClass("stickly");
	} else {
		$(".nav-middle").removeClass("stickly");
	}
});