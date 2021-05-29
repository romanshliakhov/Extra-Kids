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


// cursdescr__sliders
$(function () {
  $('.cursdescr__slider-main').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.cursdescr__slider-preview',
    swipe: false,
  });

  $('.cursdescr__slider-preview').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.cursdescr__slider-main',
		focusOnSelect: true,
    variableWidth: true,
  });
});


