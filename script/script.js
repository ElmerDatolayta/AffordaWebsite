'use strict';

$('#bannerSlick').slick({
  autoplay:true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('#bannerCakeSlick').slick({
  autoplay:true,
  autoplaySpeed: 5000,  
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false
});



$('#productSlick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

$('#productSlick2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  autoplay: true,
  centerMode: false,
  focusOnSelect: true
});

$('.single-item').slick();


$('a.scroll-nav').click(function(e){
  // prevent default action
  e.preventDefault();
  
  // get id of target div (placed in href attribute of anchor element)
  // and pass it to the scrollToElement function
      // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
  scrollToElement( $(this).attr('href'), 1000 );
  });

  var scrollToElement = function(el, ms){
      var speed = (ms) ? ms : 600;
      $('html,body').animate({
          scrollTop: $(el).offset().top
      }, speed);
  };
