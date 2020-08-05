const portfolioApp = {};

portfolioApp.init = function () {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    /*----------------------------------------------
        01. Hamburger menu
    -----------------------------------------------*/

    $("#hamburger").on('click', (e) => {
        const className = ` ${hamburger.className} `;
        if (className.includes(' open ')) {
            e.currentTarget.className = className.replace(' open ', ' ');
        } else {
            e.currentTarget.className += ' open';
        }
    })

    $(".container").on('click', function () {
        $(this).toggleClass("menu-expanded");
    })
    /*----------------------------------------------
          02. window height
      -----------------------------------------------*/
    $(".fullHeight").height($(window).height());


    /*--------------------------------
      03. Smooth Scroll
  ----------------------------------*/
    portfolioApp.smoothScroll();

    /*--------------------------------
       04. Window Scroll
   ----------------------------------*/
    $(window).on("scroll", function () {

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
        05. Window Resize
    ----------------------------------*/
    $(window).on("resize", function () {

        $(".fullHeight").height($(window).height());

    });

    portfolioApp.navScroll();
    /*--------------------------------
     06. typed Plugin
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

// To change the color of navbar when the page is scrolled pass the header
portfolioApp.navScroll = function () {
    if ($(window).scrollTop() >= 50) {
        $("nav").addClass("navScroll");
    } else {
        $("nav").removeClass("navScroll");
    }
}


$(document).ready(portfolioApp.init());