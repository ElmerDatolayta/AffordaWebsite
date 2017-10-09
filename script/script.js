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