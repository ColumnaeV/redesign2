$(function() {
        $('.lazy').lazy();
    });
//Image Correction//
(function() {
var img = document.getElementById('artContainer').firstChild;
img.onload = function() {
    if(img.height > img.width) {
        img.height = '90%';
        img.width = 'auto';
    }
};
}());
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
    $("#tabHome").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("body").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $("#tabAbout").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top + 50
        }, 1000, 'easeInOutExpo');
    });
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#aboutMe").offset().top + 50
        }, 1000, 'easeInOutExpo');
    });
    $("#tabProjects").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top + 50
        }, 1000, 'easeInOutExpo');
    });
    $("#tabContact").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top + 50
        }, 1000, 'easeInOutExpo');
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() > -1000 && $(window).scrollTop() < $("#aboutMe").offset().top - 200){
            $("#tabHome").css("background-color","#3F0551");
            document.title = 'Austin Nguyen | Home';
        }else{
            $("#tabHome").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#aboutMe").offset().top - 200 && $(window).scrollTop() < $("#projects").offset().top - 200){
            $("#tabAbout").css("background-color","#3F0551");
            document.title = 'Austin Nguyen | About Me';
        }else{
            $("#tabAbout").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#projects").offset().top - 200 && $(window).scrollTop() < $("#contact").offset().top - 200){
            $("#tabProjects").css("background-color","#3F0551");
            document.title = 'Austin Nguyen | Gallery';
        }else{
            $("#tabProjects").css("background-color","#c4c4c4");
        }
        if($(window).scrollTop() >= $("#contact").offset().top - 200){
            $("#tabContact").css("background-color","#3F0551");
            document.title = 'Austin Nguyen | Connect';
        }else{
            $("#tabContact").css("background-color","#c4c4c4");
        }
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
