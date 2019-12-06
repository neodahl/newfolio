/* Nav Menu Controls */
(function(global, document , $){
  'use strict'

  // Header Scrolling - Offcanvas
	var headerHeight = $('.mainHeader').outerHeight();
	var presentTop = 0;
	var lastScrollPosition = 0;
	var bodyHeight = $('body').outerHeight();
	var windowHeight = $(window).height();
	var $btnNavMenu = $('.btnNavMenu');
	var $mainHeader = $('.mainHeader');
	
	$(window).on('scroll', windowScrollingCheck);

	function windowScrollingCheck() {
		if( $btnNavMenu.hasClass('is_close') ) {
			return
		} else {
			windowScrolling();
		}
	}

	function windowScrolling(){
		var bottomBouncingDelta = bodyHeight - (windowHeight + presentTop);
    presentTop = $(window).scrollTop();

		if (presentTop < headerHeight + 20) {
			// close to top
			$mainHeader.removeClass('offCanvas');	
		} else if(bottomBouncingDelta < 80) {
			//prevent ios bottom bouncing 
			$mainHeader.addClass('offCanvas');
		} else if(presentTop > lastScrollPosition) {
			//scroll down, header hide
			$mainHeader.addClass('offCanvas');
			lastScrollPosition = presentTop - 10;
		} else {
			// else, show header
			$mainHeader.removeClass('offCanvas');
			lastScrollPosition = presentTop + 10;
		}
	}


  // App Nav Show and Hide
  var mainNav = '.mainNav';
  var mainNavMenus = '.mainNav > a';
  var navOpenTL = new TimelineMax({paused: true});
  var navCloseTL = new TimelineMax({paused: true});

  navOpenTL
    .to($btnNavMenu, 0.3, {position: 'fixed', top: 0, left: 0}, 'sync1')
    .set($btnNavMenu, {className: '+=is_close'}, 'sync1')
		.to(mainNav, 0.3, {left: 0}, 'sync1')
		.set($mainHeader, {className: '+=offCanvas'}, 'sync2')
		.staggerFrom(mainNavMenus, 0.3, {autoAlpha: 0, y: 5}, 0.1, 'sync2');
	
	navCloseTL
		.set($btnNavMenu, {className: '-=is_close'}, 'sync')
		.set($mainHeader, {className: '-=offCanvas'})
		.staggerTo(mainNavMenus, 0.3, {autoAlpha: 0, y: 5}, -0.1, 'sync')
		.to(mainNav, 0.3, {left: '-300px'}, '-=0.1')
		.to($btnNavMenu, 0, {position: 'relative'});
		
	$btnNavMenu.on('click', function(){
		if($(this).hasClass('is_close')) {
			navCloseTL.restart();
			$(this).attr({'aria-label': '메뉴 열기'});
		} else {
			navOpenTL.restart();
			$(this).attr({'aria-label': '메뉴 닫기'});
		}
	});
})(window, window.document, jQuery);




/* Top Visual Animation */
(function(global, document , $){
	'use strict'
	
	var topVisualTL = new TimelineMax();

	topVisualTL
		.to('h1', 0, {top: '45%'}, 0.5)
		.to('h1 span:first-of-type', 0, {fontSize: '2.5em'})
		.from('h1 span:first-of-type', 0.6, {autoAlpha: 0}, 'sync1')
		.from('h1 span:first-of-type', 1.2, {y: 50}, 'sync1')
		.to('h1', 0.2, {top: '41%'}, 'sync2')
		.to('h1 span:first-of-type', 1, {fontSize: '1em', ease: Power1.inOut}, 'sync2')
		.from('h1 span:nth-of-type(2)', 1.5, {autoAlpha: 0, x: -10})
		.from('h1 span:nth-of-type(3)', 1.5, {autoAlpha: 0, y: 10}, '-=0.8')
		.from(CSSRulePlugin.getRule('h1 > span:last-of-type::after'), 0.5, {cssRule:{opacity:0}}, '-=0.5')
		;

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




