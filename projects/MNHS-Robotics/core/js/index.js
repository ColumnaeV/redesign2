particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00a0d1"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#00a0d1"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00a0d1",
      "opacity": 0.75,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
//Script for Nav Scrolling Functions//
$(document).ready(function (){
    $("#tabHome").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 800, 'easeInOutExpo');
    });
    $(".down, h4").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 800, 'easeInOutExpo');
    });
    $("#tabAbout").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 800, 'easeInOutExpo');
    });
    $("#tabSponsor").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#sponsor").offset().top
        }, 800, 'easeInOutExpo');
    });
    $("#tabDesign").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#design").offset().top
        }, 800, 'easeInOutExpo');
    });
    $("#tabCrew").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#crew").offset().top
        }, 800, 'easeInOutExpo');
    });
    $("#tabWebDev").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#webDev").offset().top
        }, 800, 'easeInOutExpo');
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        //Intro Page//
        if($(window).scrollTop() > -1000 && $(window).scrollTop() < $("#about").offset().top - 200){
            $("#tabHome").css("color","#ffffff");
            $("#tabHome").css("background-color","#345678");
//            $('#tabAbout, #tabSponsor, #tabDesign, #tabCrew, #tabWebDev').hide(100);
            document.title = '5069B | Home';
        }else{
            $("#tabHome").css("color","#345678");
            $("#tabHome").css("background-color","rgba(0,0,0,0)");
        }
        //About Page//
        if($(window).scrollTop() >= $("#about").offset().top - 200 && $(window).scrollTop() < $("#sponsor").offset().top - 200){
            $("#tabAbout").css("color","#ffffff");
            $("#tabAbout").css("background-color","#345678");
            document.title = '5069B | About';
        }else{
            $("#tabAbout").css("color","#345678");
            $("#tabAbout").css("background-color","rgba(0,0,0,0)");
        }
        //Sponsor Page//
        if($(window).scrollTop() >= $("#sponsor").offset().top - 200 && $(window).scrollTop() < $("#design").offset().top - 200){
            $("#tabSponsor").css("color","#ffffff");
            $("#tabSponsor").css("background-color","#345678");
            document.title = '5069B | Sponsors';
        }else{
            $("#tabSponsor").css("color","#345678");
            $("#tabSponsor").css("background-color","rgba(0,0,0,0)");
        }
        //Design Page//
        if($(window).scrollTop() >= $("#design").offset().top - 200 && $(window).scrollTop() < $("#crew").offset().top - 200){
            $("#tabDesign").css("color","#ffffff");
            $("#tabDesign").css("background-color","#345678");
            document.title = '5069B | Design';
        }else{
            $("#tabDesign").css("color","#345678");
            $("#tabDesign").css("background-color","rgba(0,0,0,0)");
        }
        //Crew Page//
        if($(window).scrollTop() >= $("#crew").offset().top - 200 && $(window).scrollTop() < $("#webDev").offset().top - 200){
            $("#tabCrew").css("color","#ffffff");
            $("#tabCrew").css("background-color","#345678");
            document.title = '5069B | Crew';
        }else{
            $("#tabCrew").css("color","#345678");
            $("#tabCrew").css("background-color","rgba(0,0,0,0)");
        }
        //Web Dev Page//
        if($(window).scrollTop() >= $("#webDev").offset().top - 200){
            $("#tabWebDev").css("color","#ffffff");
            $("#tabWebDev").css("background-color","#345678");
            document.title = 'OTT | Donate';
        }else{
            $("#tabWebDev").css("color","#345678");
            $("#tabWebDev").css("background-color","rgba(0,0,0,0)");
        }
    });
    //Animated Arrow//
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(300)
                .delay(400)
                .fadeOut(600, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});