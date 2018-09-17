module.exports = function( el ) {
	
	var $el = $(el);
	var timerSpeed = 4000;
  var timerInt;
  var images = $('.home-slideshow-image').toArray();
  var currImage = 0;
  
  init();
  
  function init(){
    setInterval(nextImage, timerSpeed);
    $(window).on('scroll', winScroll);
  }
  
  function nextImage(){
    console.log('nextImage')
    currImage = currImage < images.length - 1 ? currImage + 1 : 0;
    var x = $(window).width() * currImage
    //$('.home-slideshow').css('transform', 'translate(-'+x+'px, 0px)');
    
    $('.home-slideshow-image.active').removeClass('active');
    $('.home-slideshow-image').eq(currImage).addClass('active');
  }
  
  function watchSlideshow(){
    if($(window).scrollTop() > $('.home-hero').outerHeight() - $(window).height()) {
      if(!$('.home-slideshow').hasClass('abs-bottom'))
        $('.home-slideshow').addClass('abs-bottom');
    } else {
      if($('.home-slideshow').hasClass('abs-bottom'))
        $('.home-slideshow').removeClass('abs-bottom');
    }
  }
  
  function winScroll(){
    watchSlideshow();
  }
  
  function winResize(){
    watchSlideshow();
  }
  
};
