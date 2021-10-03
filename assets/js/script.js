(function ($) {

    'use strict';

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});
	
	/*------------------------------------
        Data-Background
	--------------------------------------*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	
	$("[data-bg-color]").each(function () {
		$(this).css("background", $(this).attr("data-bg-color"))
	});


})(jQuery);
