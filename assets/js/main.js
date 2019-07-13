$(document).ready(function(){

 
    // magnific popep for portfolio 
  $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    // Slick Slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></div>',
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></div>',
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    
    
    
    // Magnific Popup
    $(".obokash-video").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    
   

    // Scroll Smooth
    $(function(){
       var scroll = new SmoothScroll('a[href*="#ss-"]'); 
    });

    //Background Parallax
    $('.hero-area').parallax("50%", -0.4);
    $('.video-section-bg').parallax("50%", -0.4);
    $('.team-section').parallax("50%", -0.4);

  });


    //For Add Class
    $(function() {
        //caches a jQuery object containing the header element
        var header = $(".header-area");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 350) {
                header.addClass("fixed-menu-bg");
            } else {
                header.removeClass("fixed-menu-bg");
            }
        });
    });



    $('button.navbar-toggler').click( function(){
        
        if ( $('header').hasClass('header-area-bg') ) {
            $('header').removeClass('header-area-bg');
        } else {
            $('header').addClass('header-area-bg');
        }
    });

    // Load More: Load 6 More Items
    $(function () {
        $("div.col-md-2").slice(0, 12).show();
        $("#load-more-products").on('click', function (e) {
            e.preventDefault();
            $("div.col-md-2:hidden").slice(0, 6).slideDown();
            if ($("div.col-md-2:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
        });
    });