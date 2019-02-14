particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 40,
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
//Functions for Nav//
var navHome = document.getElementById("intro");
var navAbout = document.getElementById("aboutMe");
var navProjects = document.getElementById("projects");
var navContact = document.getElementById("contact");
var tabHome = document.getElementById("tabHome");
var tabAbout = document.getElementById("tabAbout");
var tabProjects = document.getElementById("tabProjects");
var tabContact = document.getElementById("tabContact");
function scrollWin() {
    'use strict';
    window.scrollTo(0, 0);
}
function buttonClear() {
    'use strict';
    tabHome.style.cssText = 'background-color: rgba(0,0,0,0);';
    tabAbout.style.cssText = 'background-color: rgba(0,0,0,0);';
    tabProjects.style.cssText = 'background-color: rgba(0,0,0,0);';
    tabContact.style.cssText = 'background-color: rgba(0,0,0,0);';
}
function home() {
    'use strict';
    scrollWin();
    buttonClear();
    tabHome.style.cssText = "background-color: #00a0d1; color: #ffffff;";
    navHome.style.cssText = "z-index: 11; opacity: 1; height: auto; overflow: auto;";
    navAbout.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navProjects.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navContact.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
}
function about() {
    'use strict';
    scrollWin();
    buttonClear();
    tabAbout.style.cssText = "background-color: #00a0d1; color: #ffffff;";
    navHome.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navAbout.style.cssText = "z-index: 11; opacity: 1; height: auto; overflow: auto;";
    navProjects.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navContact.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
}
function projects() {
    'use strict';
    scrollWin();
    buttonClear();
    tabProjects.style.cssText = "background-color: #00a0d1; color: #ffffff;";
    navHome.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navAbout.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navProjects.style.cssText = "z-index: 11; opacity: 1; height: auto; overflow: auto;";
    navContact.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
}
function contact() {
    'use strict';
    scrollWin();
    buttonClear();
    tabContact.style.cssText = "background-color: #00a0d1; color: #ffffff;";
    navHome.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navAbout.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navProjects.style.cssText = "z-index: 1; opacity: 0; height: 0px; overflow: hidden;";
    navContact.style.cssText = "z-index: 11; opacity: 1; height: auto; overflow: auto;";
}