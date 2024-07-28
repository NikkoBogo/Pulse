
$(document).ready(function(){
    $('.carousel-inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-right.svg"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            },]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
        $(this)
          .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
      });

      /* $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
        })
      }); */

      /* $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
        })
      }); */

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
          })
        })
      }
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
  });