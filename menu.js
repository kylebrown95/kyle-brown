$(document).ready(function(){
  $('.parent').click(function() {
    $('.submenu').slideToggle(500);
  });
  $(window).resize(function() {
         if (  $(window).width() > 750 ) {
          $('.submenu').removeAttr('style');
       }
      });
  });


$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
});

$(window).resize(function(){
  if ( $(window).width() > 750 ) {
    $('nav ul').removeAttr('style');
    }
  });
});
