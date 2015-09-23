/**** Burger Menu ****/

$(document).ready(function(){
  $( ".burger-icon" ).click(function() {
    $( this ).toggleClass( "active" );
    $(".main-nav").toggleClass("hidden");
    $(".container").toggleClass("nav-opened");
    event.preventDefault();
  });
});

/**** Nav - Social color hover ****/

$(document).ready(function(){
  $('.icon-twitter').hover(function(){
    $('.main-nav').addClass('twitter');
  },function(){
    $('.main-nav').removeClass('twitter');
  });
  $('.icon-dribbble').hover(function(){
    $('.main-nav').addClass('dribbble');
  },function(){
    $('.main-nav').removeClass('dribbble');
  });
  $('.icon-instagram').hover(function(){
    $('.main-nav').addClass('instagram');
  },function(){
    $('.main-nav').removeClass('instagram');
  });
  $('.icon-linkedin').hover(function(){
    $('.main-nav').addClass('linkedin');
  },function(){
    $('.main-nav').removeClass('linkedin');
  });
  $('.icon-facebook').hover(function(){
    $('.main-nav').addClass('facebook');
  },function(){
    $('.main-nav').removeClass('facebook');
  });
});

/*** Back to Top ****/

$(document).ready(function(){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 400,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });
});

/**** Waypoints - Animations ****/

$(document).ready(function() {
  $('.about-image').waypoint(function() {
  	$('.about-image').addClass('animated fadeInRight');
  }, {
  	offset: '80%'
  });
  $('.about-intro').waypoint(function() {
    $('.about-intro').addClass('animated fadeIn');
  }, {
    offset: '80%'
  });
  $('.about-colophon').waypoint(function() {
    $('.about-colophon').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });
});

$(function(){
    $(".role").typed({
      strings: ["Designer", "Product Manager","Developer"],
      typeSpeed: 100,
      loop: true,
      startDelay: 5500,
      backSpeed: 50,
      backDelay: 2000
    });
});
