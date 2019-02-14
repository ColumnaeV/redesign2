$(function() {
        $('.lazy').lazy();
    });
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
      },1500);
  }
}
//Script for Nav Scrolling Functions//
$(document).ready(function (){
    $("#navContainer").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("body").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top
        }, 750, 'easeInOutExpo');
    });
    //Nav Display Control//
    $(window).scroll(function(){
        if($(window).scrollTop() >= $("#aboutMe").offset().top - 200){
            $("#navContainer").css("opacity","1");
            $("#navContainer").css("z-index","15");
        }else{
            $("#navContainer").css("opacity","0");
            $("#navContainer").css("z-index","-1");
        }
    });
    //Title Page Fade//
    $(window).on('scroll', function() {
        $('#intro').css({
            'opacity' : 1 - $(this).scrollTop()/800
        });
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