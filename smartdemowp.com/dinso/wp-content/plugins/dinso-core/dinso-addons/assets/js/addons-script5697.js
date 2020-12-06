(function ($) {
    "use strict";
    // Lazyload Images
    var mainSlider = function ($scope, $) {
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                loop: true,
                margin: 0,
                nav: false,
                smartSpeed: 500,
                autoHeight: true,
                autoplay: true,
                autoplayTimeout: 5000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    },
                }
            });
        }
    };
    // Lazyload Images
    var mainSliderTwo = function ($scope, $) {
        if ($('.banner-carousel-two').length) {
            $('.banner-carousel-two').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                loop: true,
                margin: 0,
                nav: false,
                smartSpeed: 500,
                autoHeight: true,
                autoplay: true,
                autoplayTimeout: 5000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    },
                }
            });
        }
    };

    var gallery = function ($scope, $) {
        if ($('.gallery-carousel').length) {
            $('.gallery-carousel').owlCarousel({
                loop: true,
                margin: 1,
                nav: true,
                smartSpeed: 500,
                autoplay: true,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1280: {
                        items: 5
                    }
                }
            });
        }
    };

    var floor = function ($scope, $) {
        if ($('.floor-carousel').length) {
            $('.floor-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                smartSpeed: 500,
                autoplay: true,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    }
                }
            });
        }
    };

    var dinsoGalleryTwo = function ($scope, $) {
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                loop: true,
                margin: 30,
                nav: true,
                singleItem: true,
                smartSpeed: 700,
                autoHeight: false,
                autoplay: true,
                autoplayTimeout: 10000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    },
                }
            });
        }
    };
    
    var apartmentsDetails = function ($scope, $) {
        if ($('.single-item-carousel2').length) {
            $('.single-item-carousel2').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                loop: true,
                margin: 30,
                nav: true,
                singleItem: true,
                smartSpeed: 700,
                autoHeight: false,
                autoplay: true,
                autoplayTimeout: 10000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    },
                }
            });
        }
    };

   

    var property_tab_box = function ($scope, $) {
        if ($('.tabs-box').length) {
            $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));
    
                if ($(target).is(':visible')) {
                    return false;
                } else {
                    target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                    $(this).addClass('active-btn');
                    target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                    target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
                    $(target).fadeIn(300);
                    $(target).addClass('active-tab animated fadeIn');
                }
            });
        }
    };

    var testimonial_two_carosel = function ($scope, $) {
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
    };
    

    var dinso_testimonial_carosel = function ($scope, $) {
        
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
    
    };

    
    var galleryTab = function ($scope, $) {
        if ($('.filter-list').length) {
            $('.filter-list').mixItUp({});
        }
    };

    var roombxSlider = function ($scope, $) {
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
    };

    

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso-main-slider.default', mainSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_footer_gallery.default', gallery);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_floor.default', floor);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_gallery_two.default', dinsoGalleryTwo);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso-main-slider-2.default', mainSliderTwo);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_galellry_tab.default', galleryTab);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_apartment_details.default', apartmentsDetails);

        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_room_dimension_slide.default', roombxSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_testimonial.default', dinso_testimonial_carosel);
        elementorFrontend.hooks.addAction('frontend/element_ready/property_details.default', property_tab_box);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_blogs.default', testimonial_two_carosel);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_testimonial.default', dinsoGalleryTwo);
        elementorFrontend.hooks.addAction('frontend/element_ready/dinso_testimonial.default', testimonial_two_carosel);

       elementorFrontend.hooks.addAction('frontend/element_ready/dinso_sponsors_brand.default', dinso_testimonial_carosel);

       
        
        


       
    });
})(jQuery);