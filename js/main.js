/*---------------------------------------------
Template name:  Prizon
Version:        1.0
Author:         TechyDevs
Author Email:   contact@techydevs.com

[Table of Content]

01: Preloader
02: side-widget-menu
02: Back to Top Button and Navbar Scrolling control
03: header-category
04: Mobile Menu Open Control
05: Mobile Menu Close Control
06: homepage-slide1
07: course-carousel
08: view-more-carousel
09: Counter up
10: MagnificPopup
10: testimonial-wrap
11: Client logo
12: blog-post-carousel
13: Bootstrap Tooltip
14: FAQs
15: Isotope
16: lightbox
17: Google map
----------------------------------------------*/

(function ($) {
    "use strict"; //use of strict

    /* ======= Preloader ======= */
    $(window).on('load', function(){
        $('#loading').delay('500').fadeOut(2000);
    });


    $(document).on('ready', function () {

        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon', function () {
            $(this).closest('.sidenav__item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
            $(this).closest('.sidenav__item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
            return false;
        });

        /* ======= Back to Top Button and Navbar Scrolling control ======= */
        $(document).on('click','#scroll-top', function () {
            $('html, body').animate({scrollTop:0},1000);
        });

        var scrollButton = $('#scroll-top');

        $(window).on('scroll', function () {
            //header fixed animation and control
            if($(window).scrollTop() > 0) {
                $('.header-menu-area').addClass('header-fixed');
            }else{
                $('.header-menu-area').removeClass('header-fixed');
            }

            //back to top button control
            if($(this).scrollTop()>= 300){
                scrollButton.show();
            }else{
                scrollButton.hide();
            }
        });


        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.logo-right-button .side-menu-open', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container").removeClass('active');
        });

        /*=========== Counter up ============*/
        $('.counter').counterUp({
            delay: 50,
            time: 2000
        });

        /*==== testimonial-carousel =====*/
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplay: false,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"]
        });

        /*==== testimonial-carousel-2 =====*/
        $('.testimonial-carousel-2').owlCarousel({
            loop: true,
            items: 3,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplay: false,
            margin: 30,
            responsive:{
                320:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3
                }
            }
        });

        /*==== testimonial-carousel-3 =====*/
        $('.testimonial-carousel-3').owlCarousel({
            loop: true,
            items: 5,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: false,
            margin: 30,
            autoHeight: true,
            responsive:{
                320:{
                    items:1,
                },
                767:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1025:{
                    items:4,
                },
                1440:{
                    items:5,
                }
            }
        });

        /*==== testimonial-carousel-4 =====*/
        $('.testimonial-carousel-4').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoplay: false,
            thumbs: true,
            animateIn: 'flipInX'
        });

        /*==== content-carousel =====*/
        $('.content-carousel').owlCarousel({
            loop: true,
            items: 3,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            autoHeight: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 991 up
                991: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 3
                }
            }
        });

        /*==== content-carousel 2 =====*/
        $('.content-carousel2').owlCarousel({
            loop: true,
            items: 3,
            nav: false,
            dots: true,
            smartSpeed: 900,
            center: true,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 991 up
                991: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 3
                }
            }
        });

        /*==== content-carousel3 =====*/
        $('.content-carousel3').owlCarousel({
            loop: true,
            items: 3,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            margin: 30,
            autoHeight: true,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 991 up
                991: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 3
                }
            }
        });

        /*==== content-carousel4 =====*/
        $('.content-carousel4').owlCarousel({
            loop: true,
            items: 2,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                }
            }
        });

        /*==== gallery-carousel =====*/
        $('.gallery-carousel').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: true,
            smartSpeed: 700,
            autoplay: true,
            dotsData: true,
            navText: ["<span class=\"la la-angle-left\"></span>", "<span class=\"la la-angle-right\"></span>"]
        });

        /*==== video-gallery-carousel =====*/
        $('.video-gallery-carousel').owlCarousel({
            loop: true,
            items: 2,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 700,
            autoplay: true,
            navText: ["<span class=\"la la-angle-left\"></span>", "<span class=\"la la-angle-right\"></span>"],
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                }
            }
        });

        /*==== video-gallery-carousel2 =====*/
        $('.video-gallery-carousel2').owlCarousel({
            loop: true,
            items: 1,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 700,
            autoplay: true,
            navText: ["<span class=\"la la-angle-left\"></span>", "<span class=\"la la-angle-right\"></span>"]
        });

        /*==== team-carousel =====*/
        $('.team-carousel').owlCarousel({
            loop: true,
            items: 3,
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            margin: 30,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 991 up
                991: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 3
                }
            }
        });

        /*==== portfolio-slider =====*/
        $('.portfolio-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true
        });

        /*==== Client logo =====*/
        $('.client-logo').owlCarousel({
            loop: true,
            items: 5,
            nav: false,
            dots: false,
            smartSpeed: 700,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 425 up
                425 : {
                    items: 2
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 767 up
                767 : {
                    items: 3
                },
                // breakpoint from 992 up
                992 : {
                    items: 5
                }
            }
        });

        /*==== homepage-slide1 =====*/
        $('.homepage-slide1').owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: true,
            smartSpeed: 1000,
            autoplay: 5000,
            animateOut: 'zoomOutRight',
            animateIn: 'fadeIn',
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
        });

        /*==== homepage-slide2 =====*/
        $('.homepage-slide2').owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: true,
            smartSpeed: 5000,
            autoplay: 5000,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            navText: ["<i class='la la-caret-left'></i>", "<i class='la la-caret-right'></i>"],
        });

        /*==== single-portfolio-carousel =====*/
        $('.single-portfolio-carousel').owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: true,
            smartSpeed: 900,
            autoplay: true,
            navText: ["<i class='la la-caret-left'></i>", "<i class='la la-caret-right'></i>"],
        });

        /*==== discount-carousel =====*/
        $('.discount-carousel').owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: true,
            smartSpeed: 900,
            autoplay: true,
            navText: ["<i class='la la-caret-left'></i>", "<i class='la la-caret-right'></i>"],
        });

        /*====  accordion  =====*/
        $(document).on('click', '.accordion__title', function () {
            $(this).closest('.accordion-panel').siblings().removeClass('active').find('.accordion__content').slideUp(200);
            $(this).closest('.accordion-panel').toggleClass('active').find('.accordion__content').slideToggle(200);
            return false;
        });

        /*==== fancybox =====*/
        $('[data-fancybox="gallery"]').fancybox({
            // Options will go here
            buttons: [
                "zoom",
                "share",
                "slideShow",
                "fullScreen",
                "download",
                "thumbs",
                "close"
            ],
        });

        $('[data-fancybox="video"]').fancybox({
            buttons: ["share", "fullScreen", "close"]
        });

        $.fancybox.defaults.animationEffect = "zoom";



        /*=========== Google map ============*/
        if($("#map").length) {
            initMap('map', 40.717499, -74.044113);
        }

        /*=========== tooltip ============*/
        $('[data-toggle="tooltip"]').tooltip();

        $('[data-toggle="popover"]').popover();

        /*=========== circlechart ============*/
        $('.circlechart').circlechart();

        /*==== Isotope =====*/
        // bind filter button click
        $(document).on( 'click', '.portfolio-filter li', function() {
            var filterData = $( this ).attr('data-filter');

            // use filterFn if matches value
            $('.masonry-list').isotope({
                filter: filterData,
            });

            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');
        });

        // portfolio list
        $('.masonry-list').isotope({
            itemSelector: '.single-portfolio-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.single-portfolio-item',
                horizontalOrder: true
            }
        });

        /*==== Daterangepicker =====*/
        $('input[name="daterange"]').daterangepicker({
            opens: 'left',
            singleDatePicker: true
        });

        /*==== contact-tilt =====*/
        $('.contact-tilt').tilt({
            scale: 1.1
        });

        /*==== blog-masonry =====*/
        $(".blog-masonry").masonry({});

        /*==== Quantity number increment control =====*/
        $(document).on('click', '.input-number-increment', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val + 1);

        });

        /*==== Quantity number decrement control =====*/
        $(document).on('click', '.input-number-decrement', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val - 1);
        });




    });
})(jQuery);