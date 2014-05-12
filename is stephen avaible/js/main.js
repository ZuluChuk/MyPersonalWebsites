var homePage = {

    introSection: function() {

        function resizeWindow () {
            var h = $(window).height();
            var w = $(window).width();

            var headerHeight = Math.max.apply(null, $("#mainPageHeader").map(function ()
            {
                return $(this).height();
            }).get());

            var navHeight = Math.max.apply(null, $("#navigation").map(function ()
            {
                return $(this).height();
            }).get());

            var setHeight = h - headerHeight - navHeight - 174 ;
            console.log (setHeight);
            $("#introSection").css('height',(h > 889 /*|| w < 1024*/) ? 435 : setHeight);
        }

        $(window).resize(function(){
            resizeWindow ();
        });

        $( document ).ready(function(){
            resizeWindow ();
        });
    },

    smoothScrolling: function() {

        $(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });
    },

    showNav: function() {
        $("#hamburger").click(function() {
            $("#navMenu").fadeToggle();
        });
    },

    navSticky: function() {
        $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset ;
        var screenheight = $(window).height();;
        var scroll_pos_test = screenheight - 150; 
        // set to whatever you want it to be

        if(y_scroll_pos > scroll_pos_test) {
          $( "#navigation" ).addClass( "stuck" );
        }
        else
        {
            $( "#navigation" ).removeClass( "stuck" );
        }
    });
    }

};

homePage.introSection();
homePage.smoothScrolling();
homePage.navSticky();
homePage.showNav();