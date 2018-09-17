//var Instafeed = require("instafeed.js");


module.exports = function( el ) {
	
	var $el = $(el);
	
	var feed = new Instafeed({
	        get: 'user',
	        userId: '1731750240',
	        clientId: '1254d491b8414666ad42e69871538253',
			accessToken: '1731750240.1677ed0.8d2f6531f29f41c0842e46e98f9ad157',
			template: '<img class="instafeed-image" src="{{image}}" />',
			resolution: 'standard_resolution',
			after: function() {
				setImages();
		     },
	    });
		
	    feed.run();
		
		
		function setImages(){
			
			$('.instafeed-image').each(function(){
				$(this).css('left', $(this).index() * 220);
			});
			
		}
};