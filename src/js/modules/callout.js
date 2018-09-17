module.exports = function( el ) {
	
	var $el = $(el);
  
  init();
  
  function init(){
    console.log('callout init');
    
    $(window).on('scroll', calloutScroll).on('resize', calloutScroll);
    calloutScroll();
  }
  
  function calloutScroll(){
    //console.log($el.position().top)
    var op = 1;
    
    if( $(window).scrollTop() >= $el.position().top - $(window).height()/2 + $el.find('.text').outerHeight()/2 ) {
        
    
        //$el.addClass('fixed');
        $el.find('.text').css('left', $(window).width()/2 - $el.find('.text').outerWidth()/2).css('top', $(window).height()/2 - $el.find('.text').outerHeight()/2)
      
        
      op = 1 - ($(window).scrollTop() - $el.position().top)/($(window).height()/2);
      
      console.log( ($(window).scrollTop() - $el.position().top)/($(window).height()/2) );
      console.log($(window).height()/2)
      
      
      
      //console.log('fade out = ' + op)
      
      var yPos = ($(window).scrollTop() - $el.position().top - $(window).height() + $el.find('.text').outerHeight()/2);
      //console.log(yPos);
      
      //$el.find('.text').css('transform', 'translate(0px, -'+yPos+'px)');
      
    } else {
      op = 1;
      //$el.removeClass('fixed');
      
      //$el.find('.text').css('left', '').css('top', '').css('transform', 'translate(0px, 0px)');;
    }
    
    $el.css('opacity', op);
    
    //console.log($(window).scrollTop())
  }
  
};
