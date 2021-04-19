(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.main-menu').meanmenu();
    });
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
    // END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.main-menu-area').addClass('menu-shrink animated slideInDown');
			} else {
				$('.main-menu-area').removeClass('menu-shrink animated slideInUp');
			}
		});	
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});	
		
		$('.navbar-nav>li>a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
		});
		// END MENU JS CODE
		
		
		// HOME SLIDER JS CODE
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause: true,
			dots: true,
			autoplay:true,
			loop:true,
			slideSpeed: 300,
			paginationSpeed: 400,
			autoPlay: true,
			mouseDrag: true,
			singleItem: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			nav:true,
			pullDrag:true,
			navText: ["<i class=icofont-thin-left></i>", "<i class=icofont-thin-right></i>"],
		});
		
		$(".home-slider").on("translate.owl.carousel", function(){
			$(".benner-text h1").removeClass("animated fadeInUp").css("opacity", "0");
			$(".benner-text p").removeClass("animated fadeInDown").css("opacity", "0");
		});
		$(".home-slider").on("translated.owl.carousel", function(){
			$(".benner-text h1").addClass("animated fadeInUp").css("opacity", "1");
			$(".benner-text p").addClass("animated fadeInDown").css("opacity", "1");
		});
		// END HOME SLIDER JS CODE

		new WOW().init();
		
		// TESTIMONIAL SLIDER JS CODE
    $('.event-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause: true,
			dots:true ,
			autoplay:true,
			loop:true,
			nav:false,
		});

		// POPPUP GALLERY JS CODE
		$('.popup-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		}); 
		// END POPPUP GALLERY JS CODE
		
		//CLIENTS SLIDER JS CODE
		$('.clients-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots:true,
			autoplay:true,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				768:{
					items:4				},
				1000:{
					items:5
				}
			}
		})

		// TESTIMONIAL SLIDER JS CODE
		$('.about-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause: true,
			dots:false ,
			autoplay:true,
			loop:true,
			nav:true,
			navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
		})

		//BLOG SLIDERS JS CODE
		$('.featured-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots:true,
			autoplay:true,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:3
				},
				1000:{
					items:5
				}
			}
		})

		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="icofont-scroll-bubble-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});
	
    
}(jQuery));