(function iife() {
	const btnSeeMore = document.getElementById('js-button-more');
	const listDevsBlock = document.getElementById('js-listdevs-switch');
	let stateForSwitch = true;
	function switchTrue() {
		listDevsBlock.setAttribute('class', 'ui-listdevs-display');
		stateForSwitch = false;
		console.log('display');
	}
	function switchFalse() {
		listDevsBlock.setAttribute('class', 'ui-listdevs-hidden');
		stateForSwitch = true;
		console.log('hidde');
	}
	btnSeeMore.addEventListener('click', (() => {
		(stateForSwitch) ? switchTrue() : switchFalse();
	}));
}());
