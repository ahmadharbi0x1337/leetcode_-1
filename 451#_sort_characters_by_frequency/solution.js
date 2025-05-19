var frequencySort = function (s) {

	let freq = new Map();

	for (let char of s) {
		freq[char] = (freq[char] || 0) + 1;
	}

	const sortedChars = Object.entries(freq).sort( ([, freqA], [, freqB]) => freqB - freqA);

	let result = "";

	for (const [char, freq] of sortedChars) {
		result += char.repeat(freq);
	}

	return result;
}
