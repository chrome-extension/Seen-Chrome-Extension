var SvgController = (function() {
	var arrowLeft = '<svg class="left" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px" height="45px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:#FFFFFF;}</style> <g id="Layer_3"> <path d="M6,4l20,12L6,28V4 M6,2C5.7,2,5.3,2.1,5,2.3C4.4,2.6,4,3.3,4,4v24c0,0.7,0.4,1.4,1,1.7C5.3,29.9,5.7,30,6,30 c0.4,0,0.7-0.1,1-0.3l20-12c0.6-0.4,1-1,1-1.7c0-0.7-0.4-1.4-1-1.7L7,2.3C6.7,2.1,6.4,2,6,2L6,2z" transform="translate(15) rotate(59 9 10)"/> </g> <g id="Guides"> </g> </svg>';
	var arrowRight = '<svg class="right" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px" height="45px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:#FFFFFF;}</style> <g id="Layer_3"> <path d="M6,4l20,12L6,28V4 M6,2C5.7,2,5.3,2.1,5,2.3C4.4,2.6,4,3.3,4,4v24c0,0.7,0.4,1.4,1,1.7C5.3,29.9,5.7,30,6,30 c0.4,0,0.7-0.1,1-0.3l20-12c0.6-0.4,1-1,1-1.7c0-0.7-0.4-1.4-1-1.7L7,2.3C6.7,2.1,6.4,2,6,2L6,2z" transform="translate(-2)"/> </g> <g id="Guides"> </g> </svg>';
	var doubleArrowLeft = '<svg class="double-right" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="10px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:#FFFFFF;}</style> <g id="Layer_3"> <path d="M6,4l20,12L6,28V4 M6,2C5.7,2,5.3,2.1,5,2.3C4.4,2.6,4,3.3,4,4v24c0,0.7,0.4,1.4,1,1.7C5.3,29.9,5.7,30,6,30 c0.4,0,0.7-0.1,1-0.3l20-12c0.6-0.4,1-1,1-1.7c0-0.7-0.4-1.4-1-1.7L7,2.3C6.7,2.1,6.4,2,6,2L6,2z" transform="translate(15) rotate(59 9 10)"/> </g> <g id="Layer_3"> <path d="M6,4l20,12L6,28V4 M6,2C5.7,2,5.3,2.1,5,2.3C4.4,2.6,4,3.3,4,4v24c0,0.7,0.4,1.4,1,1.7C5.3,29.9,5.7,30,6,30 c0.4,0,0.7-0.1,1-0.3l20-12c0.6-0.4,1-1,1-1.7c0-0.7-0.4-1.4-1-1.7L7,2.3C6.7,2.1,6.4,2,6,2L6,2z" transform="translate(40) rotate(59 9 10)"/> </g> <g id="Guides"> </g> </svg>';
	var doubleArrowRight = '<svg class="double-left" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="10px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"> <style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:#FFFFFF;}</style> <g id="Layer_3"> <path d="M6,4l20,12L6,28V4 M6,2C5.7,2,5.3,2.1,5,2.3C4.4,2.6,4,3.3,4,4v24c0,0.7,0.4,1.4,1,1.7C5.3,29.9,5.7,30,6,30 c0.4,0,0.7-0.1,1-0.3l20-12c0.6-0.4,1-1,1-1.7c0-0.7-0.4-1.4-1-1.7L7,2.3C6.7,2.1,6.4,2,6,2L6,2z" transform="translate(-20)"/> </g> <g id="Layer_3"> <path d="M6,4l20,12L6,28V4 M6,2C5.7,2,5.3,2.1,5,2.3C4.4,2.6,4,3.3,4,4v24c0,0.7,0.4,1.4,1,1.7C5.3,29.9,5.7,30,6,30 c0.4,0,0.7-0.1,1-0.3l20-12c0.6-0.4,1-1,1-1.7c0-0.7-0.4-1.4-1-1.7L7,2.3C6.7,2.1,6.4,2,6,2L6,2z" transform="translate(5)"/> </g> <g id="Guides"> </g> </svg>';
	var options = '<svg class="options-btn" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32; width: 20px; float: left; margin-top: 3px; margin-right: 5px" xml:space="preserve"> <style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:#FFFFFF;}</style> <g id="Layer_3"> <g> <g> <path d="M17,4c0.6,0,1,0.4,1,1v1.2c1.3,0.3,2.4,0.8,3.5,1.5l0.9-0.9c0.2-0.2,0.5-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3l1.4,1.4 c0.4,0.4,0.4,1,0,1.4l-0.9,0.9c0.7,1,1.2,2.2,1.5,3.5H27c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1h-1.2c-0.3,1.3-0.8,2.4-1.5,3.5 l0.9,0.9c0.4,0.4,0.4,1,0,1.4l-1.4,1.4c-0.2,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3l-0.9-0.9c-1,0.7-2.2,1.2-3.5,1.5V27 c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1v-1.2c-1.3-0.3-2.4-0.8-3.5-1.5l-0.9,0.9c-0.2,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3 l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4l0.9-0.9c-0.7-1-1.2-2.2-1.5-3.5H5c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h1.2 c0.3-1.3,0.8-2.4,1.5-3.5L6.8,9.6c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.2-0.2,0.5-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3l0.9,0.9 c1-0.7,2.2-1.2,3.5-1.5V5c0-0.6,0.4-1,1-1H17 M17,2h-2c-1.5,0-2.8,1.2-3,2.7c-0.4,0.1-0.8,0.3-1.2,0.5c-0.5-0.4-1.2-0.7-1.9-0.7 c-0.8,0-1.6,0.3-2.1,0.9L5.4,6.8C4.8,7.4,4.5,8.1,4.5,8.9c0,0.7,0.2,1.4,0.7,1.9C5,11.2,4.8,11.6,4.7,12C3.2,12.2,2,13.4,2,15v2 c0,1.6,1.2,2.8,2.7,3c0.1,0.4,0.3,0.8,0.5,1.2c-0.4,0.5-0.7,1.2-0.7,1.9c0,0.8,0.3,1.6,0.9,2.1l1.4,1.4c0.6,0.6,1.3,0.9,2.1,0.9 c0.7,0,1.4-0.2,1.9-0.7c0.4,0.2,0.8,0.4,1.2,0.5c0.2,1.5,1.4,2.7,3,2.7h2c1.5,0,2.8-1.2,3-2.7c0.4-0.1,0.8-0.3,1.2-0.5 c0.5,0.4,1.2,0.7,1.9,0.7c0.8,0,1.6-0.3,2.1-0.9l1.4-1.4c0.6-0.6,0.9-1.3,0.9-2.1c0-0.7-0.2-1.4-0.7-1.9c0.2-0.4,0.4-0.8,0.5-1.2 c1.5-0.2,2.7-1.4,2.7-3v-2c0-1.6-1.2-2.8-2.7-3c-0.1-0.4-0.3-0.8-0.5-1.2c0.4-0.5,0.7-1.2,0.7-1.9c0-0.8-0.3-1.6-0.9-2.1 l-1.4-1.4c-0.6-0.6-1.3-0.9-2.1-0.9c-0.7,0-1.4,0.2-1.9,0.7C20.8,5,20.4,4.8,20,4.7C19.8,3.2,18.5,2,17,2L17,2z"/> </g> <g> <path d="M16,22.5c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5s6.5,2.9,6.5,6.5S19.6,22.5,16,22.5z M16,10.5c-3,0-5.5,2.5-5.5,5.5 s2.5,5.5,5.5,5.5c3,0,5.5-2.5,5.5-5.5S19,10.5,16,10.5z"/> </g> <g> <path d="M16,19.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5S17.9,19.5,16,19.5z M16,13.5 c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5S17.4,13.5,16,13.5z"/> </g> </g> </g> <g id="Guides"> </g> </svg>'
	var archive = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:#FFFFFF;}</style><g id="Layer_3"><g><path class="st0" d="M28,3H4C2.4,3,1,4.3,1,6v1c0,1.3,0.8,2.4,2,2.8V27c0,1.1,0.9,2,2,2H27c1.1,0,2-0.9,2-2V9.8c1.1-0.4,2-1.5,2-2.8V6C31,4.3,29.6,3,28,3z M3,6c0-0.6,0.4-1,1-1h24c0.5,0,1,0.5,1,1v1c0,0.5-0.4,1-0.9,1c0,0,0,0,0,0H4c0,0,0,0,0,0C3.5,8,3,7.6,3,7V6z M5,27V10h22v17L5,27z"/><path class="st0" d="M19,13h-6c-0.6,0-1,0.5-1,1c0,0.6,0.4,1,1,1h6c0.6,0,1-0.5,1-1C20,13.4,19.5,13,19,13z"/></g></g><g id="Guides"></g></svg>';
	var trash = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><g id="Layer_3"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M25.5,4.2h-7c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1h-6c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h0.1c0,0.2-0.1,0.3-0.1,0.5v17c0,1.7,1.3,3,3,3h13c1.7,0,3-1.3,3-3v-17c0-0.2,0-0.3-0.1-0.5h0.1c0.6,0,1-0.4,1-1v-2C26.5,4.7,26.1,4.2,25.5,4.2z M23.5,8.8v17c0,0.6-0.4,1-1,1h-13c-0.6,0-1-0.4-1-1v-17c0-0.2,0.1-0.4,0.2-0.5h14.7C23.4,8.4,23.5,8.6,23.5,8.8z"/><rect x="12" y="11.2" fill-rule="evenodd" clip-rule="evenodd" width="1" height="13"/><rect x="15.5" y="11.2" fill-rule="evenodd" clip-rule="evenodd" width="1" height="13"/><rect x="19" y="11.2" fill-rule="evenodd" clip-rule="evenodd" width="1" height="13"/></g></g><g id="Guides"></g></svg>';
	var close = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:#FFFFFF;}</style><g id="Layer_3"><path d="M23.6,5c0.3,0,0.6,0.1,0.8,0.3l2.3,2.3c0.4,0.4,0.4,1.1,0,1.5L19.8,16l6.9,6.9c0.4,0.4,0.4,1.1,0,1.5l-2.3,2.3c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3L16,19.8l-6.9,6.9C8.9,26.9,8.6,27,8.4,27c-0.3,0-0.6-0.1-0.8-0.3l-2.3-2.3c-0.4-0.4-0.4-1.1,0-1.5l6.9-6.9L5.3,9.1C4.9,8.7,4.9,8,5.3,7.6l2.3-2.3C7.8,5.1,8.1,5,8.4,5c0.3,0,0.6,0.1,0.8,0.3l6.9,6.9l6.9-6.9C23.1,5.1,23.4,5,23.6,5 M23.6,3c-0.8,0-1.6,0.3-2.2,0.9L16,9.4l-5.5-5.5C10,3.3,9.2,3,8.4,3C7.5,3,6.8,3.3,6.2,3.9L3.9,6.2c-1.2,1.2-1.2,3.2,0,4.4L9.4,16l-5.5,5.5C3.3,22,3,22.8,3,23.6c0,0.8,0.3,1.6,0.9,2.2l2.3,2.3C6.8,28.7,7.5,29,8.4,29c0.8,0,1.6-0.3,2.2-0.9l5.5-5.5l5.5,5.5c0.6,0.6,1.4,0.9,2.2,0.9c0.8,0,1.6-0.3,2.2-0.9l2.3-2.3c0.6-0.6,0.9-1.4,0.9-2.2c0-0.8-0.3-1.6-0.9-2.2L22.6,16l5.5-5.5c1.2-1.2,1.2-3.2,0-4.4l-2.3-2.3C25.2,3.3,24.5,3,23.6,3L23.6,3z"/></g><g id="Guides"></g></svg>';
	var confirm = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 36 36" style="enable-background:new 0 0 36 36;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}.st1{fill:#FFFFFF;}</style><g id="Layer_3"><path d="M27.9,8c0.3,0,0.5,0.1,0.7,0.3l2.1,2.1c0.4,0.4,0.4,1,0,1.4l-15.9,16c-0.2,0.2-0.4,0.3-0.7,0.3c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.2,0-0.5-0.1-0.7-0.3l-8-8.1c-0.4-0.4-0.4-1,0-1.4l2.1-2.1c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3l5.3,5.3L27.2,8.3C27.4,8.1,27.7,8,27.9,8 M11.9,29.1c0.6,0.6,1.3,0.9,2.1,0.9c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.8,0,1.5-0.3,2.1-0.9l15.9-16c0.6-0.6,0.9-1.3,0.9-2.1c0-0.8-0.3-1.6-0.9-2.1L30,6.9C29.5,6.3,28.7,6,27.9,6l0,0c-0.8,0-1.5,0.3-2.1,0.9L14.1,18.6l-3.9-3.9c-0.6-0.6-1.3-0.9-2.1-0.9c-0.8,0-1.5,0.3-2.1,0.9l-2.1,2.1C3.3,17.4,3,18.1,3,18.9c0,0.8,0.3,1.5,0.9,2.1L11.9,29.1z"/></g><g id="Guides"></g></svg>';
	
	var add =  "M21.678,16.001l9.18-9.172c0.757-0.755,1.174-1.76,1.174-2.828s-0.417-2.073-1.174-2.829 c-0.755-0.755-1.762-1.171-2.831-1.171s-2.075,0.416-2.831,1.171l-9.182,9.172L6.833,1.172C6.077,0.416,5.072,0,4.001,0 c-1.069,0-2.074,0.416-2.83,1.172c-1.561,1.56-1.562,4.097,0,5.657l9.182,9.172l-9.181,9.172c-1.562,1.56-1.562,4.097,0,5.658 c0.756,0.755,1.762,1.171,2.831,1.171s2.075-0.416,2.831-1.172l9.181-9.172l9.181,9.171c0.756,0.755,1.761,1.172,2.83,1.172 c1.07,0,2.076-0.416,2.832-1.172c1.562-1.561,1.562-4.098,0-5.657L21.678,16.001z M29.442,29.415 c-0.757,0.755-2.075,0.756-2.832,0l-9.888-9.878c-0.391-0.391-1.024-0.391-1.415,0l-9.889,9.879c-0.757,0.755-2.075,0.755-2.832,0 c-0.78-0.78-0.78-2.049,0-2.829l9.889-9.879c0.188-0.188,0.293-0.441,0.293-0.707c0-0.265-0.105-0.52-0.293-0.707l-9.89-9.879 c-0.78-0.78-0.78-2.049,0-2.829C2.964,2.208,3.467,2,4.001,2c0.536,0,1.038,0.208,1.417,0.586l9.889,9.879 c0.391,0.391,1.024,0.391,1.415,0l9.889-9.878c0.757-0.756,2.075-0.756,2.832-0.001c0.378,0.378,0.587,0.881,0.587,1.415 s-0.209,1.036-0.587,1.414l-9.888,9.879c-0.391,0.391-0.391,1.023,0,1.414l9.888,9.878C30.223,27.366,30.223,28.635,29.442,29.415z";
	
	function getSvgElement(svg) {
		var el = document.createElement(svg.element);
		el.setAttribute('class', svg.className);
		el.innerHTML = svg.path;
		return el;
	}

	function getArrowLeft () {
		return {
			element: 'td',
			className: 'decr-btn',
			path: arrowLeft
		}
	}

	function getArrowRight () {
		return {
			element: 'td',
			className: 'incr-btn',
			path: arrowRight
		}
	}

	function getDoubleArrowLeft () {
		return {
			element: 'td',
			className: 'double-decr-btn',
			path: doubleArrowLeft
		}
	}

	function getDoubleArrowRight () {
		return {
			element: 'td',
			className: 'double-incr-btn',
			path: doubleArrowRight
		}
	}

	function getOptions () {
		return {
			element: 'svg',
			className: 'options',
			path: options
		}
	}

	function getAdd () {
		return {
			path: add
		}
	}

	function getArchive () {
		return {
			element: 'svg',
			className: 'archive',
			path: archive
		}
	}

	function getTrash () {
		return {
			element: 'svg',
			className: 'trash',
			path: trash
		}
	}

	function getClose () {
		return {
			element: 'svg',
			className: 'close',
			path: close
		}
	}

	function getConfirm () {
		return {
			element: 'svg',
			className: 'confirm',
			path: confirm
		}
	}


	return {
		getSvgElement: getSvgElement,
		getArrowLeft: getArrowLeft,
		getArrowRight: getArrowRight,
		getDoubleArrowLeft: getDoubleArrowLeft,
		getDoubleArrowRight: getDoubleArrowRight,
		getOptions: getOptions,
		getArchive: getArchive,
		getTrash: getTrash,
		getConfirm: getConfirm,
		getClose: getClose,
		getAdd: getAdd,
	}

})();


