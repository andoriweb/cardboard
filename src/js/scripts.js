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

$('.feetback-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button class="feetback-arrow feetback-prev production-arrow__mob"></button>',
  nextArrow: '<button class="feetback-arrow feetback-next production-arrow__mob"></button>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
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

/* modal */
var popup = document.querySelector ("#popup");
var modal = document.querySelector ("#modal");
var close = document.querySelector ("#close");

popup.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});