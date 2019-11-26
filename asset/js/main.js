/* Nav Menu Controls */
(function(global, document , $){
  'use strict'

  // Header Scrolling - Offcanvas
	var headerHeight = $('.mainHeader').outerHeight();
	var presentTop = 0;
	var lastScrollPosition = 0;
	var bodyHeight = $('body').outerHeight();
	var windowHeight = $(window).height();
	
	$(window).on('scroll', scrolling);
	
	function scrolling(){
		var bottomBouncingDelta = bodyHeight - (windowHeight + presentTop);
    presentTop = $(this).scrollTop();

		if (presentTop < headerHeight + 20) {
			// close to top
			$('.mainHeader').removeClass('offCanvas');	

		} else if(bottomBouncingDelta < 80) {
			//prevent ios bottom bouncing 
			$('.mainHeader').addClass('offCanvas');
							
		} else if(presentTop > lastScrollPosition) {
			//scroll down, header hide
			$('.mainHeader').addClass('offCanvas');
			lastScrollPosition = presentTop - 10;

		} else {
			// else, show header
			$('.mainHeader').removeClass('offCanvas');
			lastScrollPosition = presentTop + 10;
		}
		
	}


  // App Nav Show and Hide
  var $mainHeader = $('.mainHeader');
  var $mainNav = $('.mainNav');
  var $btnNavMenu = $('.btnNavMenu');
  var navOpenTL = new TimelineMax();

  navOpenTL.pause();

  navOpenTL
    .to($btnNavMenu, 0, {position: 'fixed', top: 0, left: 0})
    .set($btnNavMenu, {className: '+=is_closed'})
    .set($mainHeader, {className: '+=offCanvas'})
    .to($mainNav, 0, {left: 0})
    ;

    $btnNavMenu.on('click', function(){
      
      if($(this).hasClass('is_closed')) {
        navOpenTL.reverse();
      } else {
        navOpenTL.restart();
      }
    });
 



})(window, window.document, jQuery);


/* Focus Event */
// (function(global, document , $){
//   $(global).on('keyup', function(e){
//     if(e.keyCode == 9) {
//       $(document.activeElement).addClass('focused');
//       console.log(document.activeElement);
//     }
//   })
// })(window, window.document, jQuery);




