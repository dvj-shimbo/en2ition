$(window).on("load", function() {
	"use strict";

//	console.log("scripts.js is loaded");

	$("header").click(function(e) {

		if ($(this).css("position") === "fixed") {

			var posX = e.pageX;
			var posY = e.pageY - $(window).scrollTop() + $(this).scrollTop();

			var w = $(this).width() * 0.94;

			var h = Math.round(parseInt($(this).css("padding-top")) * 1.3) - 1;

			if (posX  > w - 24 && posX < w && posY > h && posY < h + 24) {
				if ($("body").hasClass("menu-active")) {
					$(this).scrollTop(0);
					$("body").removeClass("menu-active");
				} else {
					$("body").addClass("menu-active");
				}
			}

		}
	});


	var headerSubMenuHide = function() {
		$("header ul li ul.active").removeClass("active");
	};

	$("header ul li ul").mouseover(function() {
		$("body").off("click", headerSubMenuHide);
	});

	$("header ul li ul").mouseout(function() {
		$("body").on("click", headerSubMenuHide);
	});

	$("header ul li ul:not(.active)").click(function() {
		$(this).addClass("active");
	});

//==========================================================================================
	
	function redraw() {

//==========================================================================================
		$(".announcement").each(function() {
			var panel = $(this).find(".panel");
			if (panel.length) {
				var img = panel.prev();
				if (img.css("max-width") === "768px") {

					var paddingPottom = panel.outerHeight() / 2;

//					if (paddingPottom > img.height() / 2) {
//						paddingPottom += paddingPottom - img.height() / 2;
//					}

					if (paddingPottom > img.height() / 5) {
						paddingPottom += paddingPottom - img.height() / 5;
					}

//					console.log (paddingPottom + "   " + img.height() / 5);

					
//					console.log (panel.height() + "   " + panel.outerHeight());

					$(this).css("padding-bottom", paddingPottom);

				} else {
					$(this).css("padding-bottom", 0);
				}
			}
		});
//==========================================================================================
	}

//==========================================================================================	

	$(window).resize(function(){
		redraw();
	});
	redraw();

	

	






});