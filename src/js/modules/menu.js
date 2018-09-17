module.exports = function( el ) {
	
	var $el = $(el),
  $window = $(window);
  
  init();
  
  function init(){
    console.log('menu init');
    
    $('.home-link').on('click', homeLinkClicked);
  }
  
  function homeLinkClicked(){
    
  }
  
  
};
