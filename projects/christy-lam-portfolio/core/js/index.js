//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('content-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('content-container').style.opacity="1";
      },1000);
  }
}
$(document).ready(function (){
    $("#nav-bar-logo-h").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("body").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $("#tabH1").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#section-1").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $("#tabH2").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#section-2").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $("#tabH3").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#section-3").offset().top
        }, 1000, 'easeInOutExpo');
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() < $("#section-1").offset().top - 50 ){
            $("span").css("padding","0.5em","margin","0.5em");
            $("span").css("color","#1c1c1c");
            $("#nav-bar-horizontal").css("background-color","#fafafa");
            $("#nav-logo").attr("src","core/img/general/tabIcon.png");
            document.title = 'Christy Lam';
        }else{
            $("span").css("padding","0.3em","margin","0.3em");
            $("span").css("color","#fafafa");
            $("#nav-bar-horizontal").css("background-color","#1c1c1c");
            $("#nav-logo").attr("src","core/img/general/icon.png");
        }
        if($(window).scrollTop() >= $("#section-1").offset().top - 50  && $(window).scrollTop() < $("#section-2").offset().top - 50 ){
            $("#tabH1").css("border-bottom","0.15em solid #85D9BF");
            document.title = 'Christy Lam | About Me';
        }else{
            $("#tabH1").css("border-bottom","0.15em solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section-2").offset().top - 50  && $(window).scrollTop() < $("#section-3").offset().top - 50 ){
            $("#tabH2").css("border-bottom","0.15em solid #FEC8D8");
            document.title = 'Christy Lam | Projects';
        }else{
            $("#tabH2").css("border-bottom","0.15em solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section-3").offset().top - 50 ){
            $("#tabH3").css("border-bottom","0.15em solid #99CCCC");
            document.title = 'Christy Lam | Connect';
        }else{
            $("#tabH3").css("border-bottom","0.15em solid rgba(0,0,0,0)");
        }
    });
});
//Smooth Scrolling//
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 30;
    else if (event.detail) delta = -event.detail / 30;

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