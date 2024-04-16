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
        if (width >= 1200) {
            $('.navbar-nav li.dropdown').hover(function() {
                $(this).children('div.dropdown-menu').addClass('show');
            }, function() {
                $(this).children('div.dropdown-menu').removeClass('show');
            });
        }

        $('.dropdown-menu:not(:has(.dropdown-item))').addClass('hidden');
        $('li.dropdown:not(:has(.dropdown-item))').find('span.dropdown-toggle').addClass('hidden');

        $('.owl-carousel').owlCarousel({
            loop: true,
            autoWidth: true,
            items: 10,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
        });

        $("#switch_visibility").click(function() {
            $("body").css({
                "font-size": "1.5rem",
                "color": "#000",
                "background-color": "#fff"
            });
        });
    });
});

const cookieBox = document.querySelector(".cookie-popup"),
    buttons = document.querySelectorAll(".cookie-button");

const executeCodes = () => {
    //if cookie contains codinglab it will be returned and below of this code will not run
    if (document.cookie.includes("codinglab")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            //if button has acceptBtn id
            if (button.id == "acceptBtn") {
                //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
                document.cookie = "cookieBy= ddu411; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);
