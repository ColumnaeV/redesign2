particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#555"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#555"
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
        "opacity_min": 0.9,
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
      "color": "#555",
      "opacity": 0.9,
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
//Nav Function//
function openNav() {
    'use strict';
    document.getElementById("navContainer").style.cssText = "opacity: 1; z-index: 15;";
    document.getElementById("navMobile").style.cssText = "opacity: 0; z-index: -1;";
    document.getElementById("bodyContainer").style.cssText = "-webkit-filter: blur(10px); -moz-filter: blur(10px); -o-filter: blur(10px); -ms-filter: blur(10px); filter: blur(10px);";
}
function closeNav() {
    'use strict';
    document.getElementById("navMobile").style.cssText = "opacity: 1; z-index: 15;";
    document.getElementById("navContainer").style.cssText = "opacity: 0; z-index: -1;";
    document.getElementById("bodyContainer").style.cssText = "-webkit-filter: blur(0px); -moz-filter: blur(0px); -o-filter: blur(0px); -ms-filter: blur(0px); filter: blur(0px);";
}

//Loading Function//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('bodyContainer').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.visibility="hidden";
          document.getElementById('bodyContainer').style.opacity="1";
      }, 500);
  }
}
//Script for Nav Scrolling Functions//
$(document).ready(function (){
    $("#tabTitle").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("body").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#homeInformation").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $("#tab1").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#section1").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    $("#tab2").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#section2").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    $("#tab3").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#section3").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    $("#tab4").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#section4").offset().top + 250
        }, 1000, 'easeInOutExpo');
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() > -1000 && $(window).scrollTop() < $("#section1").offset().top - 200){
            $("#tabTitle").css("background-color","#345678");
            document.title = 'MNHS IB | Community';
        }else{
            $("#tabTitle").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#section1").offset().top - 200 && $(window).scrollTop() < $("#section2").offset().top - 200){
            $("#tab1").css("background-color","#345678");
            document.title = 'MNHS IB | Alumni';
        }else{
            $("#tab1").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#section2").offset().top - 200){
            $("#tab2").css("background-color","#345678");
            document.title = 'MNHS IB | Candidates';
        }else{
            $("#tab2").css("background-color","#c4c4c4");
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
                .delay(500)
                .fadeOut(450, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down").seqfx();
});
