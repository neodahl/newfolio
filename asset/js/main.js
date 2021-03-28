'use strict';

(function(global, document){

	// Section01 Animation
	var section01_TL = gsap.timeline();

	section01_TL
		.fromTo('h1 > small', {opacity: 0, y: -10}, {duration: 0.5, opacity: 1, y: 0}, 0.5)
		.fromTo('h1 > span', {opacity: 0, y: -10}, {duration: 0.5, opacity: 1, y: 0}, '-=0.3')
		.fromTo('h1 + small', {opacity: 0, y: -10}, {duration: 0.5, opacity: 0.7, y: 0}, '-=0.3')
		.fromTo('.section01 .right_msg', {opacity: 0, y: -20}, {duration: 1, opacity: 1, y: 0})
		.fromTo('.section01 .img_conatainer',{opacity: 0}, {duration: 3, opacity: 1}, '-=1.3')
		.fromTo('.section01 .img_conatainer', {y: 20, x:20}, {duration: 2, y: 0, x:0}, '-=3')
		;

	// Section02 Animation
	var section02_01_TL = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.section02',
			// start: 'top 80%',
			toggleActions: 'restart none none none'
		}
	});
	section02_01_TL
		.from('.strength li > span', {stagger: 0.2, duration: 1.5, opacity: 0})
		.from('.strength li > span', {stagger: 0.1, duration: 1, y: -100}, 0)
		.from('.strength li > em', {stagger: 0.2, duration: 1.5, opacity: 0, x: +200}, 0.5) // x 값이 적용이 안되는것 같은디..
		.from('.strength li > p', {stagger: 0.2, duration: 1, opacity: 0, x: 20}, 1)
		;
	
	var section02_02_TL = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.career_container',
			// start: 'top 90%',
			toggleActions: 'restart none none none'
		}
	});
	section02_02_TL
		.from('.section02 .box_title', {duration: 1, opacity: 0, y: 20})
		.from('.section02 .box_title + p', {duration: 0.5, opacity: 0, y: 20}, 0.5)
		.from('.section02 .box_title + p span', {duration: 0.5, x: -20}, 0.5)
		.from('.section02 .box_title + p small', {duration: 0.5, x: 20}, 0.5)
		.from('.section02 .career_container > ul li', {stagger: 0.1, duration: 0.5, opacity: 0, y: 10}, '-=0.2')
		.from('.section02 .skills dt', {stagger: 0.2, duration: 1, opacity: 0, y: 10}, 1)
		.from('.section02 .skills dd span', {stagger: 0.1, duration: 0.3, opacity: 0, x: 10}, '-=0.4')
		;


	// Section03 Animation
	var section03_TL = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.section03',
			start: 'top 60%',
			toggleActions: 'restart none none reverse',
		}
	});
	section03_TL
		.from('.section03 h2', {duration: 2, opacity: 0})
		.from('.section03 .layout_center > p', {stagger: 0.2, duration: 0.5, opacity: 0, y:10}, 0.5)
		.from('.section03 h2 > small:first-of-type:empty', {duration: 0.5, opacity: 0, y:10})
		.from('.section03 h2 > small:last-of-type:empty', {duration: 0.5, scale: 0}, '-=0.5')
		.from('.section03 .bg_container .box', {duration: 0.5, opacity: 0, y:10})
		.from('.section03 .bg_container .line_1', {duration: 1, scale: 0 , x: 1000, y: -1000}, 0.5)
		.from('.section03 .bg_container .line_2', {duration: 1, scale: 0 , x: -2000, y: 2000}, 0.5)
		.from('.section03 .bg_container .line_3', {duration: 1, scale: 0 , x: 1000, y: -1000}, 0.5)
		;

	// Section04 Animation
	var section04_01_TL = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.section04 .list_project > li:nth-child(1)',
			start: 'top 60%',
			toggleActions: 'restart none none reverse',
		}
	});
	section04_01_TL
		.from('.section04 .list_project > li:nth-child(1) h3', {duration: 1, opacity: 0, x: 10})
		.from('.section04 .list_project > li:nth-child(1) .project_tit_box', {duration: 1, opacity: 0, x: 10}, '-=0.4')
		.from('.section04 .list_project > li:nth-child(1) .prview', {duration: 1, opacity: 0}, 0.5)
		.from('.section04 .list_project > li:nth-child(1) .contribution', {duration: 1, opacity: 0, y: 10}, '-=0.6')
		;

	var section04_02_TL = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.section04 .list_project > li:nth-child(2)',
			start: 'top 60%',
			toggleActions: 'restart none none reverse',
		}
	});
	section04_02_TL
		.from('.section04 .list_project > li:nth-child(2) h3', {duration: 1, opacity: 0, x: 10})
		.from('.section04 .list_project > li:nth-child(2) .project_tit_box', {duration: 1, opacity: 0, x: 10}, '-=0.4')
		.from('.section04 .list_project > li:nth-child(2) .prview', {duration: 1, opacity: 0}, 0.5)
		.from('.section04 .list_project > li:nth-child(2) .contribution', {duration: 1, opacity: 0, y: 10}, '-=0.6')
		;

	var section04_03_TL = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.section04 .list_project > li:nth-child(3)',
			start: 'top 60%',
			toggleActions: 'restart none none reverse',
		}
	});
	section04_03_TL
		.from('.section04 .list_project > li:nth-child(3) h3', {duration: 1, opacity: 0, x: 10})
		.from('.section04 .list_project > li:nth-child(3) .project_tit_box', {duration: 1, opacity: 0, x: 10}, '-=0.4')
		.from('.section04 .list_project > li:nth-child(3) .preview_group a', { stagger: 0.2, duration: 1, opacity: 0, y: 10}, 0.5)
		.from('.section04 .list_project > li:nth-child(3) .contribution', {duration: 1, opacity: 0, y: 10}, '-=0.6')
		;

	// Last Section Animation
	var lastSection_TL = gsap.timeline({
		scrollTrigger: {
			// markers: true,
			trigger: '.last_section',
			toggleActions: 'restart none none reverse',
		}
	});
	lastSection_TL
		.from('.last_section h2', {duration: 1, scaleY: 0}, 0.7)
		.from('.last_section .bg_container .line_1, .last_section .bg_container .line_2', {stagger:0.2, duration: 1, scale: 0 , x: 1000, y: -1000}, 0)
		.from('.last_section .bg_container .box_1, .last_section .bg_container .box_2', {stagger:0.2, duration: 1.5, opacity:0, y: 30}, 0.5)
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




