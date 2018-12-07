$(document).ready(function() {

  $('a.main-header__navbar__toggle-button').click(function() {
    var active = $('nav.main-header__navbar ul').hasClass('active');
    if(active) {
      $('nav.main-header__navbar ul').removeClass('active');
      $(this).removeClass('active');
    } else {
      $('nav.main-header__navbar ul').addClass('active');
      $(this).addClass('active');
    }
    return false;
  });

  $('.newspaper-comments_container').owlCarousel({
    items: 1,
    nav: true,
    //navText: [prevButton, nextButton],
    dots: false
  });

  $('.our-picks__container').owlCarousel({
    nav: true,
    //navText: [prevButton, nextButton],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      },
      1600: {
        items: 3
      }
    }
  });
  
  $('.homepage__gallery__container').owlCarousel({
    nav: true,
    //navText: [prevButton, nextButton],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      },
      1600: {
        items: 3
      }
    },
    slideBy: 3
  });

  $('.homepage__gallery__column__item a').simpleLightbox();

});