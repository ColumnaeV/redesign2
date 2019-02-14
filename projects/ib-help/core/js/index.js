//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('bodyContainer').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('bodyContainer').style.opacity="1";
      },500);
  }
}
//Smooth Scrolling//
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 60;
    else if (event.detail) delta = -event.detail / 60;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}
var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 20;
  var scrollSpeed = 20;

	if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}
//Script for Nav Scrolling Functions//
$(document).ready(function (){
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#navHere").offset().top
        }, 750);
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
                .fadeIn(350)
                .delay(800)
                .fadeOut(350, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});