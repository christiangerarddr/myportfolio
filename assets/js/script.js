$(document).ready(function() {
	function position() {
		$('.section').height($(window).height())
		$("#menu").height($(window).height());
		$("#links").css("margin-top", $(window).height() / 3.5);
	}

	$(".showmenu").click(function() {
		if ($("#menu").hasClass("onscreen")) {
			$("#menu").removeClass("onscreen");
			$(".showmenu").removeClass("closemenu");
			$("#menu-footer").css("bottom", -50);
	    $("#formore").fadeIn(600);
		}
		else {
			$("#menu").addClass("onscreen");
			$(".showmenu").addClass("closemenu");
			$("#menu-footer").css("bottom", 0);
	    $("#formore").fadeOut(200);
		}
	});

	$(".link").click(function() {
		$(".active").removeClass("active");
	  $(this).addClass("active");
	});


	window.addEventListener("load", position, false);
	window.addEventListener("resize", position, false);

});