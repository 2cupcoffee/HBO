$(document).ready(function () {
  $(".showSlider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      767: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  $(".moviesSliderOne").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  $(".moviesSliderTwo").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      767: {
        items: 1,
      },
      992: {
        items: 3,
      },
    },
  });
});
