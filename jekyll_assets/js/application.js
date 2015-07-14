$(document).ready(function (){
  $('.p-nav-container').addClass('animated bounceInUp');
  $('.p-container').addClass('animated fadeIn');

  setTimeout(function(){
    $('.plant').toggle().addClass('animated bounceInUp');
  },1000);

  setInterval(function(){
    if ($('.p-app-store').hasClass('shake')) {
      $('.p-app-store').removeClass('animated shake');
    } else {
      $('.p-app-store').addClass('animated shake')
    }

  }, 10000);
});
