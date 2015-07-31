/* ---------------------------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function(e) {


	/* ---------------------------------------------------------------------------------------------- */
	/* ---------------------------------------------------------------------------------------------- */
	var SvgController = (function() {
		var arrowLeft = "M16.293,16.734C16.104,16.545,16,16.294,16,16.027c0-0.268,0.104-0.518,0.291-0.705l8.536-8.494 C25.583,6.073,26,5.068,26,4s-0.416-2.072-1.172-2.828C24.073,0.416,23.069,0,22,0c-1.068,0-2.072,0.416-2.816,1.16L7.465,12.492 C6.521,13.436,6,14.691,6,16.027s0.521,2.592,1.479,3.551l10.084,9.671l1.606,1.606c0.756,0.756,1.761,1.172,2.829,1.172 s2.073-0.416,2.828-1.171C25.583,30.101,26,29.096,26,28.028c0-1.068-0.416-2.073-1.175-2.832L16.293,16.734z M23.414,29.441 c-0.756,0.756-2.073,0.756-2.829,0L8.879,18.148C8.313,17.582,8,16.828,8,16.027c0-0.802,0.312-1.555,0.867-2.109L20.585,2.586 C20.963,2.208,21.465,2,22,2s1.036,0.208,1.414,0.586S24,3.466,24,4s-0.208,1.036-0.584,1.412l-8.536,8.494 C14.313,14.473,14,15.226,14,16.027c0,0.801,0.312,1.555,0.882,2.124l8.531,8.462C23.792,26.991,24,27.494,24,28.028 C24,28.562,23.792,29.063,23.414,29.441z";
		var arrowRight = "M24.535,12.492L12.817,1.16C12.073,0.416,11.069,0,10,0C8.931,0,7.927,0.416,7.172,1.172 C6.417,1.928,6,2.932,6,4s0.416,2.073,1.172,2.828l8.536,8.494C15.896,15.51,16,15.76,16,16.027c0,0.267-0.104,0.518-0.293,0.707 l-8.531,8.462C6.417,25.955,6,26.96,6,28.028c0,1.067,0.416,2.072,1.172,2.828c0.755,0.755,1.76,1.171,2.828,1.171 s2.073-0.416,2.829-1.172l1.606-1.606l10.084-9.671C25.479,18.619,26,17.363,26,16.027S25.479,13.436,24.535,12.492z M23.121,18.148L11.416,29.441c-0.756,0.756-2.073,0.756-2.829,0C8.208,29.063,8,28.562,8,28.028c0-0.534,0.208-1.037,0.586-1.415 l8.531-8.462C17.687,17.582,18,16.828,18,16.027c0-0.802-0.312-1.555-0.879-2.121L8.584,5.412C8.208,5.036,8,4.534,8,4 s0.208-1.036,0.586-1.414S9.466,2,10,2s1.036,0.208,1.414,0.586l11.718,11.332C23.687,14.473,24,15.226,24,16.027 C24,16.828,23.687,17.582,23.121,18.148z";
		var tools = "M16,7.322c-4.784,0-8.677,3.893-8.677,8.678c0,4.784,3.893,8.677,8.677,8.677s8.677-3.893,8.677-8.677 C24.676,11.215,20.784,7.322,16,7.322z M16,22.677c-3.682,0-6.677-2.995-6.677-6.677S12.318,9.322,16,9.322 s6.677,2.996,6.677,6.678S19.681,22.677,16,22.677z M31.117,18.829c-1.428-0.185-2.505-1.4-2.505-2.829s1.077-2.646,2.505-2.829 c0.284-0.037,0.538-0.193,0.699-0.43c0.161-0.237,0.213-0.531,0.142-0.809c-0.388-1.527-0.992-2.987-1.798-4.341 c-0.146-0.246-0.391-0.418-0.672-0.472c-0.283-0.053-0.572,0.016-0.799,0.191c-1.103,0.852-2.785,0.756-3.771-0.23 c-1.012-1.01-1.11-2.631-0.23-3.771c0.175-0.226,0.245-0.517,0.191-0.798s-0.225-0.526-0.471-0.673 c-1.351-0.804-2.811-1.408-4.341-1.798c-0.279-0.07-0.572-0.019-0.809,0.142c-0.237,0.161-0.394,0.416-0.431,0.699 c-0.184,1.428-1.4,2.504-2.829,2.504c-1.43,0-2.646-1.076-2.828-2.503c-0.037-0.284-0.193-0.539-0.43-0.7 c-0.237-0.16-0.53-0.211-0.809-0.142C10.402,0.432,8.941,1.036,7.59,1.84C7.344,1.986,7.173,2.231,7.12,2.513 s0.017,0.572,0.191,0.798c0.88,1.14,0.782,2.761-0.229,3.771C6.097,8.066,4.415,8.164,3.31,7.312 C3.083,7.137,2.793,7.069,2.511,7.12C2.23,7.174,1.986,7.346,1.839,7.592c-0.807,1.355-1.411,2.816-1.798,4.342 c-0.07,0.277-0.018,0.571,0.143,0.808c0.161,0.236,0.416,0.393,0.699,0.43c1.428,0.184,2.504,1.4,2.504,2.829 s-1.076,2.645-2.504,2.829c-0.283,0.036-0.538,0.192-0.699,0.429c-0.16,0.237-0.213,0.531-0.143,0.809 c0.387,1.526,0.992,2.987,1.798,4.342c0.146,0.246,0.391,0.418,0.672,0.472c0.28,0.051,0.572-0.017,0.798-0.19 c1.108-0.853,2.789-0.755,3.772,0.229c1.011,1.011,1.109,2.632,0.229,3.771c-0.175,0.227-0.244,0.518-0.19,0.799 c0.054,0.28,0.226,0.525,0.471,0.672c1.352,0.804,2.812,1.408,4.342,1.798c0.081,0.021,0.164,0.03,0.246,0.03 c0.198,0,0.395-0.059,0.562-0.173c0.236-0.161,0.393-0.416,0.43-0.699c0.183-1.428,1.398-2.504,2.828-2.504 c1.429,0,2.646,1.076,2.829,2.504c0.037,0.284,0.193,0.539,0.431,0.699c0.236,0.162,0.529,0.213,0.809,0.143 c1.528-0.39,2.988-0.994,4.34-1.798c0.245-0.146,0.417-0.391,0.471-0.672s-0.016-0.571-0.19-0.798 c-0.879-1.141-0.779-2.762,0.23-3.771c0.986-0.985,2.667-1.081,3.771-0.229c0.226,0.175,0.517,0.244,0.798,0.19 s0.525-0.226,0.672-0.472c0.806-1.354,1.41-2.814,1.798-4.342c0.071-0.277,0.02-0.571-0.142-0.808 C31.655,19.021,31.401,18.865,31.117,18.829z M28.919,22.514c-1.802-0.803-4.017-0.409-5.415,0.991 c-1.441,1.441-1.795,3.611-0.992,5.415c-0.639,0.322-1.301,0.597-1.981,0.82c-0.707-1.843-2.491-3.128-4.531-3.128 s-3.824,1.285-4.53,3.128c-0.681-0.224-1.344-0.498-1.982-0.82c0.805-1.803,0.451-3.974-0.991-5.416 c-0.914-0.914-2.129-1.417-3.422-1.417c-0.688,0-1.369,0.148-1.994,0.427c-0.323-0.64-0.598-1.303-0.821-1.983 c1.844-0.706,3.129-2.491,3.129-4.53c0-2.04-1.285-3.824-3.129-4.531c0.224-0.68,0.498-1.343,0.821-1.982 c0.625,0.279,1.308,0.428,1.995,0.428c1.293,0,2.508-0.504,3.422-1.418c1.443-1.442,1.796-3.613,0.99-5.417 c0.639-0.322,1.301-0.596,1.982-0.82c0.706,1.844,2.49,3.128,4.53,3.128s3.824-1.284,4.531-3.128 c0.681,0.225,1.343,0.498,1.981,0.82c-0.805,1.804-0.451,3.975,0.992,5.417c0.914,0.914,2.129,1.417,3.421,1.417 c0.688,0,1.369-0.148,1.994-0.427c0.323,0.64,0.598,1.302,0.821,1.982c-1.844,0.707-3.129,2.491-3.129,4.531 c0,2.039,1.285,3.824,3.129,4.53C29.517,21.211,29.243,21.874,28.919,22.514z M16,11.258c-2.614,0-4.741,2.128-4.741,4.742 s2.127,4.741,4.741,4.741s4.742-2.127,4.742-4.741S18.614,11.258,16,11.258z M16,17.871c-1.033,0-1.871-0.838-1.871-1.871 s0.838-1.871,1.871-1.871s1.871,0.838,1.871,1.871S17.033,17.871,16,17.871z";
		var check = "M30.768,5.151c-1.51-1.511-4.146-1.511-5.657,0L11.938,18.324l-5.05-5.05 c-1.513-1.513-4.146-1.511-5.657,0c-1.559,1.559-1.56,4.096,0,5.656l7.879,7.879c0.756,0.756,1.76,1.172,2.828,1.172 c1.069,0,2.073-0.416,2.828-1.172l16.002-16c0.756-0.756,1.172-1.761,1.172-2.829S31.523,5.907,30.768,5.151z M29.354,9.396 l-16.002,16c-0.756,0.756-2.072,0.756-2.828,0l-7.879-7.878c-0.779-0.78-0.779-2.049,0-2.829c0.378-0.378,0.88-0.586,1.415-0.586 c0.534,0,1.036,0.208,1.414,0.586l5.757,5.757c0.391,0.391,1.023,0.391,1.414,0l13.88-13.879c0.756-0.756,2.073-0.756,2.829,0 c0.378,0.377,0.586,0.88,0.586,1.414S29.731,9.018,29.354,9.396z";
		var cross = "M21.678,16.001l9.18-9.172c0.757-0.755,1.174-1.76,1.174-2.828s-0.417-2.073-1.174-2.829 c-0.755-0.755-1.762-1.171-2.831-1.171s-2.075,0.416-2.831,1.171l-9.182,9.172L6.833,1.172C6.077,0.416,5.072,0,4.001,0 c-1.069,0-2.074,0.416-2.83,1.172c-1.561,1.56-1.562,4.097,0,5.657l9.182,9.172l-9.181,9.172c-1.562,1.56-1.562,4.097,0,5.658 c0.756,0.755,1.762,1.171,2.831,1.171s2.075-0.416,2.831-1.172l9.181-9.172l9.181,9.171c0.756,0.755,1.761,1.172,2.83,1.172 c1.07,0,2.076-0.416,2.832-1.172c1.562-1.561,1.562-4.098,0-5.657L21.678,16.001z M29.442,29.415 c-0.757,0.755-2.075,0.756-2.832,0l-9.888-9.878c-0.391-0.391-1.024-0.391-1.415,0l-9.889,9.879c-0.757,0.755-2.075,0.755-2.832,0 c-0.78-0.78-0.78-2.049,0-2.829l9.889-9.879c0.188-0.188,0.293-0.441,0.293-0.707c0-0.265-0.105-0.52-0.293-0.707l-9.89-9.879 c-0.78-0.78-0.78-2.049,0-2.829C2.964,2.208,3.467,2,4.001,2c0.536,0,1.038,0.208,1.417,0.586l9.889,9.879 c0.391,0.391,1.024,0.391,1.415,0l9.889-9.878c0.757-0.756,2.075-0.756,2.832-0.001c0.378,0.378,0.587,0.881,0.587,1.415 s-0.209,1.036-0.587,1.414l-9.888,9.879c-0.391,0.391-0.391,1.023,0,1.414l9.888,9.878C30.223,27.366,30.223,28.635,29.442,29.415z";


		function getSvgDiv(svg) {
			var div = document.createElement('div');
			div.setAttribute('class', 'iconsvg');
			div.innerHTML = '<svg class="iconsvg" viewBox="0 0 32 32" style="fill:currentcolor"><path d="'+ svg + '"></path></svg>';
			return div;
		}

		function getArrowLeft () {
			return arrowLeft;
		}

		function getArrowRight () {
			return arrowRight;
		}

		function getTools () {
			return tools;
		}

		function getCheck () {
			return check;
		}

		function getCross () {
			return cross;
		}

		return {
			getSvgDiv: getSvgDiv,
			getArrowLeft: getArrowLeft,
			getArrowRight: getArrowRight,
			getTools: getTools,
			getCheck: getCheck,
			getCross: getCross
		};

	})();

	/* ---------------------------------------------------------------------------------------------- */
	/* ---------------------------------------------------------------------------------------------- */
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

	/* ---------------------------------------------------------------------------------------------- */
	/* ---------------------------------------------------------------------------------------------- */
	var StorageController = (function() {

		function setStorage(r, fn) {
			chrome.storage.sync.set(_getJson(r), function() {
				if (fn && typeof(fn) === typeof(Function)) {
					fn;
					window.location.href="/Popup/popup.html";
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


	/* ---------------------------------------------------------------------------------------------- */
	/* ---------------------------------------------------------------------------------------------- */
	var DomController = (function() {
		_setGeneralListeners();

		function renderTvs () {
			// dom caching
			var main = document.getElementById('main');
			_resetPage(main);

			chrome.storage.sync.get(null, function(items) {
				var keys = Object.keys(items);
				for (var i = 0; i < keys.length; i++) {
					var k = JSON.parse(items[keys[i]]);

					var navBtns = _htmlNavigationBtns();
					var mainText = _htmlMainTexts(k);
					var linkBtns = _htmlLinkBtns();

					_toggleBtns(navBtns, mainText, linkBtns, k);

					_htmlAppendElements(main, navBtns, mainText, linkBtns);

					_setTvsListeners();
				}
				document.body.scrollTop = ScrollController.getScroll();
			});
		}

		function _resetPage (main) {
			while (main.firstChild) {
				main.removeChild(main.firstChild);
			}
		}

		function _htmlNavigationBtns () {
			var backbtn = document.createElement('button'); 
			backbtn.setAttribute('class', 'btn decr-btn custom-btn');
			backbtn.appendChild(SvgController.getSvgDiv(SvgController.getArrowLeft()));

			var nextbtn = document.createElement('button'); 
			nextbtn.setAttribute('class', 'btn incr-btn custom-btn');
			nextbtn.appendChild(SvgController.getSvgDiv(SvgController.getArrowRight()));

			function getBackBtn () {
				return backbtn;
			}

			function getNextBtn () {
				return nextbtn;
			}

			return {
				backbtn: getBackBtn,
				nextbtn: getNextBtn
			}
		}

		function _htmlMainTexts (k) {
			var container = document.createElement('div');
			container.setAttribute('class', 'flex mb1');
			container.setAttribute('data-tvs', k.tvsId);

			var maindiv = document.createElement('div');
			maindiv.setAttribute('class', 'overflow-scroll flex-auto overflow-hidden p0');
			
			var pTvsName = document.createElement('p');
			if (k.tvsName.length >= 17 ) {
				pTvsName.setAttribute('class', 'center h3 pb0.4 m0 maintitle');
			} else {
				pTvsName.setAttribute('class', 'center h3 pb0.4 m0 maintitle divider');
			}
			pTvsName.innerHTML = k.tvsName;

			var pnextToSee = document.createElement('p');
			pnextToSee.setAttribute('class', 'center h5 m0');
			if (k.tvsFinished) {
				if (k.tvsStatus == "Ended") {
					pnextToSee.innerHTML = 'No more episodes for this tv series'
				} else {
					pnextToSee.innerHTML = 'Waiting for more episodes being aired'
				}
			} else {
				episodeNumber = (k.episodeNumber < 10 ? '0' : '') + k.episodeNumber;
				seasonNumber = (k.seasonNumber < 10 ? '0' : '') + k.seasonNumber;
				pnextToSee.innerHTML = 'Next to see: <b>' + 'E' + episodeNumber + 'x' + 'S' + seasonNumber + '</b> / <i>' + k.episodeName + '</i>';
			}

			episodeAirdate = k.episodeAirdate == null ? ' ' : k.episodeAirdate;
			leftToSee = k.leftToSee == null ? ' ' : k.leftToSee;

			var pleftToSee = document.createElement('p');
			pleftToSee.setAttribute('class', 'center h6 m0');
			if (k.seasFinished) {
				pleftToSee.innerHTML = '';
			} else if (leftToSee != ' ') {
				pleftToSee.innerHTML = '(<b>' + leftToSee + '</b> ep. left to see in this season)';
			} else if (!k.tvsFinished) {
				pleftToSee.innerHTML = '(Next ep. air date is: <b>' + episodeAirdate + '</b>)';
			} else {
				pleftToSee.innerHTML = '';
			}

			function getContainer () {
				return container;
			}

			function getMainDiv () {
				return maindiv;
			}

			function getTvsName () {
				return pTvsName;
			}

			function getNextToSee () {
				return pnextToSee;
			}

			function getLeftToSee () {
				return pleftToSee;
			}

			return {
				container: getContainer,
				maindiv: getMainDiv,
				pTvsName: getTvsName,
				pnextToSee: getNextToSee,
				pleftToSee: getLeftToSee 
			}
		}

		function _htmlLinkBtns() {
			var plinks = document.createElement('p');
			plinks.setAttribute('class', 'center pb0 mb1 h6 link-btn-container');

			var subtitles = document.createElement('a');
			subtitles.setAttribute('class', 'btn button-narrow link-btn');
			subtitles.innerHTML = 'Subtitles';

			var torrent = document.createElement('a');
			torrent.setAttribute('class', 'btn button-narrow link-btn');
			torrent.innerHTML = 'Torrent';

			var streaming = document.createElement('a');
			streaming.setAttribute('class', 'btn button-narrow link-btn');
			streaming.innerHTML = 'Streaming';

			var options = document.createElement('div');
			options.setAttribute('class', 'btn link-btn mini-tool');
			options.innerHTML = '<svg class="" viewBox="0 0 48 48" style="fill:currentcolor"><path d="'+ SvgController.getTools() + '"></path></svg>';

			function getLinks () {
				return plinks;
			}

			function getSubtitles () {
				return subtitles;
			}

			function getTorrent () {
				return torrent;
			}

			function getStreaming () {
				return streaming;
			}

			function getOptions () {
				return options;
			}

			return {
				plinks: getLinks,
				subtitles: getSubtitles,
				torrent: getTorrent,
				streaming: getStreaming,
				options: getOptions
			}
		}

		function _htmlAppendElements (main, navBtns, mainText, linkBtns) {
			main.appendChild(mainText.container());
				mainText.container().appendChild(navBtns.backbtn());
				mainText.container().appendChild(mainText.maindiv());
					mainText.maindiv().appendChild(mainText.pTvsName());
					mainText.maindiv().appendChild(mainText.pnextToSee());
					mainText.maindiv().appendChild(mainText.pleftToSee());
					mainText.maindiv().appendChild(linkBtns.plinks());
						linkBtns.plinks().appendChild(linkBtns.subtitles());
						linkBtns.plinks().appendChild(document.createTextNode('/'));
						linkBtns.plinks().appendChild(linkBtns.torrent());
						linkBtns.plinks().appendChild(document.createTextNode('/'));
						linkBtns.plinks().appendChild(linkBtns.streaming());
						linkBtns.plinks().appendChild(document.createTextNode('/'));
						linkBtns.plinks().appendChild(linkBtns.options());
				mainText.container().appendChild(navBtns.nextbtn());
		}

		function _toggleBtns (navBtns, mainText, linkBtns, k) {
			if (k.episodeAirdate == null) {
				var escTvsName = k.tvsName.replace(/\s+/g, '+').toLowerCase();

				_setLink(escTvsName, k.subtitles, linkBtns.subtitles());
				_setLink(escTvsName, k.torrent, linkBtns.torrent());
				_setLink(escTvsName, k.streaming, linkBtns.streaming());

				function _setLink(escTvsName, link, element) {
					reg = new RegExp(/((\(S\))|(\(E\))|(\(N\)))/);
					linkStr = link;
					if (reg.test(element)) {
						linkStr = element.replace(/(\(S\))/, k.seasonNumber);
						linkStr = linkStr.replace(/(\(E\))/, k.episodeNumber);
						linkStr = linkStr.replace(/(\(N\))/, escTvsName);
					}
					element.setAttribute('href', linkStr);					
				}
				// navBtns.nextbtn.setAttribute('href', '#');

			} else if (parseInt(k.episodeNumber) == 1 && parseInt(k.seasonNumber) == 1) {
				navBtns.backbtn().setAttribute('data-disabled', true);
			} else {
				navBtns.nextbtn().setAttribute('data-disabled', true);
				linkBtns.subtitles().setAttribute('data-disabled', true);
				linkBtns.torrent().setAttribute('data-disabled', true);
				linkBtns.streaming().setAttribute('data-disabled', true);
			}
		}

		/* ---------------------------------------------------------------------------------------------- */
		function _setGeneralListeners() {
			// if + btn is clicked, the page is redirected to the search html page
			document.getElementById('add-btn').addEventListener('click', function() {
				window.location.href = "/Result/result.html";
			});
		}

		function _setTvsListeners (main) {
			var incrBtns = document.getElementsByClassName('incr-btn');
			var decrBtns = document.getElementsByClassName('decr-btn');
			var linkBtns = document.getElementsByClassName('link-btn');
			var opts = document.getElementsByClassName('mini-tool');
			var j = -1;
			for (var i = 0; i < incrBtns.length; i++) {
				if (!incrBtns[i].getAttribute('data-disabled')) {
					incrBtns[i].addEventListener('click', _changeListener);
					linkBtns[++j].addEventListener('click', _linkListener);
					linkBtns[++j].addEventListener('click', _linkListener);
					linkBtns[++j].addEventListener('click', function() {});
					linkBtns[++j].addEventListener('click', function() {});
				}
				if (!decrBtns[i].getAttribute('data-disabled')) {
					decrBtns[i].addEventListener('click', _changeListener);
				}
	
				opts[i].addEventListener('click', function() {
					ScrollController.setScroll();
					var id = main.getAttribute('data-tvs');
					chrome.storage.sync.get(id, function(obj) {
						// data = getSelectedTvsData(id, obj);
						// viewOptions(main, data);
					});
				});
			}
		}

		function _linkListener () {
			ScrollController.setScroll();
			chrome.tabs.create({active: true, url: this.href});
		}

		function _changeListener () {
			ScrollController.setScroll();
			var id = this.parentNode.getAttribute('data-tvs');
			var isIncrement = this.className.split(" ").indexOf('incr-btn') >= 1 ? true : false;
			var selectedTvsLi = this.parentNode;
			chrome.storage.sync.get(id, function(obj) {
				var k = JSON.parse(obj[id]);
				theMovieDb.tv.getById({"id":k.tvsId}, function(data) {
														TvsController.changeEpisode(isIncrement, JSON.parse(data), k);
													}, function(data) {
													});
			});
		}

		return {
			renderTvs: renderTvs
		}

	})();


	/* ------------------------------	---------------------------------------------------------------- */
	/* ---------------------------------------------------------------------------------------------- */
	var TvsController = (function() {

		checkForNewEpisodes()

		/* ---------------------------------------------------------------------------------------------- */
		function checkForNewEpisodes() {
			chrome.storage.sync.get(null, function(itemsSet) {
				keySet = Object.keys(itemsSet);
				_fetchUpdates(0, keySet, itemsSet);
			});
		}

		function _fetchUpdates(recordNumber, keySet, itemsSet) {
			// base case - if all records have been checked
			if (recordNumber == keySet.length) {
				DomController.renderTvs();
				return;
			}
			
			k = JSON.parse(itemsSet[keySet[recordNumber]]);
			if (k.episodeAirdate != null) {
				theMovieDb.tvSeasons.getById({"id": k.tvsId, "season_number": k.seasonNumber}, 
					function(data) {
						_checkTvs(data, recordNumber, keySet, itemsSet);
					}, function() {
				});
			} else {
				_fetchUpdates(recordNumber + 1, keySet, itemsSet);
			}
		}

		function _checkTvs (data, recordNumber, keySet, itemsSet) {
			var r = JSON.parse(data);
			
			var date = new Date();
			var leftToSee = 0;
			var first = parseInt(k.episodeNumber) - 1;
			
			// check how many new episodes are there
			for (var i = first; i < r.episodes.length; i++) {
				var airDate = Date.parse(r.episodes[i].air_date);
				if (airDate < date) {
					leftToSee++;
				}
			}

			console.log(k)
			if (leftToSee > 0) {
				var dataArray = [k.tvsName, k.tvsId, k.episodeNumber, k.seasonNumber, k.episodeName, k.seasEpisodes, leftToSee, 
								   		  null, k.tvsStatus, k.seasFinished, false, k.subtitles, k.torrent, k.streaming];
				StorageController.setStorage(dataArray, function() {
						_fetchUpdates(recordNumber + 1, keySet, itemsSet);
				});
			} else {
				_fetchUpdates(recordNumber + 1, keySet, itemsSet);
			}
		}

		/* ---------------------------------------------------------------------------------------------- */
		function changeEpisode (isIncrement, rTvs, k) {
			var rSeas = new Array();
			for (var i = 0; i < rTvs.seasons.length; i++) {
				if (parseInt(rTvs.seasons[i].season_number) == k.seasonNumber) {
					rSeas = rTvs.seasons[i];
					break;
				}
			}

			var newK = k;

			newK.tvsStatus = rTvs.status;
			console.log(newK)
			_updateEpisode(isIncrement, newK, rSeas, rTvs);

			if (!newK.tvsFinished) {
				theMovieDb.tvSeasons.getById({"id": newK.tvsId, "season_number": newK.seasonNumber}, function (data) {
																							_successSeasonCB(newK, JSON.parse(data))
																						}, function(data) {
																						});
			} else {
				StorageController.setStorage(newK, function() {
						
				});
			}
		}

		function _updateEpisode (isIncrement, k, rSeas, rTvs) {
			k.tvsFinished = false;
			if (isIncrement) {
				if (k.episodeNumber + 1 <= rSeas.episode_count) {
					// same season / next ep
					k.episodeNumber++;
				} else if (k.episodeNumber + 1 > rSeas.episode_count && k.seasonNumber + 1 <= rTvs.number_of_seasons) {
					// next season / first ep
					k.episodeNumber = 1;
					k.seasonNumber++;
				} else {
					// user got to the end of the tvs
					k.leftToSee = null;
					k.tvsFinished = true;
				}
			} else {
				if (k.episodeNumber - 1 > 0) {
					// same season / previous ep
					k.episodeNumber--;
				} else if (k.episodeNumber - 1 == 0 && k.seasonNumber - 1 > 0) {
					// previous season / last ep
					k.episodeNumber = 'last';
					k.seasonNumber--;
				} else {
					// user got to the start of the tvs
					// k.tvsFinished = true;
				}
			}
		}		


		function _successSeasonCB(k, r) {
			k.episodeNumber = k.episodeNumber == 'last' || (k.tvsFinished && k.leftToSee == null) ? r.episodes.length : k.episodeNumber;
			rEpisode = r.episodes[k.episodeNumber-1];

			k.episodeName = rEpisode.name;
			k.seasEpisodes = r.episodes.length;
			k.leftToSee = null;
			k.episodeAirdate = null;
			k.seasFinished = false;
			
			var airDate = Date.parse(rEpisode.air_date);
			var date = new Date();
		
			console.log(k.seasEpisodes);
			if (airDate > date) {
				k.episodeAirdate = rEpisode.air_date;
			} else {
				for (var i = k.episodeNumber-1; i < k.seasEpisodes; i++) {
					var airDate = Date.parse(r.episodes[i].air_date);
					if (airDate < date) {
						k.leftToSee++;
					}
				}
			}

			StorageController.setStorage(k, function() {
					window.location.href="/Popup/popup.html";
			});
		}


		return {
			changeEpisode: changeEpisode
		}



	})();
});