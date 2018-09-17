module.exports = function( el ) {
	
	var $el = $(el),
  index = $el.index(),
  player;
  
  init();
  
  function init(){
    console.log('[video.init]')
    $el.find('iframe').attr('id', 'video-player-'+index);
    
    
    
  }
  
  
  
};
