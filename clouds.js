$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--3rd').css('top',
  +(wScroll*0.50)+'px')

  $('.parallax--2nd').css('top',
  +(wScroll*0.68)+'px')

  $('.parallax--1st').css('top',
  +(wScroll*0.85)+'px')

  // $('.parallax--box').css('top',
  // -5(wScroll*0.005)+'em')
}

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
	  var distance = 300;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

//****************scrollTo*******************
// $('a[href^="#"]').click(function(e) {
//     // Prevent the jump and the #hash from appearing on the address bar
//     e.preventDefault();
//     // Scroll the window, stop any previous animation, stop on user manual scroll
//     // Check https://github.com/flesler/jquery.scrollTo for more customizability
//     $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
//   });
