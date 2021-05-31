// cursurile slider
$(function () {
  $('.cursurile__slider-inner').slick({
    prevArrow: '.cursurile__arrow-prev',
    nextArrow: '.cursurile__arrow-next',
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  });
});

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

// atmosfera slider
$(function () {
  $('.atmosfera__slider').slick({
    prevArrow: '.atmosfera__arrow-prev',
    nextArrow: '.atmosfera__arrow-next',
    autoplay: false,
    slidesToShow: 4,
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

// publication slider
$(function () {
  $('.publication__slider-inner').slick({
    prevArrow: '.impressile__arrow-prev',
    nextArrow: '.impressile__arrow-next',
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  });
});

// lightGallery
lightGallery(document.getElementById('gallery'), {
	thumbnail: true,
	fullScreen: true,
});




// articles tabs
document.querySelectorAll('.tabs__triggers-item').forEach((item) =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__triggers-item').forEach(
      (child) => child.classList.remove('tabs__triggers-item--active')
    );
    document.querySelectorAll('.tabs__content-item').forEach(
      (child) => child.classList.remove('tabs__content-item--active')
    );

    item.classList.add('tabs__triggers-item--active');
    document.getElementById(id).classList.add('tabs__content-item--active');
  })
);

document.querySelector('.tabs__triggers-item') && document.querySelector('.tabs__triggers-item').click();

