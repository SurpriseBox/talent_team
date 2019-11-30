var timeout;

function scroll_to_bottom(){
	var to_bottom = document.body.scrollHeight - (window.innerHeight + pageYOffset) - 104;
	if(to_bottom > 0){
		window.scrollBy(0, (to_bottom+100)/20);
		timeout = setTimeout('scroll_to_bottom()', 20);
	}
	else clearTimeout(timeout);
};

function scroll_to_top(){
	var to_top = document.body.scrollTop;
	if(to_top > 0){
		window.scrollBy(0, (to_top+100)/-10);
		timeout = setTimeout('scroll_to_top()', 20);
	}
	else clearTimeout(timeout);
}

function change_viewport(){
	if(window.innerWidth < 1173){
		document.body.style.cssText += 'overflow-x: visible; margin-left: auto; margin-right: auto;';
	};
}

