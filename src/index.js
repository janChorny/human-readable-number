module.exports = function toReadable (number) {
	let result = '';
	let a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
	let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let c = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];

	if (number === 0) { result = 'zero'; }
	for (let i = 0; i < c.length; i++) {
		let crossNumber = number % (100 * Math.pow(1000, i));
		if (Math.floor(crossNumber / Math.pow(1000, i)) !== 0) {
			if (Math.floor(crossNumber / Math.pow(1000, i)) < 20) {
				result = a[Math.floor(crossNumber / Math.pow(1000, i))] + c[i] + ' ' + result;
			} else {
				result = b[Math.floor(crossNumber / (10 * Math.pow(1000, i)))] + ' ' + a[Math.floor(crossNumber / Math.pow(1000, i)) % 10] + c[i] + ' ' + result;
			}
		}

		crossNumber = number % (Math.pow(1000, i + 1));
		if (Math.floor(crossNumber / (100 * Math.pow(1000, i))) !== 0)
			result = a[Math.floor(crossNumber / (100 * Math.pow(1000, i)))] + 'hundred ' + result;
	}
	return result.trim();
}
