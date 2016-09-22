function backgroundVideo() {
  var winHeight = $(window).height();
  $('video').css({  'height': winHeight, 'width': '100%'});
}

function respond() {
  // Put all responsive functions here
  // backgroundVideo();
}

$(document).ready(function() {
});

$(window).load(function() {
});

$(window).resize(function() {
  respond();
});

$(window).scroll(function() {
});
