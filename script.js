$(document).ready(function(){
  // let progress = document.getElementById('progressbar');
  //     let totalHeight = document.body.scrollHeight -
  //     window.innerHeight;
  //     window.onscroll = function(){
  //       let progressHeight = (window.pageYOffset /
  //       totalHeight) * 100;
  //       progress.style.height = progressHeight + "%";
  //     }

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav ').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('.fa-bars').removeClass('fa-times');
    $('nav ').removeClass('nav-toggle');
  });

  $('.project').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });
  
});