var StorageController = (function() {

	function setStorage(r, fn) {
		chrome.storage.sync.set(_getJson(r), function() {
			if (fn && typeof(fn) === typeof(Function)) {
				fn();
			}
		});
	}

	function _getJson(r) {
		var save = r.tvsId,
			selectedValues = JSON.stringify({
				'tvsName': r.tvsName,
				'tvsId': r.tvsId,
				'episodeNumber': parseInt(r.episodeNumber),
				'seasonNumber': parseInt(r.seasonNumber),
				'episodeName': r.episodeName,
				'seasEpisodes': r.seasEpisodes,
				'leftToSee': r.leftToSee,
				'episodeAirdate': r.episodeAirdate,
				'tvsStatus': r.tvsStatus,
				'seasFinished': r.seasFinished,
				'tvsFinished': r.tvsFinished,
				'subtitles': r.subtitles,
				'torrent': r.torrent,
				'streaming': r.streaming
			});

		var jsonfile = {};
		jsonfile[save] = selectedValues;
		return jsonfile;
	}

	return {
		setStorage: setStorage
	}

})();

var ScrollController = (function() {
	function getScroll() {
		scroll = localStorage.getItem('scroll');
		localStorage.removeItem('scroll');
		return scroll;
	}

	function setScroll() {
		localStorage.setItem('scroll', document.body.scrollTop);
	}

	return {
		getScroll: getScroll,
		setScroll: setScroll
	}
})();

