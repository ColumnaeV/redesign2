document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('bodyContainer').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.visibility="hidden";
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
    else if (event.detail) delta = -event.detail / 100;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster

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
//Fade In//
$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $(".quoteImage-left, .quoteImage-right, .quoteDiv-left, .quoteDiv-right").each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * 0.85);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    }); 
});
//Script for Nav Scrolling Functions//
$(document).ready(function (){
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $(".navDownTo").offset().top
        }, 1700, 'easeInOutExpo');
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