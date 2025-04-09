$(document).ready(function () {
  $(".showSlider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    navContainer: ".classicSlider",
    responsive: {
      0: {
        items: 2,
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
