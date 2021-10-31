console.log(window);
const scrollAnimate = () => {
  $('[data-scroll-animate]').each(function() {
    if ( $(document).scrollTop() >= ( $(this).offset().top - ($(window).height() / 1.1) ) ) {
      $(this).addClass('scroll-animate-show');
    }
  });
}

const adaptiveProductSlider = () => {
  const ww = $(window).width();
  const lines = $('[data-adaptive-product-slider]');
  if (ww < 1400) { 
    lines.each(function() {
      const line = $(this);
      line.addClass('owl-carousel');
      line.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        smartSpeed: 750,
        responsive: {
          1200: {
            items: 4,
            dots: true,
          },

          900: {
            items: 3,
            dots: true,
          },

          500: {
            items: 2,
            dots: true,
          },

          0: {
            items: 1,
            dots: true,
          },
        },
      })
    });
  } else {
    lines.trigger('destroy.owl.carousel');
    lines.removeClass('owl-carousel');
  }
}

const withoutTarget = (el, cl) => {
  if (!el.is(e.target) 
      && el.has(e.target).length === 0) { 
        if ( typeof cl == 'function' ) cl()
  }
}

$(document).ready(e => {
  scrollAnimate();
  adaptiveProductSlider();

  window.onresize = function() {
      clearTimeout(window.doit);
      window.doit = setTimeout(function() {
        adaptiveProductSlider();
      }, 100);
  };

  $(window).scroll(e => {
    scrollAnimate();
  });

  $('#for-h-menu').click(e => $('#h-menu').toggleClass('open'));
  $('#h-menu').click(e => $('#h-menu').toggleClass('open'))
  $("#seo-toggler").click(function() {
    $('#seo').toggleClass('seo-hidden');
    $('#seo').toggleClass('seo-show');
    $(this).toggleClass('active');
  });
  //$(document).click((e) => ());
})
