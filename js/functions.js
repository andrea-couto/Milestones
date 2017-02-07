
var pContainerHeight = $('.hero').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /1.5 +'%)'
    });

    var op = (wScroll - $('.hero').height() + 400) / (wScroll / 1.5);

    $('.BB-windowTint').css({'opacity': op});

  }

  // Landing Elements
  if(wScroll > $('.flower-pics').offset().top - ($(window).height() / 1.2)) {

    $('.flower-pics figure').each(function(i){

      setTimeout(function(){
        $('.flower-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
  }

  if(wScroll > $('.flower-pics2').offset().top - ($(window).height() / 1.2)) {

    $('.flower-pics2 figure').each(function(i){

      setTimeout(function(){
        $('.flower-pics2 figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
  }

});
