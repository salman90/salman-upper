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
          }, 1200);
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

function navbarColourChange() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $(".navbar-default").css("background-color", "#3E454C");
    } else {
      $(".navbar-default").css("background-color", "transparent");
    }
  });
}

function buttonToAbout() {
  $("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        1200);
  });
}

function collapseNavOnClick() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
}

function respond() {
  // Put all responsive functions here
  scrollSpy();
  navbarColourChange();
  logoScrollToTop();
  buttonToAbout();
  collapseNavOnClick();
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
