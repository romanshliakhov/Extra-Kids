// impressile slider

$(function () {
  $('.impressile__slider').slick({
    prevArrow: '.impressile__arrow-prev',
    nextArrow: '.impressile__arrow-next',
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  });
});
