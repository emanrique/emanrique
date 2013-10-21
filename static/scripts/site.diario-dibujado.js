define([
  'libs/modernizr.custom',
  'libs/jquerypp.custom',
  'libs/jquery.bookblock'
], function() {

  var $doc = $(document);
  var $win = $(window);
  var page = {
    config : {
      $bookBlock : $( '#bb-bookblock' ),
      $navNext : $( '#bb-nav-next' ),
      $navPrev : $( '#bb-nav-prev' ),
      $navFirst : $( '#bb-nav-first' ),
      $navLast : $( '#bb-nav-last' )
    },
    init : function() {
      (this).config.$bookBlock.bookblock( {
        speed : 800,
        shadowSides : 0.8,
        shadowFlip : 0.7
      } );
      (this).initEvents();
    },
    initEvents: function() {
      
      var $slides =  (this).config.$bookBlock.children();
      var el = (this);
      // add navigation events
       (this).config.$navNext.on( 'click touchstart', function() {
         el.config.$bookBlock.bookblock( 'next' );
        return false;
      } );

       (this).config.$navPrev.on( 'click touchstart', function() {
         el.config.$bookBlock.bookblock( 'prev' );
        return false;
      } );

       (this).config.$navFirst.on( 'click touchstart', function() {
         el.config.$bookBlock.bookblock( 'first' );
        return false;
      } );

       (this).config.$navLast.on( 'click touchstart', function() {
         el.config.$bookBlock.bookblock( 'last' );
        return false;
      } );
      
      // add swipe events
      $slides.on( {
        'swipeleft' : function( event ) {
           el.config.$bookBlock.bookblock( 'next' );
          return false;
        },
        'swiperight' : function( event ) {
           el.config.$bookBlock.bookblock( 'prev' );
          return false;
        }
      } );

      // add keyboard events
      $( document ).keydown( function(e) {
        var keyCode = e.keyCode || e.which,
          arrow = {
            left : 37,
            up : 38,
            right : 39,
            down : 40
          };

        switch (keyCode) {
          case arrow.left:
             (this).config.$bookBlock.bookblock( 'prev' );
            break;
          case arrow.right:
             (this).config.$bookBlock.bookblock( 'next' );
            break;
        }
      } );
    }
  };
  function init() {
    page.init();
    $win.on('resize', resize_content)
    resize_content();
  }

  function resize_content() {
     $('.base-box').css({'min-height':$win.height()-30})
  } 

 $doc.ready(init);
});
