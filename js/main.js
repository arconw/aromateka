$(document).ready(() => {
  $("#main-banner-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    smartSpeed: 750,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
    },
  })
})
