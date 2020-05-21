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
