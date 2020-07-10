const portfolioApp = {};

portfolioApp.init = function () {
    /*----------------------------------------------
          02. window height
      -----------------------------------------------*/
    $(".fullHeight").height($(window).height());


    /*--------------------------------
      04. Smooth Scroll
  ----------------------------------*/
    portfolioApp.smoothScroll();

    /*--------------------------------
       08. Window Scroll
   ----------------------------------*/
    $(window).on("scroll", function () {

        const mySkill = ".about";
        const animatedOnScroll = ".animated";

        // if ($(mySkill).length) {
        //     portfolioApp.spyScroll(mySkill);
        // }

        // if ($(animatedOnScroll).length) {
        //     portfolioApp.spyScroll(animatedOnScroll, "animate");
        // }

        portfolioApp.navScroll();

        //-- Scroll top --//
        const scrollTop = $(".top"),
            pageloading = ".pageLoading";
        if (scrollTop.length !== 0) {
            if ($(window).scrollTop() >= $(".aboutMe").offset().top) {
                scrollTop.addClass("scrollTopShow");
            } else {
                scrollTop.removeClass("scrollTopShow");
            }
        }

    });

    /*--------------------------------
        09. Window Resize
    ----------------------------------*/
    $(window).on("resize", function () {

        $(".fullHeight").height($(window).height());

    });

    portfolioApp.navScroll();
    /*--------------------------------
     11. typed Plugin
 ----------------------------------*/
    portfolioApp.typed();
}

portfolioApp.smoothScroll = function () {
    $(".smoothScroll").on('click', function (event) {
        event.preventDefault();
        if (this.hash !== "") {

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
}

portfolioApp.typed = function () {
    if ($("#typed").length) {
        var typed = new Typed("#typed", {
            stringsElement: '#typedStrings',
            typeSpeed: 40,
            backSpeed: 0,
            backDelay: 1500,
            startDelay: 0,
            fadeOut: false,
            loop: true
        });
    }
}

portfolioApp.navScroll = function () {
    if ($(window).scrollTop() >= 50) {
        $("nav").addClass("navScroll");
    } else {
        $("nav").removeClass("navScroll");
    }
}

// portfolioApp.spyScroll = function (selector, type = "skill") {

//     $(selector).each(function (i, el) {

//         el = $(el);
//         if (el.visible(true) && type === "animate") {

//             el.removeClass('animated_scroll');

//         } else if (el.visible(true) && $(".animatedSkills").length === 0) {
//             $(selector).addClass("animatedSkills");
//         }

//     });

// }


$(document).ready(portfolioApp.init());