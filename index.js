'use strict';

const greeting = "hello, this is the script you've embeded"

console.log(greeting);
//basic scroll function
$(document).ready(function(){
  //basic hamburger menu event-listener
    let isOpen = 0;

    $("nav").on('click', '.nav-toggle', function(event) {
        if (isOpen !== 0){
            $('.nav-toggle').removeClass('fa-times');
            $('.nav-toggle').addClass('fa-bars');
            $('.js-menu').addClass('hidden');
            isOpen++;
        }
        else {
            $('.nav-toggle').removeClass('fa-bars');
            $('.nav-toggle').addClass('fa-times');
            $('.js-menu').removeClass('hidden');
            isOpen--;
        }    
    });
    //basic scroll event listener
    $(".js-scroll").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
          window.location.hash = hash;
        });
      };
   
    });
  });