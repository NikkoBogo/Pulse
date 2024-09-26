
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
                focusOnSelect: true,
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

      //modal

      $('[data-model=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('fast');
      });
      $('.model__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
      });
      
      $('.button--small').each(function(i){
        $(this).on('click', function(){
          $('#order .model__description').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('fast');
        })
      });
      
      function validateForms(form){
        $(form).validate({
          rules: {
            name:"required",
            phone:"required",
            email:{
              required:true,
              email:true
            }
          },
          messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Почта должна быть в формате name@domain.com"
            }
          }
        });
      };
      validateForms('#consultation-form')
      validateForms('#order form')
      validateForms('#consultation form')

        $("input[name=phone]").mask("+375(99) 999-99-99");
        $("#phone").mask("(999) 999-9999");
        $("#tin").mask("99-9999999");
        $("#ssn").mask("999-99-9999");

        $('form').submit(function(e){
          e.preventDefault();

          if (!$(this).valid()) {
            return;
          }

          $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
          }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset');
          });
          return false;
        });
        // Smooth scroll and pageup

        $(window).scroll(function() {
          if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
          } else {
            $('.pageup').fadeOut();
          }
        });

        $("a[href^=#up]").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
        });

        new WOW().init();
  });

  