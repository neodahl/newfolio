'use strict';

(function(global, document){


	var section01TL = gsap.timeline();

	section01TL
		.from('h1 > small', {duration: 0.5, opacity: 0, y: -10}, 0.2)
		.from('h1 > span', {duration: 0.5, opacity: 0, y: -10}, '-=0.3')
		.from('h1 + small', {duration: 0.5, opacity: 0, y: -10}, '-=0.3')
		.from('.section01 .right_msg', {duration: 1, opacity: 0, y: -20})
		.from('.section01 .img_conatainer', {duration: 2, opacity: 0, y: 50, x:20, scale: 1.1}, '-=1.3')
		;




})(window, window.document);





/* Focus Event */
// (function(global, document , $){
// 	$(global).on('keyup', function(e){
// 		if(e.keyCode == 9) {
// 			$(document.activeElement).addClass('focused');
// 			console.log(document.activeElement);
// 		}
// 	})
// })(window, window.document, jQuery);




