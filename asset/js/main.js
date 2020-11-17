'use strict';

(function(global, document){


	var section01_TL = gsap.timeline();

	section01_TL
		.from('h1 > small', {duration: 0.5, opacity: 0, y: -10}, 0.2)
		.from('h1 > span', {duration: 0.5, opacity: 0, y: -10}, '-=0.3')
		.from('h1 + small', {duration: 0.5, opacity: 0, y: -10}, '-=0.3')
		.from('.section01 .right_msg', {duration: 1, opacity: 0, y: -20})
		.from('.section01 .img_conatainer', {duration: 2, opacity: 0, y: 50, x:20, scale: 1.1}, '-=1.3')
		;

	var section02_01_TL = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.section02',
			start: 'top 80%',
			toggleActions: 'restart none none none'
		}
	});

	section02_01_TL
	.from('.strength li > span', {stagger: 0.2, duration: 1, opacity: 0, y: -40})
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




