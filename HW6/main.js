
////////////////

$(document).ready(function () {
	$(window).scroll( function(){
		if ($(this).scrollTop() > 0){
			$('.cover').css({'opacity': 0 - ($(window).scrollTop() / 1000)})
		}
		else{
			$('.cover').css({'opacity': 1 - ($(window).scrollTop() / 1000)})
		}
//menu becomes nav
		if ($(document).scrollTop() > 800){
			$('.list').addClass('shrink');
			$('.songlist').addClass('songlist_adjust');
		}
		else {
			$('.list').removeClass('shrink');
			$('.songlist').removeClass('songlist_adjust');
		}
		//function for nav
		$('a[href^="#"]').on('click', function(event) {
    		var target = $(this.getAttribute('href'));
    		if( target.length ) {
        		event.preventDefault();
        		$('html, body').stop().animate({
            		scrollTop: target.offset().top
            	}, 1000);
   			 }
		});
	});
});

