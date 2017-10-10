'use strict';

$('#bannerSlick').slick({
  autoplay:true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
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
  centerMode: false,
  focusOnSelect: true
});