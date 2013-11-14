require([
	], function() {
    var $doc = $(document);
    var $win = $(window);
		function init(){
      $win.on('resize', resize_page);
      resize_page();
      show_logo_home();
    }
    function resize_page(){
      $('.page').height($win.height())
    }

    function show_logo_home() {

      setTimeout(function(){
        $('.logo').animate(
          {
            'opacity':'1',
            'width':'150',
            'top':'0',
            'margin-left':'-75'
          },
          1000, 
          function() {
            $('.emanrique').animate({
            'opacity':'1',
            'top':'200'
            },1000);
          }
        )
      }, 500);
    }
		$doc.ready(init);
});