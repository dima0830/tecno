$(document).ready(function(){
 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('a.scroll-top').fadeIn('slow');

    } else {
      $('a.scroll-top').fadeOut('slow');
    }
  });

  $('a.scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 900);
  });

})

  $(document).ready(main);

  var contador = 1;

  function main () {
    $('.menu_bar').click(function(){
      if (contador == 1) {
        $('.nav').animate({
          left: '0'
        });
        contador = 0;
      } else {
        contador = 1;
        $('.nav').animate({
          left: '-100%'
        });
      }
    });

  // Mostramos y ocultamos submenus
  $('.submenu').click(function(){
    $(this).children('.children').slideToggle();
  });
}

/*$(window).scroll(function(){
  if($(window).scrollTop() > $(window).height()){
    $("#menu").css({"background-color":"rgba(0,0,0,.5)","color":"red"}); 
  }
  else{
    $("#menu").css({"background-color":"rgba(255,255,255,.8)"});
  }

})*/

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
});

(function() {

    'use strict';

    // define variables
    var items = document.querySelectorAll("#timeline-1  li");
    console.log(items)

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    document.addEventListener('scroll', callbackFunc, true);


})();