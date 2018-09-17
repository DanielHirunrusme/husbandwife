var settings = require( "modules/settings" ),
throttle = require("modules/throttle"),
barba = require("modules/barba");

	
module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		resizeTimer;
 
 
 	    init();
 
		function init(){
			
			if (!$('html').hasClass('mobile')) barba.init();
			
      
      //menu.init();
			//footer.init();
      
      $("a").on("touchend", function(event) {
        //window.location.href = $(this).attr("href");
      });
			
			console.log('body init');
			
			 
			$window.on('resize', winResize);
		}
		
		function animOff(){
			$('body').addClass('noTransition');
		}
		
		function animOn(){
			$('body').removeClass('noTransition');
		}
		
		function winResizeEnd(){
			animOn();
		}
		
		function winResize(){
			clearTimeout(resizeTimer);
			animOff();
			
			resizeTimer = setTimeout(function(){
				winResizeEnd();
			}, 300);
		} 
		
};
  