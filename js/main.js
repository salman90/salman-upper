var BASE_URL = 'https://uppercase-mailer.herokuapp.com';

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


// contact form ajax
// $('#contactButton').click(function(event){
//   $.ajax({
//     url: BASE_URL + '/email',
//     type: 'POST',
//     data: { email:    $('#email').val(),
//             message:  $('#message').val(),
//             name:     $('#name').val(),
//             phone:    $('#phone').val()
//           },
//     success: function(data){
//       // prompt pop-up success message here
//       $("#contactForm")[0].reset();
//       console.log(data);
//     },
//     error: function(error){
//       // prompt pop-up failure message
//       console.log(error);
//     }
//   });
//   event.preventDefault();
// });



// validation

$(document).ready(function() {
  $('#success_message').hide();
  $('#contactForm').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      name: {
        validators: {
            stringLength: {
            min: 2,
          },
            notEmpty: {
            message: 'Please fill out this field'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Please fill out this field'
          },
          emailAddress: {
            message: 'Please add a valid email address'
          }
        }
      },
      phone: {
        validators: {
          notEmpty: {
            message: 'Please fill out this field'
          }
        }
      },
      comment: {
        validators: {
          stringLength: {
            min: 10,
            max: 200,
            message:'Please enter at least 10 characters and no more than 200'
          },
          notEmpty: {
            message: 'Please fill out this field'
          }
          }
        }
      }
    })
  .on('success.form.bv', function(e) {
    $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
    //   $('#contactForm').data('bootstrapValidator').resetForm();
    //
    // // Prevent form submission
    // e.preventDefault();
    //
    // // Get the form instance
    // var $form = $(e.target);
    //
    // // Get the BootstrapValidator instance
    // var bv = $form.data('bootstrapValidator');
    //
    // // Use Ajax to submit form data
    // $.post($form.attr('action'), $form.serialize(), function(result) {
    //     console.log(result);
    //   }, 'json');

    $.ajax({
       url: BASE_URL + '/email',
       type: 'POST',
       data: { email:    $('#email').val(),
               message:  $('#message').val(),
               name:     $('#name').val(),
               phone:    $('#phone').val()
             },
       success: function(data){
         // prompt pop-up success message here
         $("#contactForm")[0].reset();
         console.log(data);
       },
       error: function(error){
         // prompt pop-up failure message
         console.log(error);
       }
    });
    e.preventDefault();
  });
});
