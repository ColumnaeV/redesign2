//Slideshow Script//
$(window).load(function () {
    var i = 0;
    var images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg'];
    $('#wrapper').css("background-image", "url(core/img/introSlideshow/" + images[i] + ")");
    setInterval(function () {
        if (++i === images.length) {
            i = 0;
        }
        console.log(i);
        $('#nextimg').css("background-image", "url(core/img/introSlideshow/" + images[i] + ")");
        // transition animation: 2s
        $('#wrapper').fadeOut(1500, function () {
            $('#wrapper').css("background-image", "url(core/img/introSlideshow/" + images[i] + ")").show();
        });
        // slide change: 3s
    }, 4000);
});
//Lazy Loading//
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
    $("#tab1").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#section1").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $(".down").click(function (){
        $('html, body').stop( true, false).animate({
            scrollTop: $("#section1").offset().top
        }, 1000, 'easeInOutExpo');
    });
    $("#tab2").stop( true, false).click(function (){
        $('html, body').animate({
            scrollTop: $("#section2").offset().top
        }, 1000, 'easeInOutExpo');
    });
    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() > - 1000 && $(window).scrollTop() < $("#section1").offset().top - 200){
            $("#tabHome").css("background-color","#123456");
        }else{
            $("#tabHome").css("background-color","#b8b8b8");
        }
        if($(window).scrollTop() >= $("#section1").offset().top - 200 && $(window).scrollTop() < $("#section2").offset().top - 200){
            $("#tab1").css("background-color","#123456");
        }else{
            $("#tab1").css("background-color","#b8b8b8");
        }
        if($(window).scrollTop() >= $("#section2").offset().top - 200){
            $("#tab2").css("background-color","#123456");
        }else{
            $("#tab2").css("background-color","#b8b8b8");
        }
        if($(window).scrollTop() >= $("#section1").offset().top - 200){
            $("#navContainer").css("opacity","1");
            $("#navContainer").css("z-index","15");
        }else{
            $("#navContainer").css("opacity","0");
            $("#navContainer").css("z-index","-1");
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