var DateController = (function() {
	function _getShortMonth(month) {
		if (month < 1 || month > 12) {
			console.log("Month Number Exception");
			return;
		}

		shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		return shortMonth[month-1];
	}

	function _translateTime(daysNumber) {
		var absDaysNumber = Math.abs(daysNumber)
		var sentence = '';
		if (absDaysNumber < 7) {
			dayWord = absDaysNumber == 1 ? ' day' : ' days';
			sentence = absDaysNumber == 0 ? 'today' : absDaysNumber + dayWord;
		} else if (Math.floor(absDaysNumber/7) < 4) {
			var weeksNumber = Math.floor(absDaysNumber / 7);
			var weekWord = weeksNumber == 1 ? ' week' : ' weeks';
			var sentence = weeksNumber + weekWord;
			if (absDaysNumber % 7 != 0) {
				sentence = '> ' + sentence;
			}
		} else {
			sentence = '> 1 month';
		}

		if (daysNumber < 0) {
			return 'In ' + sentence;
		} else if (daysNumber > 0) {
			return sentence + ' ago';
		}
		return sentence;
	}

	function getDaysDifference(episodeAirDate) {
		var today = new Date();
        var episodeAirDate = episodeAirDate.split('-');
        episodeAirDate = new Date(episodeAirDate[0], episodeAirDate[1]-1, episodeAirDate[2]);
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var diff = Math.round((today - episodeAirDate)/((1000*60*60*24)));
		return _translateTime(diff);
	}

	function getConvertedDate(date) {
		// date format: 2015-10-31
		year = date.substring(0, 4);
		month = _getShortMonth(date.substring(5, 7));
		day = date.substring(8, 10)
		return day + " " + month + " " + year;
	}

	return {
		getConvertedDate: getConvertedDate,
		getDaysDifference: getDaysDifference
	}
})();