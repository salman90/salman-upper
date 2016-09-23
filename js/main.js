function scrollSpy() {
  $('body').scrollspy({ target: '#navbarScroll' });

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
}

function logoScrollToTop() {
  $('.navbar-brand').click(function(){
    $('html, body').animate({scrollTop : 0},1200);
    return false;
  });
}

function navbarColourChange() {;
  var scroll_start = 0;
  var about = $('#about');
  var offset = about.offset();
    if (about.length){
      $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#3E454C');
        } else {
          $('.navbar-default').css('background-color', 'transparent');
        }
      });
    }
}

function respond() {
  // Put all responsive functions here
  scrollSpy();
  logoScrollToTop();
  navbarColourChange();
}

$(document).ready(function() {
  respond();
});

$(window).load(function() {
});

$(window).resize(function() {

});

$(window).scroll(function() {
});
