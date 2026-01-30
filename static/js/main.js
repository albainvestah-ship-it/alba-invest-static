(function ($) {
"use strict";
// preloder-heare
var loader =document.getElementById("preloader");

window.addEventListener("load",function(){
 loader.style.display = "none"
});

// WOW JS
new WOW().init();


// scrool
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 25) {
    $(".header-middle").removeClass("sticky");
   }else{
    $(".header-middle").addClass("sticky");
   }
  });

// magnificPopup-active
$('.gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});

// scrollToTop
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed: 500, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '<i class="fa-solid fa-arrow-up"></i>', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// slick-center
$('.case-slide').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 3,
  arrows:false,
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      }
    }
  ]
});
// testimonial
$('.testimonial-slide').slick({
  arrows:false,
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
      slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      }
    }
  ]
});

// brand
$('.brand-slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
      arrows: false,
      slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
      arrows: false,
      slidesToShow: 2
      }
    }
  ]
});


// team-slide
$('.team-slide').slick({
  slidesToShow: 4,
  Padding: '0px',
  arrows:false,
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 385,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});



/* magnificPopup video view */
$('.play').magnificPopup({
  type: 'iframe'
});


/*toogle-up-down*/
$('.selacet-title').on('click', function () {
    $(".on-down").slideToggle({ direction: "up" }, 900);
 })
 


// Counter
var $CounterUp = $('.counter');
if($CounterUp.length > 0){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
}  

// skill-progress-bar
var $CounterUp = $('.skill-counter');
if($CounterUp.length > 0){
    $('.skill-counter').counterUp({
        delay: 10,
        time: 1200
    });
}
})(jQuery);
