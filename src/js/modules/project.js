var Viewer = require('viewerjs');

module.exports = function( el ) {
	
	var $el = $(el),
  $window = $(window),
  $pi = $el.find('.project-images'),
  $aside = $('aside'),
  $current = $('.current'),
  $total = $('.total'),
  $container = $window,
  viewer;
  
  if (!$('html').hasClass('mobile')) {
    init();
  } else {
    $('.image-link').on('click', function(e) {
      e.preventDefault();
    });
  }
  
  function init(){
    console.log('project init');
    
    $container.on('scroll', winScroll);
    //winScroll();
    
    $('.to-top').on('click', topClicked);
    $('.to-text').on('click', textClicked);
    $('.image-link').on('click', imageClicked);
    $total.text($el.find('.project-image').length )
    $('.counter').show();
    
    
    var options = {
      title: false,
      toolbar: false,
      rotatable: false,
      transition: false,
      shown: function () {
        console.log('shown');
        console.log(this.viewer)
        
        setTimeout(function(){
          viewer.zoom(1);
        }, 10);
      },
    }
    
    $('project-image-viewer').on('shown', function () {
      console.log('shown zoom in')
    }, false);
    
    //viewer = new Viewer(document.getElementById('project-image-viewer'), options);
  }
  
  function topClicked(){
    $('body, html').stop().animate({scrollTop:0 }, 400, 'linear');
  }
  
  function textClicked(){
    $('body, html').stop().animate({scrollTop: $('.project-text').position().top }, 400, 'linear');
  }
  
  function imageClicked(e){
    e.preventDefault();
    
    var index = $(this).closest('.project-image').index();
    var totalImages = $('.project-image').length - 1;
    
    console.log(index)
    
    if (index < totalImages){
      var next = index + 1;
      var pos = $('.project-image').eq(next).position().top - ($window.height() - $('.project-image').eq(next).height() - 36);
      $('body, html').stop().animate({scrollTop: pos }, 250, 'linear');
    } else if(index == totalImages) {
      var pos = $('.project-text').position().top;
      $('body, html').stop().animate({scrollTop: pos }, 250, 'linear');
    }
    
    //var index = $(e.currentTarget).parent().index() + 1;
    //var pos = $('.project-image').eq(index).position().top - $('.project-image').eq(index).height() + $window.height();
    //console.log(index)
    //$('body, html').stop().animate({scrollTop: pos }, 0, 'linear');
  }
  
  function winScroll(){
    //console.log('scroll')
    
    console.log($el.find('.project-image').eq(0).find('.image-link').position().top)
    
    if( $container.scrollTop() > $el.find('.project-image').eq(0).find('.image-link').position().top ) {
      $('.project-title-aside').addClass('active');
      $('.home-link').addClass('hidden');
    } else {
      $('.project-title-aside').removeClass('active');
      $('.home-link').removeClass('hidden');
    }
    
    //console.log($container.scrollTop())
    if( $container.scrollTop() >  $pi.height() - $window.height() + 36 + $pi.offset().top ){
      $aside.addClass('bottom').css('bottom', -($('.project-images').height() - $window.height() + $('.project-images').offset().top) );
    } else {
      $aside.removeClass('bottom').css('bottom', '');
    }
    
    $('.project-image').each(function(){
      var index = $(this).index() + 1;
      if($container.scrollTop() > $(this).position().top - $window.height()/2){
        setCounter(index);
      }
    })
  }
  
  function setCounter(num){
    console.log(num);
    $current.text(num);
  }
  
};
