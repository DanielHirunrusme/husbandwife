module.exports = function( el ) {
	
	var $el = $(el),
  $window = $(window);
  
  if (!$('html').hasClass('mobile')) init();
  
  function init(){
    console.log('project-menu init');
    
    $window.on('scroll', winScroll).on('resize', winResize);
    winScroll();
    
    $('.menu-link').on('mouseover', menuLinkOver).on('click', menuLinkClick);
    
    preloadImages();
    //setImageLinkPosition();
  }
  
  function preloadImages(){
    $('.projects-menu-images').imagesLoaded()
      .always( function( instance ) {
        console.log('all images loaded');
      })
      .done( function( instance ) {
        console.log('all images successfully loaded');
        //setImageLinkPosition();
      })
      .fail( function() {
        console.log('all images loaded, at least one is broken');
      })
      .progress( function( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );
        //setImageLinkPosition();
    });
  }
  
  function imageClicked(e){

  }
  
  function menuLinkClick(e){
    var index = $(e.currentTarget).parent().index();
    
    $(e.currentTarget).addClass('clicked');
    $('.image-link').eq(index).addClass('clicked');
  }
  
  function menuLinkOver(e){
    var index = $(e.currentTarget).parent().index();
    
    $('body').addClass('menu-over');
    setCurrent(index);
  }
  
  function setImageLinkPosition(){
    var offset = 36;
    var innerH = $window.height() - (offset * 3);
    
    
    $('.projects-menu-images').css('height', innerH);
    
    console.log(innerH)
  
    
    $('.image-link').each(function(){
      var index = $(this).index();
      var height = $(this).height();
      
      var factor = (innerH-height)/($('.image-link').length-1);
      var pos = (index * factor);
      
      
      $(this).css('top', pos);
    });
  }
  
  function setCurrent(num){
    
    $('.menu-link.active').removeClass('active');
    $('.image-link.active').removeClass('active');
    
    $('.menu-item').eq(num).find('a').addClass('active');
    $('.image-link').eq(num).addClass('active');
    
  }
  
  function winScroll(){

  }
  
  function winResize(){
    //setImageLinkPosition();
  }
  
  function setCounter(num){
    console.log(num);
    $current.text(num);
  }
  
};
