;(function () {
	"use strict";
	function editHTML(event) {
		let text = document.querySelector('.ba-text'),
			 div = document.querySelector('.ba-show');

		

		if (event.keyCode == 69 && event.ctrlKey) {
			event.preventDefault();
		text.hidden = false;
		div.hidden = true;	

		text.value = div.innerHTML;
		text.focus();

		} else if(event.keyCode == 83 && event.ctrlKey) {
			event.preventDefault();
			
			
			
			text.hidden = true;
			div.hidden = false;
			
			div.innerHTML = text.value; 

		}	else if (event.keyCode == 27){
			text.hidden = true;
			div.hidden = false;
		}
	}

	document.addEventListener('keydown', editHTML);

})();

