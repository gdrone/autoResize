/**
 * Jquery Plugin
 * Copyright: Global Development Room, LLC.
 * Author: Oleksandr Drozd
*/

$.fn.autoResize = function(){
	let r = e => {
		e.style.height = '';
		e.style.height = e.scrollHeight + 'px'
	};
	return this.each((i,e) => {
		e.style.overflow = 'hidden';
		r(e);
		$(e).bind('input', e => {
			r(e.target);
		})
	})
};
