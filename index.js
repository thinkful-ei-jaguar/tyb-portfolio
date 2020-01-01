'use strict';

const greeting = "hello, this is the script you've embeded"

console.log(greeting);
//basic scroll function
$(document).ready(function(){
    $(".js-scroll").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
          window.location.hash = hash;
        });
      }
    });
  });