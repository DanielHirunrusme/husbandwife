module.exports = function( el ) {
	
	var $el = $(el),
      $grid;
  
  init();
  
  function init(){
    console.log('masonry init');
    
    /*
    $grid = $el.masonry({
      // options... 
      itemSelector: '.grid-item',
      horizontalOrder: true,
      percentPosition: true,
      transitionDuration: 0,
      masonry: {
        columnWidth: $(window).width()/3
      }
    });
    */
    
    $(window).on('resize', winResize);
    
    
    
    $('#masonry ul').masonry({ 'transitionDuration': 0});
    
    $el.imagesLoaded()
    .always( function( instance ) {
      console.log('all images loaded');
    })
    .done( function( instance ) {
      console.log('all images successfully loaded');
    })
    .fail( function() {
      console.log('all images loaded, at least one is broken');
    })
    .progress( function( instance, image ) {
      var result = image.isLoaded ? 'loaded' : 'broken';
      console.log( 'image is ' + result + ' for ' + image.img.src );
      $('#masonry  ul').masonry();
    });
    
  }
  
  function winResize(){
    
    
    //$('#masonry ul').masonry();
  }
  
};
