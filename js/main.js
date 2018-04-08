    $(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('show');

    });

    $('#single-testimonial-item').owlCarousel({
        items : 1,
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

    $('#single-testimonial-item').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
    $('#single-testimonial-item').find('.owl-next').html('<i class="fa fa-angle-right"></i>');

      $('#image-carousel').owlCarousel({
        navigation : false,
        pagination: true,
        items : 6,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

      $('#posts-carousel').owlCarousel({
        navigation : true,
        pagination: true,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

      $('#posts-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#posts-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');


      $('#posts-carousel-3col').owlCarousel({
        navigation : true,
        pagination: false,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

      $('#posts-carousel-3col').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#posts-carousel-3col').find('.owl-next').html('<i class="fa fa-angle-right"></i>');

      $('#image-slider').owlCarousel({
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
      });
      $('#image-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#image-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
