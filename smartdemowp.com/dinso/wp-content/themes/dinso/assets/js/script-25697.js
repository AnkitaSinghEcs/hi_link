(function($) {
	
	"use strict";



	if ($('.datepicker').length) {
        $('.datepicker').datepicker();
    };

    if ($('.timepicker').length) {
        $('input[name="time"]').ptTimeSelect();	
    };

	// Single Carousel
	

	// Two Item Carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				992:{
					items:2
				}
			}
		});    		
	}

	// Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				992:{
					items:3
				}
			}
		});    		
	}

	//Sortable Masonary with Filters
	function sortableMasonry() {
		if ($('.sortable-masonry').length) {
			var winDow = $(window);
			// Needed variables
			var $container = $('.sortable-masonry .items-container');
			var $filter = $('.filter-btns');
			$container.isotope({
				filter: '*',
				masonry: {
					columnWidth : 0
				 },
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});
			// Isotope Filter 
			$filter.find('li').on('click', function() {
				var selector = $(this).attr('data-filter');
				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 500,
							easing: 'linear',
							queue: false
						}
					});
				} catch (err) {}
				return false;
			});
			winDow.on('resize', function() {
				var selector = $filter.find('li.active').attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
				$container.isotope()
			});
			var filterItemA = $('.filter-btns li');
			filterItemA.on('click', function() {
				var $this = $(this);
				if (!$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
			var activeFilterItem = $('.sortable-masonry .filter-tabs').find('li');
			activeFilterItem.each(function() {
				var filterElement = $(this).data('filter');
				var count = filterElement.length;
				$(this).children("span").append('<span class="count">' + count + '</span>');
			});
		}
	}
	sortableMasonry();
	
	if ($('.room-dimensions .bxslider').length) {
		$('.room-dimensions .bxslider').bxSlider({
			nextSelector: '.room-dimensions #slider-next',
			prevSelector: '.room-dimensions #slider-prev',
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>',
			mode: 'fade',
			auto: 'true',
			speed: '700',
			pagerCustom: '.room-dimensions .slider-pager .thumb-box'
		});
	};

	

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var target = $(this).parents('.accordion');

			if($(this).hasClass('active')!==true){
				$('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')){
				//$(this).removeClass('active');
				return false;
				//$(this).next('.accord-content').slideUp(300);
			}else{
				$(this).addClass('active');
				$('.accordion').removeClass('active-block');
				$('.accordion .acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	/* ==========================================================================
	When document is Scrollig, do
	========================================================================== */
	
	$(window).on('resize', function() {
		sortableMasonry();
	});
	
	/* ==========================================================================
	When document is loading, do
	========================================================================== */
	
	$(window).on('load', function() {
		sortableMasonry();
	});	


})(window.jQuery);