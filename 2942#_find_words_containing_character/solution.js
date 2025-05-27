var findWordsContaining = function(words, x) {
	let n = words.length;
	let arr = [];

	for (let i = 0; i < n; i++) {
		let w = words[i];
		for (let j = 0; j < w.length; j++) {
			if (w[j] === x) {
				arr.push(i);
				continue out;
			}
		}
	}
	return arr;
};
