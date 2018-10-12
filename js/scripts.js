jQuery(function($) {
    /* $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

    });

    $('.navbar .dropdown > a').click(function(){
        location.href = this.href;
    }); */

    $(document).ready(function() {
        $('#myCarousel').find('.carousel-item').first().addClass('active');

        var width = $(window).width();
          if (width >= 1200){
            $('.navbar-nav li.dropdown').hover(function() {
                $(this).children('div.dropdown-menu').addClass('show');
            }, function() {
                $(this).children('div.dropdown-menu').removeClass('show');
            });
          }

        $( '.dropdown-menu:not(:has(.dropdown-item))' ).addClass('hidden');
        $( 'li.dropdown:not(:has(.dropdown-item))' ).find('span.dropdown-toggle').addClass('hidden');

        $('.owl-carousel').owlCarousel({
            loop:true,
            autoWidth:true,
            items:10,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false
                }
            }
        })

    });
});