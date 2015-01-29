$(document).ready(function() {
	
	$('.nav-select-item').bind('click', function(){
		$(this).parent().find('.nav-select-item').removeClass("active");
		$(this).addClass("active");		
	});

	for (var i = 1; i < 4; i++) {
		addBind(i);
	}
	
	function addBind(i){
		var j = i + 1;		
		$('.nav-select-item:nth-child('+i+')').bind('click', function(){
			$(this).parent().parent().find('.item-for-select').removeClass("selected");
			$(this).parent().parent().find('.item-for-select:nth-child('+ j +')').addClass("selected");
		});
	}
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 500
	});

	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 110
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