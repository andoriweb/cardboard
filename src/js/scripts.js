$(document).ready(function(){
  $('.main-slider').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick' 
      },
    ]
  });
});

$('.production-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.production-slider-small',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="production-arrow production-prev production-arrow__mob"></button>',
        nextArrow: '<button class="production-arrow production-next production-arrow__mob"></button>'
      }
    }
  ]
});
$('.production-slider-small').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.production-slider',
  dots: false,
  arrows: true,
  prevArrow: '<button type="button" class="production-arrow production-prev"></button>',
  nextArrow: '<button type="button" class="production-arrow production-next"></button>',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: 'unslick'
    }
  ]
});