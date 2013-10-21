require([
  'libs/jquery.flexslider'
  ], function(flex) {
    var $doc = $(document);
    var $win = $(window);
    function init(){
      $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 6000,     
        slideshow: 1,               
        animation: 'slide',
        animationLoop: true,
        controlNav: true,  
        smoothHeight: true,           
        directionNav: true,
        pauseOnAction: true,            
        pauseOnHover: false,            
        useCSS: true,                   
        touch: true,                  
        video: false,
        prevText: "",           //String: Set the text for the "previous" directionNav item
        nextText: "",
      });
      $win.on('resize', resize_content)
      resize_content();
    }
    function resize_content(){
       $('#container').height($win.height()-80)
       $('.base-box').css({'min-height':$win.height()-80})
    }
    $doc.ready(init);
});