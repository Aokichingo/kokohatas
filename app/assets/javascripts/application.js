// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function(){
    $('body').fadeIn(1000);


var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 200) {
      $(".header").css("top", "-" + 80 + "px");
    }
  } else {
    $(".header").css("top", 0 + "px");
  }
  startPos = currentPos;
})

$('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
      $(this).find('span').text('-');
      
    }
  });
 });
 
$(function() {
  $('#AK').click(function(){
    $('#AK_pro').fadeIn();
  });

  $('.close-modal').click(function(){
    $('#AK_pro').fadeOut();
  });
  
});

$(function() {
  $('#GR').click(function(){
    $('#GR_pro').fadeIn();
  });

  $('.close-modal').click(function(){
    $('#GR_pro').fadeOut();
  });
  
});

$(function() {
  $('.object').hover(function(){
   $(this).find('.jp, .eg').slideDown();
  });
  
});

