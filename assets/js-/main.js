$(document).ready(function(){
  $(window).scroll(function(){
    if ($("#menu").offset().top > 56) {
      $("#menu").addclass("border-red");
    } else {
      $("#menu").removeClass("border-red");
    }
  });
})