(function ($) {
    'use strict';
    
    // add smooth scrolling

          $('body a').on('click', function(e) {
          //check for a hash value
          if(this.hash !== '') {
              //Prevent default behavior
              e.preventDefault();
              
              // Store hash
             const hash= this.hash;
              
              // Animate Smooth Scroll
              
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              },900, function() {
                  // Add hash to URL after scroll
                  window.location.hash= hash;
              });
              
              
          }
      });

    
    // Ekko Lightbox
    
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
            
    
    





     // NAVBAR COLLAPSE

              var navbarCollapse = function() {
            if ($("#main-nav").offset().top > 100) {
              $("#main-nav").addClass("navbar-scrolled");
            } else {
              $("#main-nav").removeClass("navbar-scrolled");
            }
          };
          // Collapse now if page is not at top
          navbarCollapse();
          // Collapse the navbar when page is scrolled
          $(window).scroll(navbarCollapse);
    
    


//navbar-scrolled

    // SLICK SLIDER

          $(function() {
                $('.slider').slick({
                    infinite: true,
                  slidesToShow: 5,
                  slidesToScroll: 1,
                    dots: true,
                  centerMode: true,
                  centerPadding: '0',
                    arrows: false,
                    autoplay: true,
                  responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0',
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '0',
                        slidesToShow: 1
                      }
                    }
                  ]
                }); 
            });

           
        

         // SLIDER NAV

    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }
        

    
       //Init Scrollspy
            
            $('body').scrollspy({target:'#main-nav', offset: 75});
            
       
        // Closes responsive menu when a scroll trigger link is clicked
          $('.js-scroll-trigger').click(function() {
            $('.navbar-collapse').collapse('hide');
          });
            
            
        // Back to top button
          $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
              $('.back-to-top').fadeIn('slow');
            } else {
              $('.back-to-top').fadeOut('slow');
            }
          });

          $('.back-to-top').click(function() {
            $('html, body').animate({
              scrollTop: 0
            }, 1500);
            return false;
          });


            
      AOS.init();
    
    
    // Init AOS
            AOS.init({
              duration: 1000,
              once: true
            });

    
})(jQuery);




