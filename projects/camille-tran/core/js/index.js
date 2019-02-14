//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
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

$(document).ready(function (){
    $(".hamburger").stop(true, false).click(function (){
        $(".hamburger").toggleClass("is-active");
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#section-1").offset().top - 50){
            $(".hamburger-wrapper").css("background-color","#888");
            $(".hamburger-wrapper").css("box-shadow","0 0 12px rgba(0,0,0,0.7)");
            $("#nav-logo").css("opacity","1");
        }else{
            $(".hamburger-wrapper").css("background-color","rgba(0,0,0,0)");
            $(".hamburger-wrapper").css("box-shadow","0 0 12px rgba(0,0,0,0)");
            $("#nav-logo").css("opacity","0");
        }
    });
    //Album Script//
    $("div.album-target").mouseover(function (event){
        $(event.target).closest("div.album-wrapper").addClass("album-hovered-on");
    });
    $("div.album-target").mouseout(function (event){
        $(event.target).closest("div.album-wrapper").removeClass("album-hovered-on");
    });
    
    //Pulse//
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(150)
                .delay(500)
                .fadeOut(150, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$("#loading-icon").seqfx();
});