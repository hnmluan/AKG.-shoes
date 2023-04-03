// <!-- RESPONSIVE MENU -->

showMenu = function () {
  document.getElementById("responsiveMenu").classList.toggle("xl:block");
};

$(document).ready(function () {
  $("#brands").owlCarousel({
    items: 4,
    loop: true,
    center: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      '<span aria-label="Previous"><i class="fa-sharp fa-solid fa-arrow-left-long"></i></span>',
      '<span aria-label="Next"><i class="fa-sharp fa-solid fa-arrow-right-long"></i></span>',
    ],
    navContainer: navBrands,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  $("#inspirations").owlCarousel({
    items: 4,
    loop: true,
    center: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: false,
    autoWidth: true,
    center: true,
    responsive: {
      0: {
        items: 2,
      },
      640: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
    $("#arrivals").owlCarousel({
      responsive: {
        0:{
          items: 1,
          loop: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,

        },
        736: {
          items: 2,
          loop: true,
          margin: 15,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          dots: true,
        },
        1281: {
          items: 3,
          margin: 30,
          dots: false,
        },
      },
    });
  });
