require([
	], function() {
    var $doc = $(document);
    var $win = $(window);
		function init(){
      var container = document.querySelector('#portafolio');
      var menu = document.querySelector('#menu')
      resize_content()
      $win.on('resize', resize_content)

      var msnry = new Masonry( container, {
        columnWidth: '.col',
        itemSelector: '.box',
        gutterWidth:0,
        gutter:0
      } );
      
    }
    function resize_content(){
      $('#container').height($win.height())
    }
		$doc.ready(init);
});